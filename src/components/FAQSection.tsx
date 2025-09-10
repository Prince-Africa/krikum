import type { FC } from 'react';
import { useState } from 'react';
import plusIcon from '@/assets/Plus.svg';

const FAQSection: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    //     {
    //       question: "How do I place an order?",
    //       answer: `Click on "menu" and select the food you want to order. For example: party rice with chicken.

    // • Select the type of rice you want (mixed, jollof, fried rice)
    // • Choose between the medium size pack and the big size pack
    // • Pick an extra of your choice (plantain, coleslaw e.t.c)
    // • You can add drinks to step down your delicious party rice.

    // We also have an "add audio feature" that allows you to send extra messages to us. For example: "I do not want mayonnaise in my coleslaw" Talk to us.

    // After selecting everything you want, you can add your meal to cart and check out later or click on "buy now" to proceed with your request:
    // • Choose your pick up time and note that your pick up time has to start from 20 minutes into the future.
    // • Select an outlet close to you and click on "buy now"
    // • Choose a payment method and make your payment.`
    //     },
    {
      question: "Do you have a customer support line?",
      answer: `Yes we do! Use the following WhatsApp numbers to speak to our customer support:

• +2348060278109
• +2348033458479
• +2347035481156`,
      hasWhatsAppNumbers: true
    },
    {
      question: "Can I order for someone else?",
      answer: `Yes you can! Spread the love to everyone.`
    },
    {
      question: "What if I am running late to pick up my order?",
      answer: `We can only guarantee warmth for 30 minutes. Afterwards, your meal would be cold. However, orders that remain unclaimed by 11:58 PM, will be automatically canceled.`
    },
    {
      question: "What are the operating hours of the pick up stations?",
      answer: `8AM to 11PM is the standard time. Note that hours may vary depending on the outlet. Outlet managers are responsible for digitally activating and deactivating their outlets.`
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-section-px py-12 sm:py-16 md:py-20 lg:py-40 bg-black flex flex-col justify-start items-center gap-8 sm:gap-10 md:gap-12 lg:gap-20">
      <div className="w-full max-w-4xl flex flex-col justify-start items-center gap-8 sm:gap-10 md:gap-12 lg:gap-20">
        {/* Header */}
        <div className="w-full flex flex-col justify-start items-center gap-3 sm:gap-4 md:gap-6">
          <h2 className="text-center text-Colours-Primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight md:leading-[57.60px] px-2" style={{ fontFamily: 'var(--font-heading)' }}>
            FAQ and Walkthrough
          </h2>
          <p className="text-center text-Colours-Primary text-sm sm:text-base md:text-lg font-normal leading-relaxed px-4 max-w-2xl" style={{ fontFamily: 'var(--font-body)' }}>
            Got Questions? We've Got Answers!
          </p>
        </div>

        {/* FAQ Items */}
        <div className="w-full flex flex-col justify-start items-start gap-2 sm:gap-3 md:gap-4">
          {faqs.map((faq, index) => {
            const isFirst = index === 0;
            const isLast = index === faqs.length - 1;
            const isOpen = openIndex === index;

            let roundedClasses = "";
            if (isFirst) {
              roundedClasses = "rounded-tl-[20px] sm:rounded-tl-[32px] md:rounded-tl-[48px] rounded-tr-[20px] sm:rounded-tr-[32px] md:rounded-tr-[48px]";
            } else if (isLast) {
              roundedClasses = "rounded-bl-[20px] sm:rounded-bl-[32px] md:rounded-bl-[48px] rounded-br-[20px] sm:rounded-br-[32px] md:rounded-br-[48px]";
            }

            return (
              <div
                key={index}
                className={`w-full ${roundedClasses} outline-1 outline-offset-[-1px] outline-Colours-Primary cursor-pointer hover:bg-Colours-Primary/5 transition-all duration-300 overflow-hidden`}
              >
                {/* Question Header */}
                <div
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 flex justify-between items-center min-h-[64px] sm:min-h-[72px] md:min-h-[80px]"
                >
                  <div className="flex-1 text-left text-Colours-Primary text-sm sm:text-base md:text-lg font-normal leading-relaxed pr-2 sm:pr-3 md:pr-4" style={{ fontFamily: 'var(--font-heading)' }}>
                    {faq.question}
                  </div>
                  <div className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 flex-shrink-0 flex items-center justify-center transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                    <img src={plusIcon} alt={isOpen ? "Collapse" : "Expand"} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </div>
                </div>

                {/* Answer Content */}
                <div
                  className={`px-3 sm:px-4 md:px-6 transition-all duration-300 ease-in-out ${isOpen
                    ? 'pb-3 sm:pb-4 md:pb-5 opacity-100'
                    : 'max-h-0 pb-0 opacity-0'
                    } overflow-hidden`}
                >
                  <div className="text-Colours-Primary/80 text-sm sm:text-base font-normal leading-relaxed whitespace-pre-line border-t border-Colours-Primary/20 pt-3 sm:pt-4 md:pt-5" style={{ fontFamily: 'var(--font-body)' }}>
                    {faq.hasWhatsAppNumbers ? (
                      <div>
                        <p>Yes we do! Use the following WhatsApp numbers to speak to our customer support:</p>
                        <div className="mt-2 space-y-1">
                          {[
                            { number: "+2348060278109", label: "Support Line 1" },
                            { number: "+2348033458479", label: "Support Line 2" },
                            { number: "+2347035481156", label: "Support Line 3" }
                          ].map((item, index) => (
                            <button
                              key={index}
                              onClick={() => {
                                const whatsappUrl = `https://wa.me/${item.number.replace('+', '')}`;
                                window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
                              }}
                              className="block text-left text-Colours-Primary hover:text-Colours-Primary/60 transition-colors cursor-pointer"
                            >
                              • {item.number} ({item.label})
                            </button>
                          ))}
                        </div>
                      </div>
                    ) : (
                      faq.answer
                    )}
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