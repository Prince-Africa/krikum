// src/App.tsx
import type { FC } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HowItWorksSection from './components/HowItWorksSection';
import DownloadAppCTA from './components/DownloadAppCTA';

const App: FC = () => {
  // Store links and contact information
  const appStoreLink = "#"; // Replace with actual App Store link
  const playStoreLink = "#"; // Replace with actual Play Store link
  const whatsappLink = "https://wa.me/2347035481156"; // WhatsApp link with business phone number

  return (
    <div className="w-full min-h-screen px-4 md:px-section-px pt-16 md:pt-24 pb-8 md:pb-section-py relative flex flex-col justify-start items-center gap-12 md:gap-gutter overflow-x-hidden">
      <Navbar whatsappLink={whatsappLink} />
      <HeroSection appStoreLink={appStoreLink} playStoreLink={playStoreLink} />
      <HowItWorksSection />
      <DownloadAppCTA appStoreLink={appStoreLink} playStoreLink={playStoreLink} />
    </div>
  );
};

export default App;