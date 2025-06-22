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
  const [scrollPosition, setScrollPosition] = useState(0);

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
    <section 
      className="py-20"
      style={{ background: '#ffffff' }}
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: '#2d3748' }}
          >
            Featured Templates
            {selectedCategory && selectedCategory !== 'all' && (
              <span 
                className="block text-2xl mt-2 capitalize"
                style={{ color: '#667eea' }}
              >
                {selectedCategory} Collection
              </span>
            )}
          </h2>
          <p 
            className="text-xl max-w-3xl mx-auto mb-8"
            style={{ color: '#718096' }}
          >
            Discover our most popular Instagram Story templates, 
            designed by professionals and loved by creators worldwide.
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold transition-all duration-200 text-sm md:text-base"
                style={{
                  background: activeTab === tab.id ? '#667eea' : '#f7fafc',
                  color: activeTab === tab.id ? '#ffffff' : '#4a5568',
                  boxShadow: activeTab === tab.id ? '0 4px 12px rgba(102, 126, 234, 0.3)' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== tab.id) {
                    e.currentTarget.style.background = '#edf2f7';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== tab.id) {
                    e.currentTarget.style.background = '#f7fafc';
                  }
                }}
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
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 rounded-full p-2 transition-colors"
            style={{ 
              marginLeft: '-20px',
              background: '#ffffff',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#f7fafc';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#ffffff';
            }}
          >
            <ChevronLeft className="w-6 h-6" style={{ color: '#4a5568' }} />
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 rounded-full p-2 transition-colors"
            style={{ 
              marginRight: '-20px',
              background: '#ffffff',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#f7fafc';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#ffffff';
            }}
          >
            <ChevronRight className="w-6 h-6" style={{ color: '#4a5568' }} />
          </button>

          {/* Templates Container */}
          <div
            id="templates-scroll"
            className="flex space-x-6 overflow-x-auto pb-4"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitScrollbar: { display: 'none' }
            }}
          >
            {templates.map((template) => (
              <div
                key={template.id}
                className="group relative rounded-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex-shrink-0"
                style={{ 
                  width: '240px',
                  background: '#ffffff',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}
                onClick={() => handleTemplateClick(template)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                }}
              >
                {/* Template Image */}
                <div 
                  className="relative overflow-hidden"
                  style={{ 
                    height: '320px',
                    background: '#f7fafc'
                  }}
                >
                  <img
                    src={template.image}
                    alt={template.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    style={{ background: 'rgba(0, 0, 0, 0.4)' }}
                  >
                    <div className="flex space-x-3">
                      <button 
                        onClick={(e) => handlePreview(template, e)}
                        className="p-2 rounded-full transition-colors"
                        style={{ background: 'rgba(255, 255, 255, 0.9)' }}
                        title="Preview"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#ffffff';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                        }}
                      >
                        <Eye className="w-4 h-4" style={{ color: '#4a5568' }} />
                      </button>
                      <button 
                        onClick={(e) => toggleFavorite(template.id, e)}
                        className="p-2 rounded-full transition-colors"
                        style={{ background: 'rgba(255, 255, 255, 0.9)' }}
                        title="Add to favorites"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#ffffff';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                        }}
                      >
                        <Heart 
                          className="w-4 h-4" 
                          style={{ 
                            fill: favorites.includes(template.id) ? '#e53e3e' : 'none',
                            color: favorites.includes(template.id) ? '#e53e3e' : '#4a5568'
                          }} 
                        />
                      </button>
                      <button 
                        onClick={(e) => handleDownload(template, e)}
                        className="p-2 rounded-full transition-colors"
                        style={{ background: '#667eea' }}
                        title="Download"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#5a67d8';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = '#667eea';
                        }}
                      >
                        <Download className="w-4 h-4" style={{ color: '#ffffff' }} />
                      </button>
                    </div>
                  </div>

                  {/* Premium Badge */}
                  {template.isPremium && (
                    <div className="absolute top-3 left-3">
                      <div 
                        className="px-2 py-1 rounded-full text-xs font-semibold"
                        style={{
                          background: 'linear-gradient(45deg, #feca57, #ff9ff3)',
                          color: '#2d3748'
                        }}
                      >
                        Premium
                      </div>
                    </div>
                  )}

                  {/* Price Badge */}
                  <div className="absolute top-3 right-3">
                    <div 
                      className="px-2 py-1 rounded-full text-xs font-semibold"
                      style={{
                        background: template.price === 'Free' ? '#48bb78' : '#ffffff',
                        color: template.price === 'Free' ? '#ffffff' : '#2d3748'
                      }}
                    >
                      {template.price}
                    </div>
                  </div>
                </div>

                {/* Template Info */}
                <div className="p-4">
                  <div className="mb-2">
                    <h3 
                      className="text-lg font-bold mb-1 truncate"
                      style={{ color: '#2d3748' }}
                    >
                      {template.title}
                    </h3>
                    <p 
                      className="text-sm capitalize"
                      style={{ color: '#718096' }}
                    >
                      {template.category}
                    </p>
                  </div>

                  {/* Stats */}
                  <div 
                    className="flex items-center justify-between text-sm"
                    style={{ color: '#718096' }}
                  >
                    <div className="flex items-center space-x-1">
                      <Download className="w-3 h-3" />
                      <span>{template.downloads > 999 ? `${Math.floor(template.downloads/1000)}k` : template.downloads}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3" style={{ fill: '#feca57', color: '#feca57' }} />
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
            <p 
              className="text-xl"
              style={{ color: '#718096' }}
            >
              No templates found for the selected filters.
            </p>
            <button 
              onClick={() => {
                setActiveTab('trending');
                const event = new CustomEvent('categorySelect', { detail: 'all' });
                window.dispatchEvent(event);
              }}
              className="mt-4 px-6 py-2 rounded-lg transition-colors"
              style={{ background: '#667eea', color: '#ffffff' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#5a67d8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#667eea';
              }}
            >
              View All Templates
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TemplateShowcase;