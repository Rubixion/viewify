import React, { useState, useEffect } from 'react';
import { Heart, Download, Eye, Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Template {
  id: number;
  title: string;
  category: string;
  downloads: number;
  rating: number;
  price: string;
  image: string;
  isPremium: boolean;
}

interface TemplateShowcaseProps {
  selectedCategory: string;
  onTemplateSelect: (template: Template) => void;
}

const TemplateShowcase: React.FC<TemplateShowcaseProps> = ({ selectedCategory, onTemplateSelect }) => {
  const [activeTab, setActiveTab] = useState('trending');
  const [favorites, setFavorites] = useState<number[]>([]);

  const allTemplates: Template[] = [
    {
      id: 1,
      title: 'Tropical Paradise',
      category: 'travel',
      downloads: 1200,
      rating: 4.9,
      price: 'Free',
      image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      isPremium: false
    },
    {
      id: 2,
      title: 'Fitness Journey',
      category: 'fitness',
      downloads: 980,
      rating: 4.8,
      price: '$3.99',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      isPremium: true
    },
    {
      id: 3,
      title: 'Corporate Success',
      category: 'business',
      downloads: 1500,
      rating: 4.9,
      price: '$4.99',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      isPremium: true
    },
    {
      id: 4,
      title: 'Mountain Adventure',
      category: 'travel',
      downloads: 800,
      rating: 4.7,
      price: 'Free',
      image: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      isPremium: false
    },
    {
      id: 5,
      title: 'Workout Motivation',
      category: 'fitness',
      downloads: 1100,
      rating: 4.8,
      price: '$2.99',
      image: 'https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      isPremium: true
    },
    {
      id: 6,
      title: 'Startup Pitch',
      category: 'business',
      downloads: 750,
      rating: 4.6,
      price: '$3.99',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      isPremium: true
    },
    {
      id: 7,
      title: 'Beach Vibes',
      category: 'travel',
      downloads: 950,
      rating: 4.8,
      price: '$2.99',
      image: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      isPremium: true
    },
    {
      id: 8,
      title: 'Yoga Flow',
      category: 'fitness',
      downloads: 650,
      rating: 4.7,
      price: 'Free',
      image: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      isPremium: false
    },
    {
      id: 9,
      title: 'Business Growth',
      category: 'business',
      downloads: 1300,
      rating: 4.9,
      price: '$5.99',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      isPremium: true
    }
  ];

  const tabs = [
    { id: 'trending', name: 'Trending' },
    { id: 'new', name: 'New Releases' },
    { id: 'popular', name: 'Most Popular' },
    { id: 'free', name: 'Free Templates' }
  ];

  const getFilteredTemplates = () => {
    let filtered = allTemplates;

    // Filter by category
    if (selectedCategory && selectedCategory !== 'all') {
      filtered = filtered.filter(template => template.category === selectedCategory);
    }

    // Filter by tab
    switch (activeTab) {
      case 'trending':
        filtered = filtered.sort((a, b) => b.downloads - a.downloads);
        break;
      case 'new':
        filtered = filtered.sort((a, b) => b.id - a.id);
        break;
      case 'popular':
        filtered = filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'free':
        filtered = filtered.filter(template => template.price === 'Free');
        break;
    }

    return filtered;
  };

  const templates = getFilteredTemplates();

  const toggleFavorite = (templateId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites(prev => 
      prev.includes(templateId) 
        ? prev.filter(id => id !== templateId)
        : [...prev, templateId]
    );
  };

  const handleTemplateClick = (template: Template) => {
    onTemplateSelect(template);
  };

  const handlePreview = (template: Template, e: React.MouseEvent) => {
    e.stopPropagation();
    onTemplateSelect(template);
  };

  const handleDownload = (template: Template, e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('Downloading:', template.title);
    alert(`Downloading ${template.title}...`);
  };

  const scrollLeft = () => {
    const container = document.getElementById('templates-scroll');
    if (container) {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById('templates-scroll');
    if (container) {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    setScrollPosition(0);
  }, [selectedCategory, activeTab]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Templates
            {selectedCategory && selectedCategory !== 'all' && (
              <span className="block text-2xl text-blue-600 mt-2 capitalize">
                {selectedCategory} Collection
              </span>
            )}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our most popular Instagram Story templates, 
            designed by professionals and loved by creators worldwide.
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold transition-all duration-200 text-sm md:text-base ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Templates Horizontal Scroll */}
        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
            style={{ marginLeft: '-20px' }}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
            style={{ marginRight: '-20px' }}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Templates Container */}
          <div
            id="templates-scroll"
            className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {templates.map((template) => (
              <div
                key={template.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex-shrink-0"
                style={{ width: '240px' }}
                onClick={() => handleTemplateClick(template)}
              >
                {/* Template Image */}
                <div className="relative overflow-hidden bg-gray-200" style={{ height: '320px' }}>
                  <img
                    src={template.image}
                    alt={template.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-3">
                      <button 
                        onClick={(e) => handlePreview(template, e)}
                        className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                        title="Preview"
                      >
                        <Eye className="w-4 h-4 text-gray-700" />
                      </button>
                      <button 
                        onClick={(e) => toggleFavorite(template.id, e)}
                        className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                        title="Add to favorites"
                      >
                        <Heart className={`w-4 h-4 ${favorites.includes(template.id) ? 'fill-red-500 text-red-500' : 'text-gray-700'}`} />
                      </button>
                      <button 
                        onClick={(e) => handleDownload(template, e)}
                        className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
                        title="Download"
                      >
                        <Download className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Premium Badge */}
                  {template.isPremium && (
                    <div className="absolute top-3 left-3">
                      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold">
                        Premium
                      </div>
                    </div>
                  )}

                  {/* Price Badge */}
                  <div className="absolute top-3 right-3">
                    <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      template.price === 'Free' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-white text-gray-900'
                    }`}>
                      {template.price}
                    </div>
                  </div>
                </div>

                {/* Template Info */}
                <div className="p-4">
                  <div className="mb-2">
                    <h3 className="text-lg font-bold text-gray-900 mb-1 truncate">{template.title}</h3>
                    <p className="text-sm text-gray-500 capitalize">{template.category}</p>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Download className="w-3 h-3" />
                      <span>{template.downloads > 999 ? `${Math.floor(template.downloads/1000)}k` : template.downloads}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span>{template.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {templates.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500">No templates found for the selected filters.</p>
            <button 
              onClick={() => {
                setActiveTab('trending');
                const event = new CustomEvent('categorySelect', { detail: 'all' });
                window.dispatchEvent(event);
              }}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All Templates
            </button>
          </div>
        )}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default TemplateShowcase;
function setScrollPosition(position: number) {
  const container = document.getElementById('templates-scroll');
  if (container) {
    container.scrollLeft = position;
  }
}
