
import React, { useEffect } from 'react';

// Skills data
const skills = [
  { 
    id: 1, 
    category: 'Design',
    items: [
      { name: 'Photoshop', proficiency: 90 },
      { name: 'Illustrator', proficiency: 85 },
      { name: 'Figma', proficiency: 80 },
      { name: 'After Effects', proficiency: 75 },
    ]
  },
  { 
    id: 2, 
    category: 'Development',
    items: [
      { name: 'HTML & CSS', proficiency: 95 },
      { name: 'JavaScript', proficiency: 85 },
      { name: 'React.js', proficiency: 80 },
      { name: 'Node.js', proficiency: 70 },
    ]
  },
  { 
    id: 3, 
    category: 'AI & Video',
    items: [
      { name: 'Midjourney', proficiency: 90 },
      { name: 'Stable Diffusion', proficiency: 85 },
      { name: 'Premiere Pro', proficiency: 80 },
      { name: 'DaVinci Resolve', proficiency: 75 },
    ]
  },
];

// Tools data
const tools = [
  { name: 'Photoshop', icon: '/placeholder.svg' },
  { name: 'Illustrator', icon: '/placeholder.svg' },
  { name: 'Figma', icon: '/placeholder.svg' },
  { name: 'After Effects', icon: '/placeholder.svg' },
  { name: 'Premiere Pro', icon: '/placeholder.svg' },
  { name: 'VS Code', icon: '/placeholder.svg' },
  { name: 'GitHub', icon: '/placeholder.svg' },
  { name: 'Midjourney', icon: '/placeholder.svg' },
];

const Skills = () => {
  // Animation on scroll
  useEffect(() => {
    const animateSkills = () => {
      const skillBars = document.querySelectorAll('.skill-bar');
      
      skillBars.forEach((bar) => {
        const rect = bar.getBoundingClientRect();
        const isVisible = rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8;
        
        if (isVisible) {
          const proficiency = bar.getAttribute('data-proficiency');
          if (proficiency) {
            (bar as HTMLElement).style.width = `${proficiency}%`;
          }
        }
      });
    };

    window.addEventListener('scroll', animateSkills);
    // Initial check
    setTimeout(animateSkills, 300);
    
    return () => window.removeEventListener('scroll', animateSkills);
  }, []);

  return (
    <section id="skills" className="py-20 bg-[#0D0D0D] relative">
      {/* Background gradient */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neon-purple/50 to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neon-pink/50 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Skills & <span className="text-gradient">Tools</span>
          </h2>
          
          <p className="text-white/60 text-center max-w-2xl mx-auto mb-16">
            A comprehensive overview of my technical skills and the tools I use
            to bring creative visions to life.
          </p>
          
          {/* Skills */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {skills.map((skillGroup) => (
              <div key={skillGroup.id} className="glass-card p-6 rounded-xl animate-on-scroll opacity-0">
                <h3 className="text-xl font-semibold mb-6 text-gradient">{skillGroup.category}</h3>
                
                <div className="space-y-6">
                  {skillGroup.items.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-white/90">{skill.name}</span>
                        <span className="text-neon-purple">{skill.proficiency}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="skill-bar h-full bg-gradient-to-r from-neon-purple to-neon-pink rounded-full transition-all duration-1000 ease-out"
                          data-proficiency={skill.proficiency}
                          style={{ width: '0%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Tools */}
          <div className="animate-on-scroll opacity-0">
            <h3 className="text-2xl font-semibold mb-8 text-center">Tools I Use</h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6">
              {tools.map((tool, index) => (
                <div 
                  key={index} 
                  className="glass-card p-4 rounded-lg text-center hover:-translate-y-2 transition-transform duration-300"
                >
                  <img 
                    src={tool.icon} 
                    alt={tool.name}
                    className="w-12 h-12 mx-auto mb-3 opacity-80"
                  />
                  <p className="text-sm text-white/70">{tool.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
