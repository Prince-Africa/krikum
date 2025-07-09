import type { FC } from 'react';

interface FooterProps {
  onTermsClick?: () => void;
  onPrivacyClick?: () => void;
}

const Footer: FC<FooterProps> = ({ onTermsClick, onPrivacyClick }) => {
  return (
    <footer className="w-full bg-black px-4 md:px-section-px py-6">
      <div className="w-full max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
        <p className="text-Colours-Primary/60 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
          © {new Date().getFullYear()} Item7go
        </p>
        <div className="flex gap-6">
          <button
            onClick={onTermsClick}
            className="text-Colours-Primary text-sm hover:text-Colours-Primary/80 transition-colors cursor-pointer"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Terms & Conditions
          </button>
          <button
            onClick={onPrivacyClick}
            className="text-Colours-Primary text-sm hover:text-Colours-Primary/80 transition-colors cursor-pointer"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Privacy Policy
          </button>
          <a 
            href="mailto:prince.africa@item7go.com" 
            className="text-Colours-Primary text-sm hover:text-Colours-Primary/80 transition-colors"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 