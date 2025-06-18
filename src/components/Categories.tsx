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
      color: 'from-emerald-500 to-teal-600',
      templates: 150,
      popular: true
    },
    {
      id: 'fitness',
      name: 'Fitness',
      icon: Dumbbell,
      description: 'Motivational designs for fitness coaches and wellness brands',
      color: 'from-orange-500 to-red-600',
      templates: 120,
      popular: false
    },
    {
      id: 'business',
      name: 'Business',
      icon: Briefcase,
      description: 'Professional templates for entrepreneurs and corporate brands',
      color: 'from-purple-500 to-indigo-600',
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Templates for Every Niche
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => handleCategoryClick(category.id)}
              >
                {/* Popular Badge */}
                {category.popular && (
                  <div className="absolute -top-4 left-6">
                    <div className="bg-yellow-400 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </div>
                  </div>
                )}

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>

                {/* Template Count */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-gray-500">{category.templates} templates</span>
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 bg-gray-200 rounded-full border-2 border-white"
                        style={{
                          backgroundImage: `url(https://images.pexels.com/photos/${1000 + i}/pexels-photo-${1000 + i}.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop)`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-blue-700 bg-gray-100 text-gray-700 group-hover:text-white py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
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
            className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2 mx-auto"
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