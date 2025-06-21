import React from 'react';
import { Palette, Zap, Download, Users, Shield, Headphones } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Palette,
      title: 'Easy Customization',
      description: 'Modify colors, fonts, and layouts with our intuitive editor. No design skills required.'
    },
    {
      icon: Zap,
      title: 'Instant Download',
      description: 'Get your templates immediately after purchase. Available in multiple formats.'
    },
    {
      icon: Download,
      title: 'Commercial License',
      description: 'Use our templates for personal and commercial projects without any restrictions.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Join thousands of creators sharing tips, inspiration, and feedback.'
    },
    {
      icon: Shield,
      title: 'Quality Guaranteed',
      description: 'Every template is carefully crafted and tested to ensure the highest quality.'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Our dedicated team is here to help you succeed with your content creation.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Viewify?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;