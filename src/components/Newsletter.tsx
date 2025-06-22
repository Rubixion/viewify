import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

interface NewsletterProps {
  onSubscribe: (email: string) => void;
}

const Newsletter: React.FC<NewsletterProps> = ({ onSubscribe }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      onSubscribe(email);
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section 
      className="py-20"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ background: 'rgba(255, 255, 255, 0.2)' }}
            >
              <Mail className="w-8 h-8" style={{ color: '#ffffff' }} />
            </div>
            <h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: '#ffffff' }}
            >
              Stay Updated
            </h2>
            <p 
              className="text-xl max-w-2xl mx-auto"
              style={{ color: 'rgba(255, 255, 255, 0.9)' }}
            >
              Get notified about new templates, design trends, and exclusive offers. 
              Join thousands of creators who never miss an update.
            </p>
          </div>

          {isSubscribed ? (
            <div className="max-w-md mx-auto">
              <div 
                className="p-6 rounded-2xl font-semibold text-lg"
                style={{
                  background: '#48bb78',
                  color: '#ffffff'
                }}
              >
                🎉 Thanks for subscribing! Check your inbox soon.
              </div>
            </div>
          ) : (
            <div className="max-w-md mx-auto">
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(4px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#ffffff'
                  }}
                  required
                />
                <button 
                  type="submit"
                  className="px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
                  style={{
                    background: '#ffffff',
                    color: '#667eea'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#f7fafc';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#ffffff';
                  }}
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
              <p 
                className="text-sm mt-4"
                style={{ color: 'rgba(255, 255, 255, 0.8)' }}
              >
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;