import type { FC } from 'react';

import navbarLogo from '@/assets/item7_navbar_logo.png';
import whatsappIcon from '@/assets/tabler_brand-whatsapp-filled.png';
import dropdownIcon from '@/assets/dropdown.png';

interface NavbarProps {
  whatsappLink: string;
  isOnHomepage?: boolean;
}

const Navbar: FC<NavbarProps> = ({ whatsappLink, isOnHomepage = true }) => {
  const handleLogoClick = () => {
    if (isOnHomepage) {
      // If on homepage, just scroll to top
      window.scrollTo(0, 0);
    } else {
      // If on other pages, go back to homepage
      window.location.href = '/';
    }
  };
  return (
    <div className="w-full max-w-5xl h-16 md:h-18 left-1/2 -translate-x-1/2 top-4 md:top-[29px] fixed px-4 md:px-0 z-50 flex items-center">
      <div className="w-full h-14 md:h-18 pr-3 mt-0 bg-black rounded-[48px] shadow-[0px_3px_6px_0px_rgba(255,0,0,0.20),0px_10px_10px_0px_rgba(255,0,0,0.17),0px_23px_14px_0px_rgba(255,0,0,0.10),0px_40px_16px_0px_rgba(255,0,0,0.03),0px_63px_18px_0px_rgba(255,0,0,0.00)] flex justify-center items-center overflow-hidden border border-black">
        <div className="self-stretch w-full h-full flex justify-between items-center">
          <div className="flex justify-start items-center">
            <button 
              onClick={handleLogoClick}
              className="h-10 md:h-12 px-2 md:px-3 flex justify-start items-center cursor-pointer hover:opacity-80 transition-opacity"
            >
              <img 
                className="h-8 md:h-12 w-auto" 
                src={navbarLogo}
                alt="Item 7 Logo"
              />
            </button>
          </div>
          <div className="flex justify-center items-center gap-4 sm:gap-8 pr-0 md:pr-0">
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block sm:hidden"
            >
              <img 
                src={whatsappIcon} 
                alt="WhatsApp" 
                className="w-7 h-7 object-contain"
              />
            </a>
            <div className="hidden sm:flex justify-center items-center">
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 pr-3 rounded-[41px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border-2 border-white flex justify-center items-center bg-black hover:opacity-90 transition-opacity"
                style={{marginRight: '0px'}}
              >
                <img 
                  src={whatsappIcon} 
                  alt="WhatsApp" 
                  className="w-6 h-6 object-contain mr-3"
                />
                <span className="text-white font-montserrat font-semibold text-base leading-normal">Contact Us on Whatsapp</span>
                <img 
                  src={dropdownIcon} 
                  alt="Dropdown" 
                  className="w-6 h-6 object-contain ml-1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
