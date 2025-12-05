import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const TermsAndConditionsPage: FC = () => {
  const navigate = useNavigate();
  const sections = [
    {
      content: "Welcome to item7(go). By using our services, you agree to the following terms and conditions. Please read them carefully before using our app. By accessing our app, you agree to be bound by these terms and conditions and our privacy policy."
    },
    {
      title: "Account Creation and Security",
      content: "You will need to create an account to access the features of the app. You are responsible for maintaining the confidentiality of your login details. Provide the necessary, accurate, complete and current information so as to get your meals. The QR code is given to you and you should protect it."
    },
    {
      title: "Order Placement and Pickup",
      content: "Meals must be picked up at designated pick up stations. Once an order is placed, it can not be modified. All orders not picked up within an hour of the scheduled pick up time may be eligible for cancellation. You must pick up your order within the stated time as your meal is best served hot. Orders not picked up within the allowed time will be discarded without refund."
    },
    {
      title: "Payment Methods",
      content: "All payments must be made through the app using the available payment methods which are: through the item7(go) user wallet, internet banking (bank transfer, card or USSD). Item7go should not be held responsible for incomplete transactions stemming from the user's bank - in such cases, please contact your bank. Also, please note that no item7go agent would contact you concerning making payment to a different account or request your login details."
    },
    {
      title: "QR Code and Proof of Purchase",
      content: "Ensure you bring proof of purchase which is the QR code. We are not responsible for any unauthorized use of your QR code. Please keep your QR code safe and only share it with trusted individuals to avoid unscrupulous people having access to (or claiming) your order."
    },
    {
      title: "Refund Policy",
      content: "Any error from the user, for example late pick up or wrong pickup station will not be eligible for refund."
    },
    
    {
      title: "Prohibited Activities",
      content: "Users agree not to use the app for unlawful or fraudulent activities. We reserve the right to refuse or cancel any request for reasons including but not limited to product availability, errors in pricing or suspected fraud or any other reason that we believe will be detrimental to our values."
    },
    {
      title: "Intellectual Property",
      content: "All content on the app, including logos, text and software, is owned by item7(go) and protected by intellectual property laws."
    },
    {
      title: "Privacy",
      content: "Your privacy is important to us please refer to our privacy policy for information on how we collect, use and disclose your personal data.",
      hasPrivacyLink: true
    },
    {
      title: "Updates to Terms",
      content: "We may update these terms and conditions from time to time."
    },
    {
      content: "For any questions regarding the terms and conditions, contact:",
      contactInfo: {
        phones: ["+2348060278109", "+2348033458479", "+2347035481156"]
      }
    }
  ];

  return (
    <div className="w-full min-h-screen px-4 md:px-section-px pt-16 md:pt-28 pb-8 md:pb-section-py bg-black flex flex-col justify-start items-center gap-8 md:gap-12 overflow-x-hidden">
      <Navbar isOnHomepage={false} />
      
      {/* Header */}
      <div className="w-full max-w-4xl flex flex-col justify-start items-center gap-4 md:gap-6 text-center">
        <button
          onClick={() => navigate('/')}
          className="self-start text-Colours-Primary text-sm md:text-base font-normal hover:text-Colours-Primary/80 transition-colors mb-4"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          ← Back to Home
        </button>
        <h1 className="text-Colours-Primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
          Terms and Conditions
        </h1>
        <p className="text-Colours-Primary text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-3xl" style={{ fontFamily: 'var(--font-body)' }}>
          Please read these terms carefully before using our services
        </p>
      </div>

      {/* Content */}
      <div className="w-full max-w-4xl flex flex-col gap-6 md:gap-8">
        {sections.map((section, index) => (
          <div key={index} className="w-full flex flex-col gap-3 md:gap-4">
            {/* Section Title */}
            {section.title && (
              <h2 className="text-Colours-Primary text-lg sm:text-xl md:text-2xl font-normal leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                {section.title}
              </h2>
            )}
            
            {/* Section Content */}
            <div className="flex flex-col gap-3">
              {section.content && !section.hasPrivacyLink && (
                <p className="text-Colours-Primary text-sm sm:text-base font-normal leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                  {section.content}
                </p>
              )}
              
              {section.hasPrivacyLink && (
                <p className="text-Colours-Primary text-sm sm:text-base font-normal leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                  Your privacy is important to us please refer to our{' '}
                  <button
                    onClick={() => navigate('/privacy')}
                    className="text-Colours-Primary underline hover:text-Colours-Primary/80 transition-colors cursor-pointer"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    privacy policy
                  </button>
                  {' '}for information on how we collect, use and disclose your personal data.
                </p>
              )}

              {section.contactInfo && section.contactInfo.phones && (
                <div className="flex flex-col gap-2">
                  {section.contactInfo.phones.map((phone, phoneIndex) => (
                    <p key={phoneIndex} className="text-Colours-Primary text-sm sm:text-base font-normal leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                      <button 
                        onClick={() => {
                          const whatsappUrl = `https://wa.me/${phone.replace('+', '')}`;
                          window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
                        }}
                        className="hover:text-Colours-Primary/80 transition-colors cursor-pointer underline"
                      >
                        {phone}
                      </button>
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
        
        {/* Last Updated */}
        <div className="w-full pt-4">
          <p className="text-Colours-Primary/60 text-xs sm:text-sm font-normal leading-relaxed text-center" style={{ fontFamily: 'var(--font-body)' }}>
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage; 