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
    <header className="fixed top-0 w-full z-50 bg-gray-900/10 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <Instagram className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-2xl font-bold text-white">Viewify</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavClick('templates')}
              className="text-white hover:text-blue-200 transition-colors"
            >
              Templates
            </button>
            <button
              onClick={() => handleNavClick('features')}
              className="text-white hover:text-blue-200 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-white hover:text-blue-200 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
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
                className="text-left text-white hover:text-blue-200 transition-colors"
              >
                Templates
              </button>
              <button
                onClick={() => handleNavClick('features')}
                className="text-left text-white hover:text-blue-200 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="text-left text-white hover:text-blue-200 transition-colors"
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
