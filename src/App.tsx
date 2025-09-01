// src/App.tsx
import type { FC } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HowItWorksSection from './components/HowItWorksSection';
import FAQSection from './components/FAQSection';
import DownloadAppCTA from './components/DownloadAppCTA';
import Footer from './components/Footer';
import { useAnalytics } from './hooks/useAnalytics';

const App: FC = () => {
  // Initialize analytics tracking
  useAnalytics();

  return (
    <>
      <div className="w-full min-h-screen px-4 md:px-section-px pt-16 md:pt-24 pb-8 md:pb-section-py relative flex flex-col justify-start items-center gap-12 md:gap-gutter overflow-x-hidden">
        <Navbar isOnHomepage={true} />
        <HeroSection />
        <HowItWorksSection />
        <FAQSection />
        <DownloadAppCTA />
      </div>
      <Footer />
    </>
  );
};

export default App;