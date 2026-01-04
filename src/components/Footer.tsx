import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const Footer: FC = () => {
  const navigate = useNavigate();
  return (
    <footer className="w-full bg-black px-4 md:px-section-px py-8 md:py-6">
      <div className="w-full max-w-4xl mx-auto flex flex-col justify-center items-center gap-6 md:gap-4 text-center">
        <p className="text-Colours-Primary/60 text-base md:text-sm" style={{ fontFamily: 'var(--font-body)' }}>
          © {new Date().getFullYear()} Item7go
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <a
            href="https://wa.me/2348033458479"
            target="_blank"
            rel="noopener noreferrer"
            className="text-Colours-Primary text-base md:text-sm hover:text-Colours-Primary/80 transition-colors py-2 px-4 rounded-lg hover:bg-Colours-Primary/5"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Contact Us
          </a>
          <button
            onClick={() => navigate('/terms')}
            className="text-Colours-Primary text-base md:text-sm hover:text-Colours-Primary/80 transition-colors cursor-pointer py-2 px-4 rounded-lg hover:bg-Colours-Primary/5"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Terms & Conditions
          </button>
          <button
            onClick={() => navigate('/privacy')}
            className="text-Colours-Primary text-base md:text-sm hover:text-Colours-Primary/80 transition-colors cursor-pointer py-2 px-4 rounded-lg hover:bg-Colours-Primary/5"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Privacy Policy
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 