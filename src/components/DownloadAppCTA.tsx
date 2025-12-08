import type { FC } from 'react';
import StoreButton from './StoreButton';
import appleIcon from '@/assets/apple icon.png';
import playstoreIcon from '@/assets/playstore_icon.png';
import handMockup from '@/assets/handmockup.svg';
import { PLAY_STORE_URL } from '../config/links';
import { useState } from 'react';
import ComingSoonPopup from './ComingSoonPopup';

interface DownloadAppCTAProps { }

const DownloadAppCTA: FC<DownloadAppCTAProps> = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  function openComingSoon() {
    setPopupOpen(true);
  }

  function closeComingSoon() {
    setPopupOpen(false);
  }

  return (
    <div className="w-full max-w-6xl relative bg-black rounded-[32px] sm:rounded-[64px] outline-4 outline-white backdrop-blur-[2px] overflow-visible mx-auto px-4 sm:px-8 py-12 sm:py-16 flex flex-col sm:flex-row items-start sm:items-center h-auto sm:h-[640px]">
      {/* Gradient container with overflow hidden */}
      <div className="absolute inset-0 rounded-[32px] sm:rounded-[64px] overflow-hidden">
        {/* Decorative blur */}
        <div className="w-[45%] h-[45%] right-[5%] bottom-[5%] absolute bg-red-600 blur-[200px] z-[1] rounded-full" />
      </div>

      {/* Content container */}
      <div className="relative flex flex-col justify-start items-start gap-6 sm:gap-8 w-full sm:w-[55%] md:pl-16 z-[5] mb-[250px] sm:mb-0">
        <div className="flex flex-col justify-start items-start gap-4 sm:gap-6 w-full">
          <div
            style={{ fontFamily: 'Eras Demi ITC' }}
            className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight max-w-lg"
          >
            Download the App today!
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
          <StoreButton
            href=""
            icon={appleIcon}
            storeName="Web App"
            className="bg-white flex-1 sm:flex-initial"
            disabled={false}
            onClick={openComingSoon}
          />
          <StoreButton
            icon={playstoreIcon}
            storeName="Play Store"
            className="bg-white flex-1 sm:flex-initial"
            disabled={false}
            onClick={() => {
              window.location.href = PLAY_STORE_URL;
            }}
          />
        </div>
      </div>

      {/* Image container - positioned at bottom for both mobile and desktop */}
      <div className="absolute w-full right-0 bottom-0 sm:w-[68%] h-[250px] sm:h-[90%] z-[20]">
        <img
          className="w-full h-full object-contain absolute bottom-0 right-0 sm:right-[5%]"
          src={handMockup}
          alt="Hand holding phone with Item 7 app"
        />
      </div>
      <ComingSoonPopup open={popupOpen} onClose={closeComingSoon} />
    </div>
  );
};

export default DownloadAppCTA;
