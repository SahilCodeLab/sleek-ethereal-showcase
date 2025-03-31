
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

// Portfolio data
const portfolioItems = [
  {
    id: 1,
    title: 'Brand Identity Design',
    category: 'graphic',
    image: '/placeholder.svg',
    tags: ['Branding', 'Logo Design'],
  },
  {
    id: 2,
    title: 'E-commerce Website',
    category: 'web',
    image: '/placeholder.svg',
    tags: ['Web Development', 'UI/UX'],
  },
  {
    id: 3,
    title: 'AI Generated Artwork',
    category: 'ai',
    image: '/placeholder.svg',
    tags: ['AI Art', 'Digital Illustration'],
  },
  {
    id: 4,
    title: 'Corporate Promo Video',
    category: 'video',
    image: '/placeholder.svg',
    tags: ['Video Editing', 'Motion Graphics'],
  },
  {
    id: 5,
    title: 'Mobile App Design',
    category: 'web',
    image: '/placeholder.svg',
    tags: ['App Design', 'Prototyping'],
  },
  {
    id: 6,
    title: 'Magazine Layout',
    category: 'graphic',
    image: '/placeholder.svg',
    tags: ['Editorial Design', 'Typography'],
  },
];

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [filteredItems, setFilteredItems] = useState(portfolioItems);
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);

  // Filter portfolio items based on category
  useEffect(() => {
    if (filter === 'all') {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(portfolioItems.filter(item => item.category === filter));
    }
  }, [filter]);

  // Animation on scroll
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.portfolio-item');
      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9;
        
        if (isVisible) {
          setTimeout(() => {
            element.classList.add('animate-fade-in');
            element.classList.remove('opacity-0');
          }, index * 100); // Staggered animation
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    // Initial check
    animateOnScroll();
    
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, [filteredItems]);

  return (
    <section id="portfolio" className="py-20 relative bg-[#121212]">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICA8cGF0aCBkPSJNIDgwIDAgTCAwIDAgTCAwIDgwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYwNSIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            My <span className="text-gradient">Work</span>
          </h2>
          
          <p className="text-white/60 text-center max-w-2xl mx-auto mb-12">
            Showcasing a collection of my best projects across different disciplines.
            Each piece represents my passion for creativity and innovation.
          </p>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['all', 'graphic', 'web', 'ai', 'video'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={cn(
                  "px-5 py-2 rounded-full transition-all duration-300",
                  filter === category
                    ? "bg-gradient-to-r from-neon-purple to-neon-pink text-white"
                    : "glass-card text-white/70 hover:text-white"
                )}
              >
                {category === 'all' ? 'All Work' : 
                  category === 'graphic' ? 'Graphic Design' :
                  category === 'web' ? 'Web Development' :
                  category === 'ai' ? 'AI Art' : 'Video Editing'}
              </button>
            ))}
          </div>
          
          {/* Portfolio grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                className="portfolio-item opacity-0 group"
                onClick={() => setSelectedItem(item)}
              >
                <div className="glass-card overflow-hidden rounded-lg">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag, index) => (
                            <span key={index} className="text-xs bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* View more button */}
          <div className="text-center mt-12">
            <button className="glow-button bg-transparent border border-neon-purple px-8 py-3 rounded-full text-white font-medium hover:bg-neon-purple/10 transition-all duration-300">
              View More Projects
            </button>
          </div>
        </div>
      </div>
      
      {/* Portfolio modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="animate-fade-in max-w-4xl w-full bg-[#1A1F2C] rounded-xl overflow-hidden relative">
            <button 
              className="absolute top-4 right-4 text-white/80 hover:text-white z-10"
              onClick={() => setSelectedItem(null)}
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="md:flex">
              <div className="md:w-2/3">
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:w-1/3">
                <h3 className="text-2xl font-bold mb-4 text-gradient">
                  {selectedItem.title}
                </h3>
                <div className="mb-4">
                  {selectedItem.tags.map((tag, index) => (
                    <span key={index} className="inline-block text-sm bg-white/10 px-3 py-1 rounded-full mr-2 mb-2">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-white/70 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo ac nisl tincidunt 
                  consequat. Proin tincidunt, nunc eu sollicitudin luctus, ipsum ligula.
                </p>
                <button className="glow-button bg-gradient-to-r from-neon-purple to-neon-pink px-6 py-2 rounded-full text-white font-medium hover:shadow-lg transition-all duration-300">
                  View Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
