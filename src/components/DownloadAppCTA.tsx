import type { FC } from 'react';
import StoreButton from './StoreButton';
import item7Favicon from '@/assets/Item7 favicon.png';
import appleIcon from '@/assets/apple icon.png';
import playstoreIcon from '@/assets/playstore_icon.png';
import handMockup from '@/assets/handmockup.svg';
import { APP_STORE_URL, PLAY_STORE_URL, WEB_APP_URL } from '../config/links';

interface DownloadAppCTAProps { }

const DownloadAppCTA: FC<DownloadAppCTAProps> = () => {
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
        <div className="flex w-full sm:hidden">
          <div className="flex w-full flex-col gap-3">
            <div className="grid grid-cols-2 gap-3">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-14 items-center justify-center gap-2 rounded-full bg-white px-3 py-4 text-sm font-semibold text-black shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
              >
                <img
                  src={appleIcon}
                  alt="App Store"
                  className="h-5 w-5 object-contain"
                />
                <span className="whitespace-nowrap">App Store</span>
              </a>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-14 items-center justify-center gap-2 rounded-full bg-white px-3 py-4 text-sm font-semibold text-black shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
              >
                <img
                  src={playstoreIcon}
                  alt="Play Store"
                  className="h-5 w-5 object-contain"
                />
                <span className="whitespace-nowrap">Play Store</span>
              </a>
            </div>

            <a
              href={WEB_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-white px-5 py-4 text-base font-semibold text-black shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
            >
              <img
                src={item7Favicon}
                alt="Web App"
                className="h-6 w-6 rounded-md object-contain"
              />
              <span className="whitespace-nowrap">Open Web App</span>
            </a>
          </div>
        </div>

        <div className="hidden sm:flex w-full sm:max-w-[420px]">
          <div className="flex w-full flex-col gap-3">
            <div className="grid grid-cols-2 gap-3">
              <StoreButton
                href={APP_STORE_URL}
                icon={appleIcon}
                storeName="App Store"
                className="bg-white w-full"
                disabled={false}
              />
              <StoreButton
                icon={playstoreIcon}
                storeName="Play Store"
                className="bg-white w-full"
                disabled={false}
                href={PLAY_STORE_URL}
              />
            </div>
            <StoreButton
              href={WEB_APP_URL}
              icon={item7Favicon}
              iconClassName="rounded-md"
              storeName="Web App"
              className="bg-white w-full"
              disabled={false}
            />
          </div>
        </div>
      </div>

      {/* Image container - positioned at bottom for both mobile and desktop */}
      <div className="pointer-events-none absolute w-full right-0 bottom-0 sm:w-[68%] h-[250px] sm:h-[90%] z-[2]">
        <img
          className="absolute bottom-0 right-0 w-full h-full select-none object-contain sm:right-[5%]"
          src={handMockup}
          alt="Hand holding phone with Item 7 app"
        />
      </div>
    </div>
  );
};

export default DownloadAppCTA;
