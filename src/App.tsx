import React, { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { BackgroundParticles } from './components/BackgroundParticles';
import { CursorGlow } from './components/CursorGlow';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustSection } from './components/TrustSection';
import { FeaturesSection } from './components/FeaturesSection';
import { AppShowcaseSection } from './components/AppShowcaseSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { WhyScorifySection } from './components/WhyScorifySection';
import { DownloadSection } from './components/DownloadSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ApkDownloadModal, triggerApkDownload } from './components/ApkDownloadModal';

export const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  const handleDownloadClick = () => {
    setDownloadModalOpen(true);
    triggerApkDownload();
  };

  return (
    <div className="min-h-screen bg-[#09090D] text-[#F3F4F6] relative overflow-x-hidden selection:bg-[#8B5CF6] selection:text-white font-sans">
      {/* Editorial Aesthetic Ambient Blur Glows */}
      <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] bg-[#8B5CF6] opacity-[0.08] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-[#4C1D95] opacity-[0.1] blur-[120px] rounded-full pointer-events-none" />

      {/* SVG Noise Texture Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] z-[1]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjY1IiBzdGlja2V5PSJ0cnVlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI24pIi8+PC9zdmc+")',
        }}
      />

      {/* Boot Splash Loading Screen */}
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      {/* Ambient Particle Background Canvas */}
      <BackgroundParticles />

      {/* Mouse Follow Glow Effect */}
      <CursorGlow />

      {/* Main Page Header */}
      <Navbar onDownloadClick={handleDownloadClick} />

      {/* Page Content Sections */}
      <main className="relative z-10 space-y-0">
        <HeroSection onDownloadClick={handleDownloadClick} />
        <TrustSection />
        <FeaturesSection />
        <AppShowcaseSection />
        <HowItWorksSection />
        <WhyScorifySection />
        <DownloadSection onDownloadClick={handleDownloadClick} />
        <FAQSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Direct APK Download Modal */}
      <ApkDownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />
    </div>
  );
};

export default App;
