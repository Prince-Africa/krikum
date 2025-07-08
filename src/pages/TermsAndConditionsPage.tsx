import type { FC } from 'react';
import Navbar from '../components/Navbar';

interface TermsAndConditionsPageProps {
  onBack?: () => void;
}

const TermsAndConditionsPage: FC<TermsAndConditionsPageProps> = ({ onBack }) => {
  const whatsappLink = "https://wa.me/2347035481156";

  const sections = [
    {
      title: "1. Who We Are",
      content: "Item7go App is operated by PrinceAfriqa, a technology company registered in Nigeria. This Privacy Policy applies to all users of our mobile app, platform, and related services (collectively, \"Services\"). By downloading, registering with, or using Item7go App, you consent to the practices described in this Privacy Policy. If you do not agree with our policies, please do not use the app or our services."
    },
    {
      title: "2. What is Personal Data?",
      content: "Personal data refers to any information that can identify an individual directly or indirectly, such as your name, phone number, email address, location data, or audio instructions you submit with your order."
    },
    {
      title: "3. Legal Bases for Processing Your Data",
      content: "We collect and process your personal data under the following lawful bases:",
      list: [
        "Contract: To fulfill your order requests and manage transactions.",
        "Legitimate Interest: To improve user experience, maintain platform security, and communicate relevant updates.",
        "Consent: Where explicitly required, such as for voice note recordings, location access, or promotional notifications."
      ]
    },
    {
      title: "4. Personal Data We Collect and Why",
      list: [
        "Account and Order Information: Name, email, phone number, food orders, payment details, pickup preferences, and audio (voice notes).",
        "Device and Usage Data: Device type, app version, IP address, and usage analytics.",
        "Location Data: If enabled, we use it to find nearby stores and optimize logistics and pricing.",
        "Communication Data: Feedback, inquiries, and support requests."
      ]
    },
    {
      title: "5. How We Use Your Information",
      content: "We use your data to:",
      list: [
        "Process and manage food orders",
        "Communicate with you about orders and updates",
        "Improve app functionality and personalize experience",
        "Prevent fraud and ensure platform security",
        "Comply with legal obligations"
      ]
    },
    {
      title: "6. Who We Share Your Information With",
      content: "We only share your information with:",
      list: [
        "Partner restaurants and vendors to fulfill orders",
        "Payment processors to handle transactions",
        "Third-party providers for analytics, hosting, and support (under strict confidentiality)"
      ]
    },
    {
      title: "7. Data Storage and Transfers",
      content: "Your data is stored securely on cloud servers managed by reputable providers. When data is stored outside Nigeria, we ensure equivalent data protection standards."
    },
    {
      title: "8. How Long We Keep Your Information",
      content: "We retain your data as long as necessary to provide services, meet legal obligations, and resolve disputes. Data is securely deleted or anonymized once no longer needed."
    },
    {
      title: "9. Your Rights",
      content: "You have the right to:",
      list: [
        "Access – Request a copy of your personal info",
        "Rectification – Correct inaccuracies",
        "Erasure – Delete your data (within legal limits)",
        "Restriction – Limit how your data is used",
        "Objection – Opt out of communications",
        "Portability – Transfer your data elsewhere"
      ],
      footer: "Contact us below to exercise your rights."
    },
    {
      title: "10. Cookies and Analytics",
      content: "We use tools like Google Analytics for Firebase to collect anonymized usage data and improve the app. We do not use traditional web cookies."
    },
    {
      title: "11. Children's Privacy",
      content: "Item7go App does not knowingly collect data from children under 13. If such data is discovered, it will be promptly deleted."
    },
    {
      title: "12. Contact Us",
      content: "If you have questions or want to exercise your rights, contact:",
      contactInfo: {
        company: "Item7go Ventures",
        email: "prince.africa@item7go.com",
        phone: "+234 7047004706",
        website: "https://item7go.com"
      },
      footer: "We respond to all legitimate requests within 30 days. If unsatisfied, you may contact your local data protection authority."
    }
  ];

  return (
    <div className="w-full min-h-screen px-4 md:px-section-px pt-16 md:pt-28 pb-8 md:pb-section-py bg-black flex flex-col justify-start items-center gap-8 md:gap-12 overflow-x-hidden">
      <Navbar whatsappLink={whatsappLink} />
      
      {/* Header */}
      <div className="w-full max-w-4xl flex flex-col justify-start items-center gap-4 md:gap-6 text-center">
        {onBack && (
          <button
            onClick={onBack}
            className="self-start text-Colours-Primary text-sm md:text-base font-normal hover:text-Colours-Primary/80 transition-colors mb-4"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            ← Back to Home
          </button>
        )}
        <h1 className="text-Colours-Primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
          Privacy Policy
        </h1>
        <p className="text-Colours-Primary text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-3xl" style={{ fontFamily: 'var(--font-body)' }}>
          Learn how we collect, use, and protect your personal information
        </p>
      </div>

      {/* Content */}
      <div className="w-full max-w-4xl flex flex-col gap-6 md:gap-8">
        {sections.map((section, index) => (
          <div key={index} className="w-full flex flex-col gap-3 md:gap-4">
            {/* Section Title */}
            <h2 className="text-Colours-Primary text-lg sm:text-xl md:text-2xl font-normal leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              {section.title}
            </h2>
            
            {/* Section Content */}
            <div className="flex flex-col gap-3">
              {section.content && (
                <p className="text-Colours-Primary text-sm sm:text-base font-normal leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                  {section.content}
                </p>
              )}
              
              {section.list && (
                <ul className="flex flex-col gap-2 ml-4 md:ml-6">
                  {section.list.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-Colours-Primary text-sm sm:text-base font-normal leading-relaxed list-disc" style={{ fontFamily: 'var(--font-body)' }}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              
              {section.contactInfo && (
                <div className="flex flex-col gap-2 ml-4 md:ml-6">
                  <p className="text-Colours-Primary text-sm sm:text-base font-normal leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                    <strong>Company:</strong> {section.contactInfo.company}
                  </p>
                  <p className="text-Colours-Primary text-sm sm:text-base font-normal leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                    <strong>Email:</strong> {section.contactInfo.email}
                  </p>
                  <p className="text-Colours-Primary text-sm sm:text-base font-normal leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                    <strong>Phone:</strong> {section.contactInfo.phone}
                  </p>
                  <p className="text-Colours-Primary text-sm sm:text-base font-normal leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                    <strong>Website:</strong> <a href={section.contactInfo.website} className="underline hover:text-Colours-Primary/80 transition-colors" target="_blank" rel="noopener noreferrer">{section.contactInfo.website}</a>
                  </p>
                </div>
              )}
              
              {section.footer && (
                <p className="text-Colours-Primary text-sm sm:text-base font-normal leading-relaxed italic" style={{ fontFamily: 'var(--font-body)' }}>
                  {section.footer}
                </p>
              )}
            </div>
          </div>
        ))}
        
        {/* Last Updated */}
        <div className="w-full pt-6 md:pt-8 border-t border-Colours-Primary/20">
          <p className="text-Colours-Primary/60 text-xs sm:text-sm font-normal leading-relaxed text-center" style={{ fontFamily: 'var(--font-body)' }}>
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage; 