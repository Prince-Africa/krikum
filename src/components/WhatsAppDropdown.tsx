import type { FC } from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import whatsappIcon from '@/assets/tabler_brand-whatsapp-filled.png';
import dropdownIcon from '@/assets/dropdown.png';

const WhatsAppDropdown: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNumbers = [
    {
      number: "+2348060278109",
      label: "Support Line 1"
    },
    {
      number: "+2348033458479", 
      label: "Support Line 2"
    },
    {
      number: "+2347035481156",
      label: "Support Line 3"
    }
  ];

  const handleWhatsAppClick = (phoneNumber: string) => {
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  // Animation variants
  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.15,
        ease: "easeIn"
      }
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.15 } }
  };

  return (
    <div className="relative">
      {/* Mobile Version - Dropdown */}
      <div className="block sm:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center"
        >
          <img 
            src={whatsappIcon} 
            alt="WhatsApp" 
            className="w-7 h-7 object-contain"
          />
        </button>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-20 left-1/2 transform -translate-x-1/2 w-64 bg-black border-2 border-white rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden z-[9999]"
            >
              {whatsappNumbers.map((item, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleWhatsAppClick(item.number)}
                  className="w-full px-4 py-3 text-left text-white hover:bg-white/10 transition-colors border-b border-white/20 last:border-b-0 flex items-center gap-3"
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img 
                    src={whatsappIcon} 
                    alt="WhatsApp" 
                    className="w-5 h-5 object-contain"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">{item.label}</span>
                    <span className="text-xs opacity-80">{item.number}</span>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop Version - Dropdown */}
      <div className="hidden sm:block">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="px-6 py-3 pr-3 rounded-[41px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border-2 border-white flex justify-center items-center bg-black hover:opacity-90 transition-opacity"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <img 
            src={whatsappIcon} 
            alt="WhatsApp" 
            className="w-6 h-6 object-contain mr-3"
          />
          <span className="text-white font-montserrat font-semibold text-base leading-normal">Contact Us on Whatsapp</span>
          <motion.img 
            src={dropdownIcon} 
            alt="Dropdown" 
            className="w-6 h-6 object-contain ml-1"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>

        {/* Desktop Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute top-full left-0 mt-2 w-full bg-black border-2 border-white rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden z-[9999]"
            >
              {whatsappNumbers.map((item, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleWhatsAppClick(item.number)}
                  className="w-full px-4 py-3 text-left text-white hover:bg-white/10 transition-colors border-b border-white/20 last:border-b-0 flex items-center gap-3"
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img 
                    src={whatsappIcon} 
                    alt="WhatsApp" 
                    className="w-5 h-5 object-contain"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-normal">{item.label}</span>
                    <span className="text-xs opacity-80">{item.number}</span>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Backdrop to close dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 z-[9998]" 
            onClick={() => setIsOpen(false)}
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default WhatsAppDropdown; 