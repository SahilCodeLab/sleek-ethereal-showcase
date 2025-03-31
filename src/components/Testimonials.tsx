
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: 'Emma Thompson',
    role: 'Marketing Director',
    company: 'CreativeMinds Agency',
    avatar: '/placeholder.svg',
    content: 'Working with this designer was an absolute pleasure. Their attention to detail and creative approach transformed our brand identity. The final results exceeded our expectations and significantly improved our market presence.',
    rating: 5,
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'CEO',
    company: 'TechInnovate',
    avatar: '/placeholder.svg',
    content: 'An exceptional talent with a keen eye for design and technical expertise. They delivered a website that perfectly balances aesthetics and functionality. Their ability to understand our vision was impressive.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Sarah Williams',
    role: 'Art Director',
    company: 'VisualCraft Studios',
    avatar: '/placeholder.svg',
    content: 'The AI artwork created for our campaign was revolutionary. Every piece captured our brand essence while pushing creative boundaries. Working with such a forward-thinking designer gave us a significant edge.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Michael Rodriguez',
    role: 'Product Manager',
    company: 'NextGen Solutions',
    avatar: '/placeholder.svg',
    content: 'The video editing skills demonstrated in our product launch were exceptional. Complex concepts were communicated clearly and engagingly. Our audience retention metrics improved dramatically.',
    rating: 5,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoplay) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoplay]);
  
  // Pause autoplay on user interaction
  const handleManualNav = (index: number) => {
    setActiveIndex(index);
    setIsAutoplay(false);
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setIsAutoplay(true), 10000);
  };

  return (
    <section id="testimonials" className="py-20 bg-[#121212] relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_70%_30%,rgba(155,135,245,0.4)_0%,transparent_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          
          <p className="text-white/60 text-center max-w-2xl mx-auto mb-16">
            Don't just take my word for it. Here's what my clients have to say about
            working with me.
          </p>
          
          {/* Testimonials carousel */}
          <div className="relative glass-card p-6 md:p-10 rounded-xl">
            <div
              className="transition-opacity duration-500"
              key={testimonials[activeIndex].id}
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-neon-purple via-neon-pink to-neon-orange p-[2px]">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img 
                        src={testimonials[activeIndex].avatar} 
                        alt={testimonials[activeIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-3">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <blockquote className="text-white/80 text-lg italic mb-6">
                    "{testimonials[activeIndex].content}"
                  </blockquote>
                  
                  <div>
                    <h4 className="font-bold text-xl text-gradient">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-white/60">
                      {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleManualNav(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    activeIndex === index
                      ? "bg-gradient-to-r from-neon-purple to-neon-pink w-8"
                      : "bg-white/30 hover:bg-white/50"
                  )}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Navigation arrows */}
            <button
              className="absolute top-1/2 -translate-y-1/2 left-4 text-white/70 hover:text-white transition-colors duration-300 hidden md:block"
              onClick={() => handleManualNav((activeIndex - 1 + testimonials.length) % testimonials.length)}
              aria-label="Previous testimonial"
            >
              <svg 
                className="w-8 h-8" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              className="absolute top-1/2 -translate-y-1/2 right-4 text-white/70 hover:text-white transition-colors duration-300 hidden md:block"
              onClick={() => handleManualNav((activeIndex + 1) % testimonials.length)}
              aria-label="Next testimonial"
            >
              <svg 
                className="w-8 h-8" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
