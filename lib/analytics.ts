// Analytics event tracking helper functions

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

// Google Analytics Event
export const trackGAEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

// Facebook Pixel Event
export const trackFBEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, eventParams);
  }
};

// Combined tracking (GA4 + FB Pixel)
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  trackGAEvent(eventName, eventParams);
  trackFBEvent(eventName, eventParams);
};

// Predefined event trackers

export const trackPhoneClick = () => {
  trackEvent('phone_click', {
    event_category: 'engagement',
    event_label: 'Call +356 7905 5156',
    value: 1,
  });
};

export const trackWhatsAppClick = () => {
  trackEvent('whatsapp_click', {
    event_category: 'engagement',
    event_label: 'WhatsApp Chat',
    value: 1,
  });
};

export const trackEmailClick = () => {
  trackEvent('email_click', {
    event_category: 'engagement',
    event_label: 'Email info@ghawdex.pro',
    value: 1,
  });
};

export const trackCTAClick = (buttonText: string, location: string) => {
  trackEvent('cta_click', {
    event_category: 'conversion',
    event_label: buttonText,
    button_location: location,
    value: 2,
  });
};

export const trackAnalysisPageView = () => {
  trackEvent('analysis_page_view', {
    event_category: 'engagement',
    event_label: 'Solar Analysis Tool',
    value: 3,
  });
};

export const trackVideoPlay = (videoName: string) => {
  trackEvent('video_play', {
    event_category: 'engagement',
    event_label: videoName,
    value: 1,
  });
};

export const trackVideoComplete = (videoName: string) => {
  trackEvent('video_complete', {
    event_category: 'engagement',
    event_label: videoName,
    value: 2,
  });
};

export const trackExternalLinkClick = (url: string, linkText: string) => {
  trackEvent('external_link_click', {
    event_category: 'engagement',
    event_label: linkText,
    link_url: url,
    value: 1,
  });
};

export const trackSocialClick = (platform: string) => {
  trackEvent('social_click', {
    event_category: 'engagement',
    event_label: platform,
    value: 1,
  });
};

export const trackScrollDepth = (depth: number) => {
  trackEvent('scroll_depth', {
    event_category: 'engagement',
    event_label: `${depth}% scrolled`,
    scroll_depth: depth,
  });
};

export const trackTimeOnSite = (seconds: number) => {
  trackEvent('time_on_site', {
    event_category: 'engagement',
    event_label: `${seconds} seconds`,
    time_seconds: seconds,
  });
};
