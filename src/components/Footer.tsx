import React from 'react';
import { Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // TikTok SVG Icon Component
  const TikTokIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );

  const handleEmailClick = () => {
    // Try to open email client directly
    window.location.href = 'mailto:viewify.store@gmail.com';

    // Fallback for mobile browsers that block popups
    setTimeout(() => {
      if (!document.hidden) {
        window.open(
          'https://mail.google.com/mail/?view=cm&fs=1&to=viewify.store@gmail.com',
          '_blank'
        );
      }
    }, 500);
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Left Column - Brand Info */}
          <div className="space-y-6">
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={scrollToTop}
            >
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Instagram className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold">Viewify</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Professional Instagram Story templates designed to help creators
              and influencers grow their audience and boost engagement.
            </p>
          </div>

          {/* Right Column - Support & Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Support Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Information</h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() =>
                      window.open('https://viewify.store/about', '_blank')
                    }
                    className="text-gray-400 hover:text-white transition-colors text-left w-full text-left"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      window.open('https://viewify.store/privacy', '_blank')
                    }
                    className="text-gray-400 hover:text-white transition-colors text-left w-full text-left"
                  >
                    Privacy Policy
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact & Follow Us</h3>
              <p className="text-gray-400 text-sm">
                Have questions? Reach out to our team for support.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() =>
                    window.open(
                      'https://www.instagram.com/viewify.store/',
                      '_blank'
                    )
                  }
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                  title="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </button>
                <button
                  onClick={() =>
                    window.open(
                      'https://www.tiktok.com/@viewify.store',
                      '_blank'
                    )
                  }
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                  title="TikTok"
                >
                  <TikTokIcon />
                </button>
                <button
                  onClick={handleEmailClick}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                  title="Email Us"
                >
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Viewify. All rights reserved. Made with ❤️ for creators
            worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
