import React, { useState } from 'react';
import { Menu, X, Instagram } from 'lucide-react';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header 
      className="fixed top-0 w-full z-50"
      style={{
        background: 'rgba(102, 126, 234, 0.1)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div 
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: '#ffffff' }}
            >
              <Instagram className="w-5 h-5" style={{ color: '#667eea' }} />
            </div>
            <span 
              className="text-2xl font-bold"
              style={{ color: '#ffffff' }}
            >
              Viewify
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavClick('templates')}
              className="transition-colors"
              style={{ color: '#ffffff' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#ffffff';
              }}
            >
              Templates
            </button>
            <button
              onClick={() => handleNavClick('features')}
              className="transition-colors"
              style={{ color: '#ffffff' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#ffffff';
              }}
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="transition-colors"
              style={{ color: '#ffffff' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#ffffff';
              }}
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
            style={{ color: '#ffffff' }}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => handleNavClick('templates')}
                className="text-left transition-colors"
                style={{ color: '#ffffff' }}
              >
                Templates
              </button>
              <button
                onClick={() => handleNavClick('features')}
                className="text-left transition-colors"
                style={{ color: '#ffffff' }}
              >
                About
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="text-left transition-colors"
                style={{ color: '#ffffff' }}
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;