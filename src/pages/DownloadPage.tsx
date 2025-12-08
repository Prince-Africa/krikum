import { useEffect } from 'react';
import { motion, easeOut } from 'framer-motion';

const DownloadPage = () => {
  // App Store URLs
  const appStoreUrl = "https://apps.apple.com/app/item7go/id6720821088";
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.princeafrica.item7go";
  const fallbackUrl = "/"; // Redirect to homepage if not mobile

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(userAgent);
    const isAndroid = /android/.test(userAgent);

    if (isIOS) {
      window.location.href = appStoreUrl;
      return;
    }

    if (isAndroid) {
      // Try to open the installed app via an Android intent using our App Link path.
      // If the app is not installed, the browser_fallback_url will send the user to the Play Store.
      const host = window.location.host;
      const intentUrl = `intent://${host}/menu#Intent;scheme=https;package=com.princeafrica.item7go;S.browser_fallback_url=${encodeURIComponent(playStoreUrl)};end;`;

      // Kick off the intent
      window.location.href = intentUrl;

      // Safety fallback in case the intent is ignored
      const fallbackTimer = setTimeout(() => {
        window.location.href = playStoreUrl;
      }, 2000);

      // Clear the fallback if the page visibility changes (likely app switch)
      const handleVisibilityChange = () => {
        if (document.hidden) {
          clearTimeout(fallbackTimer);
        }
      };

      document.addEventListener("visibilitychange", handleVisibilityChange);
      return () => {
        document.removeEventListener("visibilitychange", handleVisibilityChange);
        clearTimeout(fallbackTimer);
      };
    }

    // For desktop users, redirect to homepage
    window.location.href = fallbackUrl;
  }, []);

  // Animation variants to match the current design
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut }
    }
  };

  // Show minimal loading that matches current UI while redirect happens
  return (
    <div className="w-full min-h-screen px-4 md:px-section-px pt-16 md:pt-24 pb-8 md:pb-section-py relative flex flex-col justify-center items-center bg-background-main overflow-x-hidden">
      
      {/* Blur accent effect matching HeroSection */}
      <div className="w-[548px] h-[491px] left-[calc(50%-200px)] top-[450px] absolute blur-accent-strong opacity-60 pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-md w-full text-center z-10"
      >
        <motion.div 
          variants={itemVariants}
          className="space-y-6"
        >
          {/* Logo placeholder matching the design */}
          <div className="mx-auto w-20 h-20 bg-background-button rounded-[48px] shadow-[0px_3px_6px_0px_rgba(255,0,0,0.20),0px_10px_10px_0px_rgba(255,0,0,0.17)] flex items-center justify-center border border-white">
            <span 
              className="text-background-main text-2xl font-bold"
              style={{ fontFamily: 'Eras ITC, Arial Black, sans-serif' }}
            >
              I7
            </span>
          </div>

          {/* Title matching HeroSection typography */}
          <motion.h1 
            variants={itemVariants}
            style={{ fontFamily: 'Eras ITC, Arial Black, sans-serif' }}
            className="text-text-primary-darkbg text-3xl md:text-4xl font-bold leading-tight tracking-[0%]"
          >
            Redirecting to App...
          </motion.h1>

          {/* Subtitle matching current design */}
          <motion.p 
            variants={itemVariants}
            className="text-text-primary-darkbg text-lg font-body leading-relaxed"
          >
            Taking you to download Item7Go
          </motion.p>

          {/* Loading spinner matching the design system */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center items-center py-6"
          >
            <div className="w-12 h-12 border-4 border-accent-primary border-t-transparent rounded-full animate-spin"></div>
          </motion.div>

          {/* Backup text matching current typography */}
          <motion.p 
            variants={itemVariants}
            className="text-text-secondary-darkbg text-sm font-body"
          >
            If you're not redirected automatically, you'll return to the homepage.
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DownloadPage; 