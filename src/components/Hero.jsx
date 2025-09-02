import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ['Full Stack Developer', 'Java Developer', 'Problem Solver'];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm <span className="text-blue-400">Prashant</span>
          </h1>
          <div className="text-2xl md:text-3xl text-gray-300 mb-8 h-12">
            <span className="text-blue-400">{text}</span>
            <span className="animate-pulse">|</span>
          </div>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Passionate about creating efficient, scalable solutions and continuously learning new technologies.
            Ready to contribute to innovative development teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToAbout}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Learn More About Me
            </button>
            <a
              href="mailto:prashantthakur.dev@gmail.com"
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <ChevronDown size={24} className="text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;