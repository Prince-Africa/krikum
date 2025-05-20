import type { FC } from 'react';
import { motion } from 'framer-motion';

interface StoreButtonProps {
  href: string;
  icon: string;
  storeName: 'App Store' | 'Play Store';
  className?: string;
}

const StoreButton: FC<StoreButtonProps> = ({ href, icon, storeName, className = '' }) => {
  const buttonVariants = {
    initial: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    animate: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <motion.a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`min-w-[150px] px-3 sm:px-button-px py-3 md:py-button-py bg-background-button rounded-button flex justify-center items-center gap-2 sm:gap-3 text-text-primary-lightbg hover:opacity-90 transition-opacity ${className}`}
      variants={buttonVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
    >
      <img 
        src={icon} 
        alt={storeName}
        className="w-7 h-7 md:w-6 md:h-6 object-contain"
      />
      <span className="text-black font-montserrat font-semibold text-base leading-[150%] tracking-[0%]">
        {storeName}
      </span>
    </motion.a>
  );
};

export default StoreButton;
