import React from 'react';
import { ArrowRight, Star, Users, Palette } from 'lucide-react';

interface HeroProps {
  onBrowseTemplates: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBrowseTemplates }) => {
  return (
    <section 
      className="min-h-screen relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        position: 'relative'
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute rounded-full blur-xl"
          style={{
            top: '80px',
            left: '40px',
            width: '128px',
            height: '128px',
            background: 'rgba(255, 255, 255, 0.1)'
          }}
        ></div>
        <div 
          className="absolute rounded-full blur-2xl"
          style={{
            bottom: '80px',
            right: '40px',
            width: '192px',
            height: '192px',
            background: 'rgba(255, 255, 255, 0.05)'
          }}
        ></div>
        <div 
          className="absolute rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
          style={{
            top: '50%',
            left: '50%',
            width: '384px',
            height: '384px',
            background: 'rgba(255, 255, 255, 0.05)'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight md:leading-[1.15]"
            style={{ color: '#ffffff' }}
          >
            Instagram Stories that
            <span 
              className="block pt-1 md:pt-0.5"
              style={{
                background: 'linear-gradient(45deg, #ff6b6b, #feca57)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              actually convert.
            </span>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-xl md:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            Professional templates designed for influencers.
            <br />
            Customizable, trendy, and ready to boost your engagement.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div 
                className="text-4xl md:text-5xl font-bold mb-2"
                style={{ color: '#ffffff' }}
              >
                500+
              </div>
              <div 
                className="flex items-center justify-center space-x-2"
                style={{ color: 'rgba(255, 255, 255, 0.8)' }}
              >
                <Palette className="w-5 h-5" />
                <span>Premium Templates</span>
              </div>
            </div>
            <div className="text-center">
              <div 
                className="text-4xl md:text-5xl font-bold mb-2"
                style={{ color: '#ffffff' }}
              >
                50K+
              </div>
              <div 
                className="flex items-center justify-center space-x-2"
                style={{ color: 'rgba(255, 255, 255, 0.8)' }}
              >
                <Users className="w-5 h-5" />
                <span>Happy Creators</span>
              </div>
            </div>
            <div className="text-center">
              <div 
                className="text-4xl md:text-5xl font-bold mb-2"
                style={{ color: '#ffffff' }}
              >
                4.9
              </div>
              <div 
                className="flex items-center justify-center space-x-2"
                style={{ color: 'rgba(255, 255, 255, 0.8)' }}
              >
                <Star className="w-5 h-5" style={{ fill: '#feca57', color: '#feca57' }} />
                <span>Average Rating</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button
              onClick={onBrowseTemplates}
              className="group px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 flex items-center space-x-2"
              style={{
                background: '#ffffff',
                color: '#667eea',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#f8f9ff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#ffffff';
              }}
            >
              <span>Browse Templates</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Scroll Indicator */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
            style={{ bottom: '32px' }}
            onClick={onBrowseTemplates}
          >
            <div 
              className="w-6 h-10 border-2 rounded-full flex justify-center"
              style={{ borderColor: 'rgba(255, 255, 255, 0.5)' }}
            >
              <div 
                className="w-1 h-3 rounded-full mt-2 animate-pulse"
                style={{ background: 'rgba(255, 255, 255, 0.5)' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;