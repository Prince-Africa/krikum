import type { FC } from 'react';
import readyIcon from '@/assets/ready.svg';
import setIcon from '@/assets/set.svg';
import goIcon from '@/assets/go.svg';

const HowItWorksSection: FC = () => {
  return (
    <div className="w-full px-4 md:px-section-px py-10 md:py-section-py flex flex-col justify-start items-center gap-6 md:gap-10 overflow-hidden z-10">
      <div className="w-full max-w-3xl text-center text-text-primary-darkbg text-3xl md:text-4xl font-heading leading-tight mb-6 md:mb-16">
        How it works
      </div>

      <div className="self-stretch grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-gutter px-0">
        <div className="flex-1 inline-flex flex-col justify-start items-center gap-3 sm:gap-element-gap">
          <img src={readyIcon} alt="Ready" className="h-12 sm:h-14 md:h-20 w-auto mb-3 sm:mb-6" />
          <div className="self-stretch flex flex-col justify-start items-center gap-2 sm:gap-element-gap">
            <div className="self-stretch text-center text-text-primary-darkbg text-lg sm:text-2xl font-heading leading-7 sm:leading-9">
              Download The App
            </div>
            <div className="self-stretch text-center text-text-primary-darkbg text-sm sm:text-base font-button leading-normal">
              Download and install the app by clicking the button on this page.
            </div>
          </div>
        </div>
        <div className="flex-1 inline-flex flex-col justify-start items-center gap-3 sm:gap-element-gap">
          <img src={setIcon} alt="Set" className="h-12 sm:h-14 md:h-20 w-auto mb-3 sm:mb-6" />
          <div className="self-stretch flex flex-col justify-start items-center gap-2 sm:gap-element-gap">
            <div className="self-stretch text-center text-text-primary-darkbg text-lg sm:text-2xl font-heading leading-7 sm:leading-9">
              Make Your Order
            </div>
            <div className="self-stretch text-center text-text-primary-darkbg text-sm sm:text-base font-button leading-normal">
              Pick your favourite item 7 through the app, customize the order to your heart's content, and pick the closest pick-up location to you.
            </div>
          </div>
        </div>
        <div className="flex-1 inline-flex flex-col justify-start items-center gap-3 sm:gap-element-gap">
          <img src={goIcon} alt="Go" className="h-12 sm:h-14 md:h-20 w-auto mb-3 sm:mb-6" />
          <div className="self-stretch flex flex-col justify-start items-center gap-2 sm:gap-element-gap">
            <div className="self-stretch text-center text-text-primary-darkbg text-lg sm:text-2xl font-heading leading-7 sm:leading-9">
              Pick It Up
            </div>
            <div className="self-stretch text-center text-text-primary-darkbg text-sm sm:text-base font-button leading-normal">
              When your order is ready, you'll get notified and you can pick it up!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
