import { useEffect, useCallback, useRef } from 'react';
import { analytics } from '../utils/analytics';

export const useAnalytics = () => {
    const pageStartTime = useRef<number>(Date.now());
    const scrollDepthTracked = useRef<Set<number>>(new Set());

    // Track page view on mount
    useEffect(() => {
        analytics.trackPageView();

        // Track time on page when component unmounts
        return () => {
            const timeOnPage = Math.round((Date.now() - pageStartTime.current) / 1000);
            analytics.trackTimeOnPage(timeOnPage);
        };
    }, []);

    // Track scroll depth
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = Math.round((scrollTop / docHeight) * 100);

            // Track at 25%, 50%, 75%, and 100% scroll depths
            const trackPoints = [25, 50, 75, 100];
            trackPoints.forEach(point => {
                if (scrollPercent >= point && !scrollDepthTracked.current.has(point)) {
                    scrollDepthTracked.current.add(point);
                    analytics.trackScrollDepth(point);
                }
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const trackButtonClick = useCallback((buttonName: string, location: string) => {
        analytics.trackButtonClick(buttonName, location);
    }, []);

    const trackAppDownload = useCallback((store: 'app_store' | 'play_store') => {
        analytics.trackAppDownload(store);
    }, []);

    const trackUserEngagement = useCallback((
        action: string,
        category: string,
        label?: string,
        value?: number
    ) => {
        analytics.trackUserEngagement(action, category, label, value);
    }, []);

    const sendCustomEvent = useCallback((eventName: string, parameters: Record<string, any>) => {
        analytics.sendCustomEvent(eventName, parameters);
    }, []);

    return {
        trackButtonClick,
        trackAppDownload,
        trackUserEngagement,
        sendCustomEvent,
        getDeviceInfo: analytics.getDeviceInfo,
        getLocationInfo: analytics.getLocationInfo
    };
};
