import React, { useState, useEffect } from 'react';
import { ScorifyLogo } from './ScorifyLogo';
import { Download, Menu, X } from 'lucide-react';

interface NavbarProps {
  onDownloadClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onDownloadClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'Screenshots', href: '#screenshots' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Download', href: '#download' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#09090D]/95 backdrop-blur-xl border-b border-white/10 py-3 sm:py-4 shadow-2xl'
          : 'bg-transparent py-5 sm:py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3">
          <ScorifyLogo size="md" animate />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-9 text-[12px] font-bold text-gray-300 uppercase tracking-widest">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#C084FC] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Section: Download Now + Mobile Menu Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Download Now Button (Visible on both Desktop and Mobile next to hamburger) */}
          <button
            onClick={onDownloadClick}
            className="px-3.5 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#C084FC] hover:brightness-110 text-white font-bold text-[11px] sm:text-xs uppercase tracking-wider rounded-xl sm:rounded-2xl flex items-center gap-1.5 sm:gap-2 shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all active:scale-95 flex-shrink-0"
          >
            <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
            <span>Download Now</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="lg:hidden p-2 sm:p-2.5 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-gray-200 hover:text-white hover:bg-white/10 transition-colors flex-shrink-0"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D0D14]/95 border-b border-white/10 backdrop-blur-2xl px-6 py-6 space-y-4 animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-semibold text-gray-200 hover:text-[#C084FC] border-b border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onDownloadClick();
              }}
              className="w-full py-3.5 rounded-xl bg-[#8B5CF6] hover:bg-[#A855F7] text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Now</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

