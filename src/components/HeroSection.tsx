import type { FC } from 'react';
import { motion, easeOut } from 'framer-motion';
import { useState } from 'react';
import StoreButton from './StoreButton';
import ComingSoonPopup from './ComingSoonPopup';
import item7_navbar_logo from '@/assets/item7_navbar_logo.png';
import appleIcon from '@/assets/apple icon.png';
import playstoreIcon from '@/assets/playstore_icon.png';
import iphoneMockup from '@/assets/iphone mockup.png';


interface HeroSectionProps { }

const HeroSection: FC<HeroSectionProps> = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: easeOut }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 1.2, ease: easeOut }
    }
  };

  const [open, setOpen] = useState(false);

  function openPopup() {
    setOpen(true);
  }

  function closePopup() {
    setOpen(false);
  }

  return (
    <>
      <div className="w-[548px] h-[491px] left-[calc(50%-200px)] top-[450px] absolute blur-accent-strong opacity-60 pointer-events-none" />

      <div className="w-full flex-1 flex items-start md:items-center justify-center md:block max-w-3xl mx-auto z-10 mt-24 md:mt-16">
        <div className="w-full flex flex-col justify-center items-center gap-8 md:gap-4 pt-20 md:pt-0 pb-8 md:py-0">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-3xl text-center flex flex-col items-center justify-center gap-3 md:gap-1.5"
          >
            <div className="flex items-center justify-center gap-4">
              <motion.span
                variants={itemVariants}
                className="text-text-primary-darkbg text-4xl md:text-2xl lg:text-hero font-hero leading-tight tracking-[0%] text-center whitespace-nowrap"
              >
                Your
              </motion.span>
              <motion.img
                variants={imageVariants}
                src={item7_navbar_logo}
                alt="Item 7"
                className="h-12 md:h-10 lg:h-14 w-auto"
              />
            </div>
            <div className="flex items-center justify-center gap-4">
              <motion.span
                variants={itemVariants}
                className="text-text-primary-darkbg text-4xl md:text-3xl lg:text-hero font-medium leading-tight tracking-[0%] text-center whitespace-nowrap"
              >
              </motion.span>
              <motion.span
                variants={itemVariants}
                className="text-text-primary-darkbg text-4xl md:text-2xl lg:text-hero font-hero leading-tight tracking-[0%] text-center whitespace-nowrap"
              >
                Ready on Arrival
              </motion.span>
            </div>
          </motion.div>

          <motion.div
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
            className="self-stretch text-center text-text-primary-darkbg text-xl md:text-lg font-medium leading-relaxed md:leading-snug px-2 md:px-0"
          >
            Feel the Item7GO experience without the wait.<br /> Order through our mobile app today
          </motion.div>

            <div className="pt-6 md:pt-4 flex flex-row justify-center items-center gap-2 md:gap-group-gap w-full px-1 sm:px-2 md:px-0 max-w-[360px] mx-auto">
            <StoreButton
              href=""
              icon={appleIcon}
              storeName="Web App"
              className="flex-1"
              disabled={false}
              onClick={openPopup}
            />
            <StoreButton
              icon={playstoreIcon}
              storeName="Play Store"
              className="flex-1"
              disabled={false}
              onClick={() => {
                const playStore = 'https://play.google.com/store/apps/details?id=com.princeafrica.item7go';
                // Intent URI using App Link path (/menu) — Chrome on Android will try the app first.
                const intent = `intent://menu#Intent;scheme=https;package=com.princeafrica.item7go;S.browser_fallback_url=${encodeURIComponent(
                  playStore
                )};end;`;
                // Try intent first
                try {
                  window.location.href = intent;
                } catch (e) {
                  // Fallback directly to Play Store
                  window.location.href = playStore;
                  return;
                }
                // Safety fallback in case intent is ignored
                setTimeout(() => {
                  window.location.href = playStore;
                }, 2000);
              }}
            />
          </div>
          <ComingSoonPopup open={open} onClose={closePopup} />
        </div>
      </div>

      <img
        className="sm:w-[85%] md:w-auto sm:scale-[1.15] sm:mt-16 md:mt-24 z-0"
        src={iphoneMockup}
        alt="iPhone App Preview"
      />
    </>
  );
};

export default HeroSection;
