import React from 'react';

const Navbar = ({ activeSection, isMenuOpen, setIsMenuOpen, isMobile = false }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👤' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'projects', label: 'Projects', icon: '💼' },
    { id: 'experience', label: 'Experience', icon: '🏆' },
    { id: 'contact', label: 'Contact', icon: '📧' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  if (isMobile) {
    // Mobile Navigation Content - Clean & Minimal
    return (
      <div className="space-y-2 p-4">
        {navItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`w-full text-left py-3 px-4 rounded-lg transition-all duration-300 ${
              activeSection === item.id 
                ? 'text-blue-400 bg-blue-500/10 border-l-2 border-blue-400' 
                : 'text-gray-300 hover:text-gray-100 hover:bg-gray-800/50'
            }`}
            style={{ 
              animationDelay: `${index * 50}ms`,
              animation: isMenuOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none'
            }}
          >
            <div className="flex items-center space-x-3">
              <span className="text-base opacity-80">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </div>
          </button>
        ))}
      </div>
    );
  }

  // Desktop Navigation - Clean & Minimal
  return (
    <nav className="hidden md:flex items-center space-x-1 bg-gray-900/80 backdrop-blur-sm rounded-full px-2 py-2 border border-gray-800/50">
      {navItems.map((item, index) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className={`relative px-4 py-2 rounded-full transition-all duration-300 ${
            activeSection === item.id 
              ? 'text-white bg-blue-600 shadow-sm' 
              : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/60'
          }`}
          style={{
            animation: `fadeIn 0.4s ease-out ${index * 80}ms both`
          }}
        >
          <div className="flex items-center space-x-2">
            <span className="text-sm opacity-90">{item.icon}</span>
            <span className="font-medium text-sm">{item.label}</span>
          </div>
        </button>
      ))}
      
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;