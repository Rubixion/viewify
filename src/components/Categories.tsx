import React, { useEffect } from 'react';
import { MapPin, Dumbbell, Briefcase, ArrowRight } from 'lucide-react';

interface CategoriesProps {
  onCategorySelect: (category: string) => void;
  onViewAll: () => void;
}

const Categories: React.FC<CategoriesProps> = ({ onCategorySelect, onViewAll }) => {
  const categories = [
    {
      id: 'travel',
      name: 'Travel',
      icon: MapPin,
      description: 'Wanderlust-inspiring templates for travel bloggers and adventurers',
      color: 'linear-gradient(135deg, #48bb78, #38a169)',
      templates: 150,
      popular: true
    },
    {
      id: 'fitness',
      name: 'Fitness',
      icon: Dumbbell,
      description: 'Motivational designs for fitness coaches and wellness brands',
      color: 'linear-gradient(135deg, #ed8936, #dd6b20)',
      templates: 120,
      popular: false
    },
    {
      id: 'business',
      name: 'Business',
      icon: Briefcase,
      description: 'Professional templates for entrepreneurs and corporate brands',
      color: 'linear-gradient(135deg, #805ad5, #6b46c1)',
      templates: 200,
      popular: true
    }
  ];

  useEffect(() => {
    const handleCategorySelect = (event: CustomEvent) => {
      onCategorySelect(event.detail);
    };

    window.addEventListener('categorySelect', handleCategorySelect as EventListener);
    return () => {
      window.removeEventListener('categorySelect', handleCategorySelect as EventListener);
    };
  }, [onCategorySelect]);

  const handleCategoryClick = (categoryId: string) => {
    onCategorySelect(categoryId);
  };

  return (
    <section 
      className="py-20"
      style={{ background: '#f7fafc' }}
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: '#2d3748' }}
          >
            Templates for Every Niche
          </h2>
          <p 
            className="text-xl max-w-3xl mx-auto"
            style={{ color: '#718096' }}
          >
            Whether you're sharing travel adventures, fitness journeys, or business insights, 
            we have professionally designed templates that match your brand.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="group relative rounded-2xl p-8 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                style={{
                  background: '#ffffff',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}
                onClick={() => handleCategoryClick(category.id)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                }}
              >
                {/* Popular Badge */}
                {category.popular && (
                  <div className="absolute -top-4 left-6">
                    <div 
                      className="px-3 py-1 rounded-full text-sm font-semibold"
                      style={{
                        background: '#feca57',
                        color: '#2d3748'
                      }}
                    >
                      Popular
                    </div>
                  </div>
                )}

                {/* Icon */}
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: category.color }}
                >
                  <IconComponent className="w-8 h-8" style={{ color: '#ffffff' }} />
                </div>

                {/* Content */}
                <h3 
                  className="text-2xl font-bold mb-4"
                  style={{ color: '#2d3748' }}
                >
                  {category.name}
                </h3>
                <p 
                  className="mb-6 leading-relaxed"
                  style={{ color: '#718096' }}
                >
                  {category.description}
                </p>

                {/* Template Count */}
                <div className="flex items-center justify-between mb-6">
                  <span 
                    className="text-sm"
                    style={{ color: '#718096' }}
                  >
                    {category.templates} templates
                  </span>
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2"
                        style={{
                          backgroundImage: `url(https://images.pexels.com/photos/${1000 + i}/pexels-photo-${1000 + i}.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop)`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          borderColor: '#ffffff'
                        }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button 
                  className="w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                  style={{
                    background: '#f7fafc',
                    color: '#4a5568'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = category.color;
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#f7fafc';
                    e.currentTarget.style.color = '#4a5568';
                  }}
                >
                  <span>Explore {category.name}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <button 
            onClick={onViewAll}
            className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 flex items-center space-x-2 mx-auto"
            style={{
              background: '#667eea',
              color: '#ffffff',
              boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#5a67d8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#667eea';
            }}
          >
            <span>View All Categories</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;