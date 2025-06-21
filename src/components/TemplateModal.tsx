import React from 'react';
import { X, Download, Heart, Star, Eye, Share2 } from 'lucide-react';

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

interface TemplateModalProps {
  template: Template;
  onClose: () => void;
  onDownload: () => void;
}

const TemplateModal: React.FC<TemplateModalProps> = ({ template, onClose, onDownload }) => {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: template.title,
        text: `Check out this amazing ${template.category} template: ${template.title}`,
        url: window.location.href
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        <div className="flex flex-col md:flex-row h-full">
          {/* Template Preview */}
          <div className="md:w-1/2 bg-gray-100 flex items-center justify-center p-8">
            <div className="relative max-w-sm w-full">
              <img
                src={template.image}
                alt={template.title}
                className="w-full rounded-lg shadow-lg aspect-[9/16] object-cover"
              />
              {template.isPremium && (
                <div className="absolute top-4 left-4">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
                    Premium
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Template Details */}
          <div className="md:w-1/2 p-8 flex flex-col">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{template.title}</h2>
                <p className="text-lg text-gray-600 capitalize">{template.category} Template</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-6 mb-6">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{template.rating}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Download className="w-5 h-5 text-gray-500" />
                <span className="text-gray-600">{template.downloads.toLocaleString()} downloads</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="w-5 h-5 text-gray-500" />
                <span className="text-gray-600">Preview</span>
              </div>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className={`inline-block px-4 py-2 rounded-lg text-lg font-bold ${
                template.price === 'Free' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-blue-100 text-blue-800'
              }`}>
                {template.price}
              </div>
            </div>

            {/* Description */}
            <div className="mb-8 flex-1">
              <h3 className="text-lg font-semibold mb-3">About this template</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                This professionally designed {template.category} template is perfect for creating 
                engaging Instagram Stories that capture your audience's attention. 
                Fully customizable and ready to use.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• High-resolution design (1080x1920px)</li>
                <li>• Easy to customize colors and text</li>
                <li>• Compatible with Canva, Photoshop, and Figma</li>
                <li>• Commercial license included</li>
                <li>• 24/7 customer support</li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button
                onClick={onDownload}
                className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>{template.price === 'Free' ? 'Download Free' : 'Purchase & Download'}</span>
              </button>
              <button
                onClick={handleShare}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
              >
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateModal;