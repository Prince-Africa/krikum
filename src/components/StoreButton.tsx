import type { FC } from 'react';
import { motion } from 'framer-motion';

interface StoreButtonProps {
  href?: string;
  icon: string;
  storeName: 'App Store' | 'Play Store';
  className?: string;
  disabled?: boolean;
}

const StoreButton: FC<StoreButtonProps> = ({ href, icon, storeName, className = '', disabled = false }) => {
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
      scale: disabled ? 1 : 1.05,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: disabled ? 1 : 0.95
    }
  };

  const buttonContent = (
    <motion.div
      className={`min-w-[150px] px-3 sm:px-button-px py-3 md:py-button-py bg-background-button rounded-button flex justify-center items-center gap-2 sm:gap-3 text-text-primary-lightbg transition-all cursor-pointer ${disabled
          ? 'opacity-50 cursor-not-allowed bg-gray-400'
          : 'hover:opacity-90'
        } ${className}`}
      variants={buttonVariants}
      initial="initial"
      animate="animate"
      whileHover={disabled ? undefined : "hover"}
      whileTap={disabled ? undefined : "tap"}
    >
      <img
        src={icon}
        alt={storeName}
        className="w-7 h-7 md:w-6 md:h-6 object-contain"
      />
      <span className="text-black font-montserrat font-semibold text-base leading-[150%] tracking-[0%]">
        {storeName}
      </span>
    </motion.div>
  );

  // If disabled or no href, return just the button content without link functionality
  if (disabled || !href) {
    return buttonContent;
  }

  // If enabled and has href, wrap in anchor tag
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      {buttonContent}
    </motion.a>
  );
};

export default StoreButton;
