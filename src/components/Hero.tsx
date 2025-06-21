import React from 'react';
import { ArrowRight, Star, Users, Palette } from 'lucide-react';

interface HeroProps {
  onBrowseTemplates: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBrowseTemplates }) => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight md:leading-[1.15]">
            Instagram Stories that
            <span className="block bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent pt-1 md:pt-0.5">
              actually convert.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            Professional templates designed for influencers
          </p>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            Professional templates designed for influencers.
            <br />
            Customizable, trendy, and ready to boost your engagement.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                500+
              </div>
              <div className="flex items-center justify-center space-x-2 text-blue-200">
                <Palette className="w-5 h-5" />
                <span>Premium Templates</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                50K+
              </div>
              <div className="flex items-center justify-center space-x-2 text-blue-200">
                <Users className="w-5 h-5" />
                <span>Happy Creators</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                4.9
              </div>
              <div className="flex items-center justify-center space-x-2 text-blue-200">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span>Average Rating</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button
              onClick={onBrowseTemplates}
              className="group px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2"
            >
              <span>Browse Templates</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Scroll Indicator */}
          <div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
            onClick={onBrowseTemplates}
          >
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
