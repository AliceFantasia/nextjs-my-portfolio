import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, ExternalLink, Code2, Palette, Zap } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Sample projects - you'll replace these with your actual projects
  const projects = [
    {
      id: 1,
      title: "Weather Dashboard",
      description: "Interactive weather app with real-time data visualization and 7-day forecasts",
      tags: ["React", "API Integration", "Chart.js"],
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=500&fit=crop",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Task Manager Pro",
      description: "Feature-rich todo app with categories, priorities, and local storage",
      tags: ["TypeScript", "React", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "E-Commerce Storefront",
      description: "Modern product showcase with cart, filtering, and checkout flow",
      tags: ["Next.js", "React Context", "Stripe"],
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=500&fit=crop",
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  const skills = [
    { icon: Code2, name: "Frontend Development", items: ["React", "Next.js", "TypeScript", "JavaScript"] },
    { icon: Palette, name: "Styling & Design", items: ["Tailwind CSS", "CSS3", "Responsive Design"] },
    { icon: Zap, name: "Tools & Workflow", items: ["Git", "VS Code", "npm", "Vercel"] }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e8e8e8]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-[#222]">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold tracking-tight">
              <span className="text-[#e8e8e8]">Your</span>
              <span className="text-[#ff6b6b]">Name</span>
            </div>
            <div className="flex gap-8">
              {['Home', 'Projects', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-all duration-300 hover:text-[#ff6b6b] ${
                    activeSection === item.toLowerCase() ? 'text-[#ff6b6b]' : 'text-[#888]'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="mb-4 text-[#ff6b6b] text-sm font-medium tracking-widest uppercase">
              Frontend Developer
            </div>
            <h1 className="text-7xl md:text-8xl font-bold mb-6 leading-none tracking-tight">
              Building Digital
              <br />
              <span className="text-[#ff6b6b]">Experiences</span>
            </h1>
            <p className="text-xl text-[#999] max-w-2xl mb-12 leading-relaxed">
              Crafting modern, responsive web applications with React, Next.js, and TypeScript.
              Passionate about clean code and exceptional user experiences.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#ff6b6b] text-[#0a0a0a] px-8 py-4 rounded-lg font-semibold hover:bg-[#ff5252] transition-all duration-300 transform hover:scale-105">
                View My Work
              </button>
              <button className="border-2 border-[#333] px-8 py-4 rounded-lg font-semibold hover:border-[#ff6b6b] hover:text-[#ff6b6b] transition-all duration-300">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-[#999] text-lg">A selection of my recent work</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-[#151515] rounded-xl overflow-hidden border border-[#222] hover:border-[#ff6b6b] transition-all duration-500 hover:transform hover:scale-[1.02]"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="relative h-48 bg-[#1a1a1a] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151515] to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#ff6b6b] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-[#999] text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-[#1a1a1a] text-[#ff6b6b] px-3 py-1 rounded-full border border-[#222]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.demoUrl}
                      className="flex items-center gap-2 text-sm text-[#999] hover:text-[#ff6b6b] transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-2 text-sm text-[#999] hover:text-[#ff6b6b] transition-colors duration-300"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl font-bold mb-6">About Me</h2>
              <div className="space-y-4 text-[#999] leading-relaxed">
                <p>
                  I'm a frontend developer passionate about creating beautiful, functional web experiences.
                  Currently focused on mastering React, Next.js, and modern JavaScript ecosystems.
                </p>
                <p>
                  I love the challenge of turning complex problems into simple, elegant interfaces.
                  Every project is an opportunity to learn something new and push my skills further.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open source,
                  or sharing what I've learned with the developer community.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-8">Skills & Technologies</h3>
              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.name} className="border-l-2 border-[#ff6b6b] pl-6">
                    <div className="flex items-center gap-3 mb-3">
                      <skill.icon size={24} className="text-[#ff6b6b]" />
                      <h4 className="font-semibold text-lg">{skill.name}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="text-sm bg-[#151515] text-[#e8e8e8] px-3 py-1 rounded border border-[#222]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-5xl font-bold mb-6">Let's Connect</h2>
            <p className="text-[#999] text-lg mb-12">
              I'm always open to new opportunities and collaborations.
              Feel free to reach out if you'd like to work together!
            </p>
            
            <div className="flex justify-center gap-6 mb-12">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-2 bg-[#151515] px-6 py-3 rounded-lg border border-[#222] hover:border-[#ff6b6b] hover:text-[#ff6b6b] transition-all duration-300"
              >
                <Mail size={20} />
                Email
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#151515] px-6 py-3 rounded-lg border border-[#222] hover:border-[#ff6b6b] hover:text-[#ff6b6b] transition-all duration-300"
              >
                <Github size={20} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#151515] px-6 py-3 rounded-lg border border-[#222] hover:border-[#ff6b6b] hover:text-[#ff6b6b] transition-all duration-300"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>

            <div className="bg-[#151515] rounded-xl p-8 border border-[#222]">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="bg-[#0a0a0a] border border-[#222] rounded-lg px-4 py-3 focus:outline-none focus:border-[#ff6b6b] transition-colors duration-300"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="bg-[#0a0a0a] border border-[#222] rounded-lg px-4 py-3 focus:outline-none focus:border-[#ff6b6b] transition-colors duration-300"
                  />
                </div>
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full bg-[#0a0a0a] border border-[#222] rounded-lg px-4 py-3 focus:outline-none focus:border-[#ff6b6b] transition-colors duration-300 resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-[#ff6b6b] text-[#0a0a0a] py-4 rounded-lg font-semibold hover:bg-[#ff5252] transition-all duration-300 transform hover:scale-[1.02]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#222]">
        <div className="max-w-6xl mx-auto text-center text-[#666] text-sm">
          <p>© 2024 Your Name. Built with React & Next.js</p>
        </div>
      </footer>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
