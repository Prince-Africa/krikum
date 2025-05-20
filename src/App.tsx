// src/App.tsx
import type { FC } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HowItWorksSection from './components/HowItWorksSection';
import DownloadAppCTA from './components/DownloadAppCTA';

const App: FC = () => {
  // Placeholder data for store links (in a real app, this might come from config or props)
  const appStoreLink = "#"; // Replace with actual App Store link
  const playStoreLink = "#"; // Replace with actual Play Store link
  const whatsappLink = "#"; // Replace with actual WhatsApp link

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