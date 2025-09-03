import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Mail, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [showContent, setShowContent] = useState(false);

  const roles = ['Full Stack Developer', 'Java Developer', 'Problem Solver', 'Tech Enthusiast'];

  useEffect(() => {
    // Trigger content animation after component mounts
    const timer = setTimeout(() => setShowContent(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Main Content */}
        <div className={`transition-all duration-1000 transform ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Greeting */}
          <div className="mb-6">
            <p className="text-blue-400 text-lg font-medium mb-2 animate-fade-in">Hello, I'm</p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Prashant Kumar
              </span>
            </h1>
          </div>

          {/* Typing Animation */}
          <div className="mb-8 h-16 flex items-center justify-center">
            <div className="text-xl sm:text-2xl lg:text-3xl font-semibold">
              <span className="text-gray-300">I'm a </span>
              <span className="text-blue-400 font-bold">{text}</span>
              <span className="animate-pulse text-blue-400 font-light">|</span>
            </div>
          </div>

          {/* Description */}
          <div className={`mb-12 transition-all duration-1000 delay-300 transform ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Passionate about crafting efficient, scalable solutions with modern technologies. 
              I love turning complex problems into simple, elegant designs and bringing ideas to life through code.
            </p>
          </div>

          {/* Action Buttons */}
          <div className={`mb-16 transition-all duration-1000 delay-500 transform ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection('about')}
                className="group relative bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 font-medium"
              >
                <span className="relative z-10">Discover My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <a
                href="https://drive.google.com/uc?export=download&id=1arJbn6MSrkatBwcOgCStSX-g6dAZHT3v"
                download
                className="group flex items-center gap-2 border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-blue-400 px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg font-medium"
              >
                <Download size={18} className="group-hover:animate-bounce" />
                Download Resume
              </a>
            </div>
          </div>


        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom left-1/2 transform -translate-x-1/2 cursor-pointer group"
          onClick={() => scrollToSection('about')}
        >
          <div className="flex flex-col items-center animate-float">
            <span className="text-sm text-gray-400 mb-2 opacity-70">Scroll Down</span>
            <ChevronDown size={24} className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
          </div>
        </div>
      </div>

      {/* Social Links - Fixed at bottom */}
      <div className="absolute bottom-8 right-8 z-20">
        <div className={`transition-all duration-1000 delay-700 transform ${showContent ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
          <div className="flex flex-col gap-4">
            <a
              href="mailto:prashantthakur.dev@gmail.com"
              className="group p-3 rounded-full border border-gray-700 hover:border-blue-400 text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:shadow-lg bg-gray-900/50 backdrop-blur-sm"
              aria-label="Email"
            >
              <Mail size={20} className="group-hover:animate-pulse" />
            </a>
            <a
              href="https://github.com/prashant-thakur-dev"
              className="group p-3 rounded-full border border-gray-700 hover:border-blue-400 text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:shadow-lg bg-gray-900/50 backdrop-blur-sm"
              aria-label="GitHub"
            >
              <Github size={20} className="group-hover:animate-pulse" />
            </a>
            <a
              href="https://www.linkedin.com/in/prashant00kumar/"
              className="group p-3 rounded-full border border-gray-700 hover:border-blue-400 text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:shadow-lg bg-gray-900/50 backdrop-blur-sm"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="group-hover:animate-pulse" />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;