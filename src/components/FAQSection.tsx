import type { FC } from 'react';
import plusIcon from '@/assets/Plus.svg';

const FAQSection: FC = () => {
  const faqs = [
    "How do I place an order?",
    "Do you have a customer support line?",
    "Can I order for someone else?",
    "What if I am running late to pick up my order?",
    "What are the operating hours of the pick up stations?"
  ];

  return (
    <div className="w-full px-4 sm:px-6 md:px-section-px py-12 sm:py-16 md:py-20 lg:py-40 bg-black flex flex-col justify-start items-center gap-8 sm:gap-10 md:gap-12 lg:gap-20">
      <div className="w-full max-w-4xl flex flex-col justify-start items-center gap-8 sm:gap-10 md:gap-12 lg:gap-20">
        {/* Header */}
        <div className="w-full flex flex-col justify-start items-center gap-3 sm:gap-4 md:gap-6">
          <h2 className="text-center text-Colours-Primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight md:leading-[57.60px] px-2" style={{ fontFamily: 'var(--font-heading)' }}>
            FAQs
          </h2>
          <p className="text-center text-Colours-Primary text-sm sm:text-base md:text-lg font-normal leading-relaxed px-4 max-w-2xl" style={{ fontFamily: 'var(--font-body)' }}>
            Got Questions? We've Got Answers!
          </p>
        </div>

        {/* FAQ Items */}
        <div className="w-full flex flex-col justify-start items-start gap-2 sm:gap-3 md:gap-4">
          {faqs.map((question, index) => {
            const isFirst = index === 0;
            const isLast = index === faqs.length - 1;
            
            let roundedClasses = "";
            if (isFirst) {
              roundedClasses = "rounded-tl-[20px] sm:rounded-tl-[32px] md:rounded-tl-[48px] rounded-tr-[20px] sm:rounded-tr-[32px] md:rounded-tr-[48px]";
            } else if (isLast) {
              roundedClasses = "rounded-bl-[20px] sm:rounded-bl-[32px] md:rounded-bl-[48px] rounded-br-[20px] sm:rounded-br-[32px] md:rounded-br-[48px]";
            }

            return (
              <div
                key={index}
                data-state="Closed"
                className={`w-full px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 ${roundedClasses} outline-1 outline-offset-[-1px] outline-Colours-Primary flex flex-col justify-center items-center cursor-pointer hover:bg-Colours-Primary/5 transition-colors min-h-[64px] sm:min-h-[72px] md:min-h-[80px]`}
              >
                                  <div className="w-full flex justify-between items-center">
                    <div className="flex-1 text-left text-Colours-Primary text-sm sm:text-base md:text-lg font-normal leading-relaxed pr-2 sm:pr-3 md:pr-4" style={{ fontFamily: 'var(--font-heading)' }}>
                      {question}
                    </div>
                    <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 flex-shrink-0 flex items-center justify-center">
                      <img src={plusIcon} alt="Expand" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    </div>
                  </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQSection; 