import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TemplateShowcase from './components/TemplateShowcase';
import Categories from './components/Categories';
import Features from './components/Features';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import TemplateModal from './components/TemplateModal';

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
  };

  const handleCloseTemplateModal = () => {
    setSelectedTemplate(null);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    // Smooth scroll to templates section
    const templatesSection = document.getElementById('templates');
    if (templatesSection) {
      templatesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Header onNavigate={scrollToSection} />
      <Hero onBrowseTemplates={() => scrollToSection('templates')} />
      <div id="templates">
        <TemplateShowcase 
          selectedCategory={selectedCategory}
          onTemplateSelect={handleTemplateSelect}
        />
      </div>
      <Categories 
        onCategorySelect={handleCategorySelect}
        onViewAll={() => scrollToSection('templates')}
      />
      <div id="features">
        <Features />
      </div>
      <div id="newsletter">
        <Newsletter onSubscribe={(email) => console.log('Newsletter signup:', email)} />
      </div>
      <div id="contact">
        <Footer />
      </div>

      {/* Template Modal */}
      {selectedTemplate && (
        <TemplateModal 
          template={selectedTemplate}
          onClose={handleCloseTemplateModal}
          onDownload={() => console.log('Download:', selectedTemplate.title)}
        />
      )}
    </div>
  );
}

export default App;