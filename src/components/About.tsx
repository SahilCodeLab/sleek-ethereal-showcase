
import React, { useEffect } from 'react';

const About = () => {
  // Function to check if element is in viewport
  const isInViewport = (element: Element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
    );
  };

  // Add animation class when element is in viewport
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        if (isInViewport(element)) {
          element.classList.add('animate-fade-in');
          element.classList.remove('opacity-0');
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    // Initial check
    animateOnScroll();
    
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <section id="about" className="py-20 bg-[#0D0D0D] relative">
      {/* Background effect */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neon-purple/50 to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neon-pink/50 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center animate-on-scroll opacity-0">
            About <span className="text-gradient">Me</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="animate-on-scroll opacity-0 order-2 md:order-1">
              <div className="relative">
                <div className="glass-card p-1 rounded-xl overflow-hidden">
                  <div className="overflow-hidden rounded-lg">
                    <img 
                      src="/placeholder.svg" 
                      alt="Designer at work"
                      className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-neon-purple/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-neon-pink/20 rounded-full blur-xl"></div>
              </div>
            </div>
            
            {/* Content */}
            <div className="animate-on-scroll opacity-0 order-1 md:order-2">
              <h3 className="text-2xl font-bold mb-6 text-gradient">
                Hi, I'm Jason Doe
              </h3>
              
              <p className="text-white/80 mb-6 leading-relaxed">
                I'm a multidisciplinary designer and developer with over 8 years of experience creating compelling digital experiences. My passion lies at the intersection of design and technology, where I craft solutions that are both beautiful and functional.
              </p>
              
              <p className="text-white/80 mb-6 leading-relaxed">
                With expertise spanning graphic design, web development, AI art generation, and video editing, I bring a holistic approach to every project. I believe that great design is not just about aesthetics, but about solving problems and creating meaningful connections.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="glass-card px-4 py-2 rounded-full text-sm text-white/90">Problem Solver</span>
                <span className="glass-card px-4 py-2 rounded-full text-sm text-white/90">Visual Storyteller</span>
                <span className="glass-card px-4 py-2 rounded-full text-sm text-white/90">Creative Technologist</span>
                <span className="glass-card px-4 py-2 rounded-full text-sm text-white/90">Detail Oriented</span>
              </div>
              
              <a 
                href="#portfolio" 
                className="inline-block glow-button bg-transparent border border-neon-purple px-6 py-3 rounded-full text-white font-medium hover:bg-neon-purple/10 transition-all duration-300"
              >
                Explore My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
