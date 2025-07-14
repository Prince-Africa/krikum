import type { FC } from 'react';
import navbarLogo from '@/assets/item7_navbar_logo.png';
import WhatsAppDropdown from './WhatsAppDropdown';

interface NavbarProps {
  isOnHomepage?: boolean;
}

const Navbar: FC<NavbarProps> = ({ isOnHomepage = true }) => {
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
      <div className="w-full h-14 md:h-18 pr-3 mt-0 bg-black rounded-[48px] shadow-[0px_3px_6px_0px_rgba(255,0,0,0.20),0px_10px_10px_0px_rgba(255,0,0,0.17),0px_23px_14px_0px_rgba(255,0,0,0.10),0px_40px_16px_0px_rgba(255,0,0,0.03),0px_63px_18px_0px_rgba(255,0,0,0.00)] flex justify-center items-center border border-black">
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
          <div className="flex justify-center items-center gap-4 sm:gap-8 pr-0 md:pr-0 relative">
            <WhatsAppDropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
