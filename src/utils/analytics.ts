// Analytics utility for enhanced tracking
declare global {
    interface Window {
        gtag: (...args: any[]) => void;
        dataLayer: any[];
    }
}

export interface UserDeviceInfo {
    deviceType: 'mobile' | 'tablet' | 'desktop';
    browser: string;
    browserVersion: string;
    os: string;
    osVersion: string;
    screenResolution: string;
    viewportSize: string;
    userAgent: string;
    language: string;
    timezone: string;
    connectionType?: string;
    memoryInfo?: {
        totalJSHeapSize: number;
        usedJSHeapSize: number;
        jsHeapSizeLimit: number;
    };
}

export interface UserLocationInfo {
    country?: string;
    region?: string;
    city?: string;
    latitude?: number;
    longitude?: number;
    ipAddress?: string;
}

export class Analytics {
    private static instance: Analytics;
    private deviceInfo: UserDeviceInfo | null = null;
    private locationInfo: UserLocationInfo | null = null;

    private constructor() {
        this.initializeDeviceInfo();
        this.initializeLocationInfo();
    }

    public static getInstance(): Analytics {
        if (!Analytics.instance) {
            Analytics.instance = new Analytics();
        }
        return Analytics.instance;
    }

    private initializeDeviceInfo(): void {
        const userAgent = navigator.userAgent;
        const screen = window.screen;
        const viewport = {
            width: window.innerWidth,
            height: window.innerHeight
        };

        // Determine device type
        let deviceType: 'mobile' | 'tablet' | 'desktop' = 'desktop';
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
            deviceType = viewport.width < 768 ? 'mobile' : 'tablet';
        }

        // Browser detection
        let browser = 'Unknown';
        let browserVersion = 'Unknown';
        if (userAgent.includes('Chrome')) {
            browser = 'Chrome';
            browserVersion = userAgent.match(/Chrome\/(\d+)/)?.[1] || 'Unknown';
        } else if (userAgent.includes('Firefox')) {
            browser = 'Firefox';
            browserVersion = userAgent.match(/Firefox\/(\d+)/)?.[1] || 'Unknown';
        } else if (userAgent.includes('Safari')) {
            browser = 'Safari';
            browserVersion = userAgent.match(/Version\/(\d+)/)?.[1] || 'Unknown';
        } else if (userAgent.includes('Edge')) {
            browser = 'Edge';
            browserVersion = userAgent.match(/Edge\/(\d+)/)?.[1] || 'Unknown';
        }

        // OS detection
        let os = 'Unknown';
        let osVersion = 'Unknown';
        if (userAgent.includes('Windows')) {
            os = 'Windows';
            osVersion = userAgent.match(/Windows NT (\d+\.\d+)/)?.[1] || 'Unknown';
        } else if (userAgent.includes('Mac')) {
            os = 'macOS';
            osVersion = userAgent.match(/Mac OS X (\d+_\d+)/)?.[1]?.replace('_', '.') || 'Unknown';
        } else if (userAgent.includes('Linux')) {
            os = 'Linux';
        } else if (userAgent.includes('Android')) {
            os = 'Android';
            osVersion = userAgent.match(/Android (\d+\.\d+)/)?.[1] || 'Unknown';
        } else if (userAgent.includes('iOS')) {
            os = 'iOS';
            osVersion = userAgent.match(/OS (\d+_\d+)/)?.[1]?.replace('_', '.') || 'Unknown';
        }

        // Connection info
        const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
        const connectionType = connection?.effectiveType || 'Unknown';

        // Memory info
        const memoryInfo = (performance as any).memory ? {
            totalJSHeapSize: (performance as any).memory.totalJSHeapSize,
            usedJSHeapSize: (performance as any).memory.usedJSHeapSize,
            jsHeapSizeLimit: (performance as any).memory.jsHeapSizeLimit
        } : undefined;

        this.deviceInfo = {
            deviceType,
            browser,
            browserVersion,
            os,
            osVersion,
            screenResolution: `${screen.width}x${screen.height}`,
            viewportSize: `${viewport.width}x${viewport.height}`,
            userAgent,
            language: navigator.language,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            connectionType,
            memoryInfo
        };

        // Send device info to GA
        this.sendCustomEvent('device_info', {
            device_type: deviceType,
            browser: `${browser} ${browserVersion}`,
            os: `${os} ${osVersion}`,
            screen_resolution: this.deviceInfo.screenResolution,
            viewport_size: this.deviceInfo.viewportSize,
            connection_type: connectionType,
            language: this.deviceInfo.language,
            timezone: this.deviceInfo.timezone
        });
    }

    private async initializeLocationInfo(): Promise<void> {
        try {
            // Get location from IP using a free service
            const response = await fetch('https://ipapi.co/json/');
            const data = await response.json();

            this.locationInfo = {
                country: data.country_name,
                region: data.region,
                city: data.city,
                latitude: data.latitude,
                longitude: data.longitude,
                ipAddress: data.ip
            };

            // Send location info to GA
            this.sendCustomEvent('location_info', {
                country: this.locationInfo.country,
                region: this.locationInfo.region,
                city: this.locationInfo.city,
                latitude: this.locationInfo.latitude,
                longitude: this.locationInfo.longitude
            });

        } catch (error) {
            console.warn('Could not fetch location info:', error);
        }
    }

    public trackPageView(pageTitle?: string, pageLocation?: string): void {
        if (typeof window.gtag !== 'undefined') {
            window.gtag('config', 'G-F72LXWKV8K', {
                page_title: pageTitle || document.title,
                page_location: pageLocation || window.location.href
            });
        }
    }

    public sendCustomEvent(eventName: string, parameters: Record<string, any>): void {
        if (typeof window.gtag !== 'undefined') {
            window.gtag('event', eventName, parameters);
        }
    }

    public trackUserEngagement(action: string, category: string, label?: string, value?: number): void {
        this.sendCustomEvent('user_engagement', {
            action,
            category,
            label,
            value,
            device_type: this.deviceInfo?.deviceType,
            browser: this.deviceInfo?.browser,
            os: this.deviceInfo?.os
        });
    }

    public trackButtonClick(buttonName: string, location: string): void {
        this.sendCustomEvent('button_click', {
            button_name: buttonName,
            location,
            device_type: this.deviceInfo?.deviceType,
            browser: this.deviceInfo?.browser,
            os: this.deviceInfo?.os
        });
    }

    public trackAppDownload(store: 'app_store' | 'play_store'): void {
        this.sendCustomEvent('app_download', {
            store,
            device_type: this.deviceInfo?.deviceType,
            browser: this.deviceInfo?.browser,
            os: this.deviceInfo?.os,
            country: this.locationInfo?.country,
            region: this.locationInfo?.region
        });
    }

    public trackScrollDepth(depth: number): void {
        this.sendCustomEvent('scroll_depth', {
            depth_percentage: depth,
            device_type: this.deviceInfo?.deviceType,
            browser: this.deviceInfo?.browser
        });
    }

    public trackTimeOnPage(seconds: number): void {
        this.sendCustomEvent('time_on_page', {
            seconds,
            device_type: this.deviceInfo?.deviceType,
            browser: this.deviceInfo?.browser
        });
    }

    public getDeviceInfo(): UserDeviceInfo | null {
        return this.deviceInfo;
    }

    public getLocationInfo(): UserLocationInfo | null {
        return this.locationInfo;
    }
}

// Export singleton instance
export const analytics = Analytics.getInstance();
