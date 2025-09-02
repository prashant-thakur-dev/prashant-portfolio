import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-blue-400">
              Computer Science Graduate & Full Stack Developer
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I'm a motivated Computer Science graduate from Chandigarh University with a strong foundation 
              in Java programming and full-stack development. My journey in software development has equipped 
              me with expertise in object-oriented design, database management, and modern web technologies.
            </p>
            <p className="text-gray-300 leading-relaxed">
              With hands-on experience in building scalable applications and a passion for problem-solving, 
              I'm eager to contribute to innovative development teams and continuously grow as a developer.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-700 p-4 rounded-lg">
                <h4 className="text-blue-400 font-semibold mb-2">Education</h4>
                <p className="text-gray-300 text-sm">B.E. Computer Science</p>
                <p className="text-gray-400 text-xs">Chandigarh University</p>
                <p className="text-gray-400 text-xs">CGPA: 7.78/10 (2024)</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <h4 className="text-blue-400 font-semibold mb-2">Location</h4>
                <p className="text-gray-300 text-sm">Punjab, India</p>
                <p className="text-gray-400 text-xs">Available for Remote</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-700 p-8 rounded-xl">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400">2+</div>
                <div className="text-gray-300">Years Learning</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">5+</div>
                <div className="text-gray-300">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">3</div>
                <div className="text-gray-300">Certifications</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">100%</div>
                <div className="text-gray-300">Dedication</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;