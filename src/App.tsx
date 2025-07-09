// src/App.tsx
import type { FC } from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HowItWorksSection from './components/HowItWorksSection';
import FAQSection from './components/FAQSection';
import DownloadAppCTA from './components/DownloadAppCTA';
import Footer from './components/Footer';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import PrivacyPage from './pages/PrivacyPage';

const App: FC = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  // Store links and contact information
  const appStoreLink = "/download"; // Smart redirect to appropriate app store
  const playStoreLink = "/download"; // Smart redirect to appropriate app store
  const whatsappLink = "https://wa.me/2347035481156"; // WhatsApp link with business phone number

  if (showTerms) {
    return <TermsAndConditionsPage 
      onBack={() => {
        setShowTerms(false);
        window.scrollTo(0, 0);
      }} 
      onPrivacyClick={() => {
        setShowTerms(false);
        setShowPrivacy(true);
        window.scrollTo(0, 0);
      }} 
    />;
  }

  if (showPrivacy) {
    return <PrivacyPage onBack={() => {
      setShowPrivacy(false);
      window.scrollTo(0, 0);
    }} />;
  }

  return (
    <>
      <div className="w-full min-h-screen px-4 md:px-section-px pt-16 md:pt-24 pb-8 md:pb-section-py relative flex flex-col justify-start items-center gap-12 md:gap-gutter overflow-x-hidden">
        <Navbar whatsappLink={whatsappLink} isOnHomepage={true} />
        <HeroSection appStoreLink={appStoreLink} playStoreLink={playStoreLink} />
        <HowItWorksSection />
        <FAQSection />
        <DownloadAppCTA appStoreLink={appStoreLink} playStoreLink={playStoreLink} />
      </div>
      <Footer 
        onTermsClick={() => {
          setShowTerms(true);
          window.scrollTo(0, 0);
        }} 
        onPrivacyClick={() => {
          setShowPrivacy(true);
          window.scrollTo(0, 0);
        }} 
      />
    </>
  );
};

export default App;