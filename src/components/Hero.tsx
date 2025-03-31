
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    'Graphic Designer',
    'Web Developer',
    'AI Artist',
    'Video Editor'
  ];

  useEffect(() => {
    const text = roles[currentTextIndex];
    const speed = isDeleting ? 80 : 150;
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(text.substring(0, displayText.length + 1));
      } else {
        setDisplayText(text.substring(0, displayText.length - 1));
      }
    }, speed);
    
    if (!isDeleting && displayText === text) {
      setTimeout(() => {
        setIsDeleting(true);
      }, 1500);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }
    
    return () => clearTimeout(timer);
  }, [displayText, currentTextIndex, isDeleting, roles]);

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Background gradient and effects */}
      <div className="absolute inset-0 bg-[#121212]">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_30%_20%,rgba(155,135,245,0.4)_0%,transparent_40%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_70%_80%,rgba(217,70,239,0.4)_0%,transparent_40%)]"></div>
      </div>
      
      {/* Grid lines */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICA8cGF0aCBkPSJNIDgwIDAgTCAwIDAgTCAwIDgwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYwNSIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-8 relative w-40 h-40 mx-auto">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-neon-purple via-neon-pink to-neon-orange p-[3px] animate-pulse-glow">
              <div className="w-full h-full rounded-full bg-[#121212] flex items-center justify-center overflow-hidden">
                <img
                  src="/placeholder.svg" 
                  alt="Portfolio Logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 glow-text">
            Creative <span className="text-gradient">Portfolio</span>
          </h1>
          
          <div className="h-12 mb-8">
            <p className="text-white/80 text-xl md:text-2xl lg:text-3xl font-light">
              I am a{' '}
              <span className="font-semibold text-neon-purple">
                {displayText}
              </span>
              <span className="inline-block w-[3px] h-6 bg-neon-purple ml-1 animate-blink"></span>
            </p>
          </div>
          
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Creating stunning digital experiences that merge artistry with functionality.
            Let's build something extraordinary together.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#portfolio"
              className="glow-button bg-gradient-to-r from-neon-purple to-neon-pink px-8 py-3 rounded-full text-white font-medium hover:shadow-lg transition-all duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="glow-button bg-transparent border border-neon-purple px-8 py-3 rounded-full text-white font-medium hover:bg-neon-purple/10 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#about" className="text-white/50 hover:text-white">
              <svg
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
