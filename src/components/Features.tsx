import React from 'react';
import { Palette, Zap, Download, Users, Shield, Headphones } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Palette,
      title: 'Easy Customization',
      description: 'Modify colors, fonts, and layouts with our intuitive editor. No design skills required.',
      color: '#667eea'
    },
    {
      icon: Zap,
      title: 'Instant Download',
      description: 'Get your templates immediately after purchase. Available in multiple formats.',
      color: '#feca57'
    },
    {
      icon: Download,
      title: 'Commercial License',
      description: 'Use our templates for personal and commercial projects without any restrictions.',
      color: '#48bb78'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Join thousands of creators sharing tips, inspiration, and feedback.',
      color: '#ed8936'
    },
    {
      icon: Shield,
      title: 'Quality Guaranteed',
      description: 'Every template is carefully crafted and tested to ensure the highest quality.',
      color: '#805ad5'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Our dedicated team is here to help you succeed with your content creation.',
      color: '#38b2ac'
    }
  ];

  return (
    <section 
      className="py-20"
      style={{
        background: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)'
      }}
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: '#2d3748' }}
          >
            Why Choose Viewify?
          </h2>
          <p 
            className="text-xl max-w-3xl mx-auto"
            style={{ color: '#718096' }}
          >
            We're more than just a template marketplace. We're your creative partner 
            in building a stunning Instagram presence that converts.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl transition-all duration-300 transform hover:-translate-y-2"
                style={{
                  background: '#ffffff',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                }}
              >
                {/* Icon */}
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: feature.color }}
                >
                  <IconComponent className="w-8 h-8" style={{ color: '#ffffff' }} />
                </div>

                {/* Content */}
                <h3 
                  className="text-xl font-bold mb-4"
                  style={{ color: '#2d3748' }}
                >
                  {feature.title}
                </h3>
                <p 
                  className="leading-relaxed"
                  style={{ color: '#718096' }}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;