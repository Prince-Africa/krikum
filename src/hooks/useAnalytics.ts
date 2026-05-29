import { useEffect, useCallback, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { analytics } from '../utils/analytics';

const NFC_OPEN_PENDING_KEY = 'item7go:nfc-open-pending';

declare global {
    interface Window {
        __item7goNfcOpenPending?: boolean;
    }
}

export const useAnalytics = () => {
    const location = useLocation();
    const pageStartTime = useRef<number>(Date.now());
    const scrollDepthTracked = useRef<Set<number>>(new Set());

    // Track page view on route changes
    useEffect(() => {
        analytics.trackPageView();

        let hasPendingNfcOpen = window.__item7goNfcOpenPending === true;

        try {
            hasPendingNfcOpen = hasPendingNfcOpen || sessionStorage.getItem(NFC_OPEN_PENDING_KEY) === 'true';
            sessionStorage.removeItem(NFC_OPEN_PENDING_KEY);
        } catch {
            // Storage can be unavailable in restricted browser contexts.
        }

        if (hasPendingNfcOpen) {
            window.__item7goNfcOpenPending = false;
            analytics.trackNfcOpen();
        }
    }, [location.pathname, location.search]);

    // Track time on page when component unmounts
    useEffect(() => {
        const startTime = pageStartTime.current;

        return () => {
            const timeOnPage = Math.round((Date.now() - startTime) / 1000);
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

    const sendCustomEvent = useCallback((eventName: string, parameters: Record<string, unknown>) => {
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
