import React from 'react';
import { GraduationCap, MapPin, Code, Trophy } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-blue-400"></div>
            <span className="text-blue-400 font-medium text-lg">Get To Know Me</span>
            <div className="w-8 h-0.5 bg-blue-400"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-blue-400">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate developer with a strong foundation in computer science and a drive for continuous learning
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-12">
            {/* Introduction */}
            <div className="space-y-8">
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Computer Science Graduate &
                <span className="text-blue-400 block">Full Stack Developer</span>
              </h3>
              
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  I'm a motivated Computer Science graduate from <span className="text-blue-400 font-semibold">Chandigarh University</span> with 
                  a strong foundation in Java programming and full-stack development. My journey in software development 
                  has equipped me with expertise in object-oriented design, database management, and modern web technologies.
                </p>
                
                <p>
                  With hands-on experience in building scalable applications and a passion for problem-solving, 
                  I'm eager to contribute to innovative development teams and continuously grow as a developer.
                </p>
              </div>
            </div>

            {/* Education & Location Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-8 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-500/10 rounded-full">
                    <GraduationCap size={24} className="text-blue-400" />
                  </div>
                  <h4 className="text-xl font-bold text-blue-400">Education</h4>
                </div>
                <div className="space-y-3">
                  <p className="text-white font-semibold text-lg">B.E. Computer Science</p>
                  <p className="text-gray-300">Chandigarh University</p>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400 font-semibold">CGPA:</span>
                    <span className="text-gray-300">7.78/10 (2024)</span>
                  </div>
                </div>
              </div>

              <div className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-8 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-500/10 rounded-full">
                    <MapPin size={24} className="text-blue-400" />
                  </div>
                  <h4 className="text-xl font-bold text-blue-400">Location</h4>
                </div>
                <div className="space-y-3">
                  <p className="text-white font-semibold text-lg">Punjab, India</p>
                  <p className="text-gray-300">Available for Remote Work</p>
                  <p className="text-blue-400 text-sm font-medium">Open to Relocate</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 p-12 rounded-3xl">
              <div className="text-center mb-12">
                <h4 className="text-2xl font-bold text-white mb-4">My Journey</h4>
                <p className="text-gray-400">Key milestones in my development career</p>
              </div>
              
              <div className="grid grid-cols-2 gap-10">
                <div className="text-center group">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/10 rounded-2xl mb-4 group-hover:bg-blue-500/20 transition-colors duration-300">
                      <Code size={28} className="text-blue-400" />
                    </div>
                    <div className="text-4xl font-bold text-blue-400 mb-2">2+</div>
                    <div className="text-gray-300 font-medium">Years Learning</div>
                  </div>
                </div>

                <div className="text-center group">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/10 rounded-2xl mb-4 group-hover:bg-blue-500/20 transition-colors duration-300">
                      <Trophy size={28} className="text-blue-400" />
                    </div>
                    <div className="text-4xl font-bold text-blue-400 mb-2">5+</div>
                    <div className="text-gray-300 font-medium">Projects Built</div>
                  </div>
                </div>

                <div className="text-center group">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/10 rounded-2xl mb-4 group-hover:bg-blue-500/20 transition-colors duration-300">
                      <GraduationCap size={28} className="text-blue-400" />
                    </div>
                    <div className="text-4xl font-bold text-blue-400 mb-2">3</div>
                    <div className="text-gray-300 font-medium">Certifications</div>
                  </div>
                </div>

                <div className="text-center group">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl mb-4 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300">
                      <span className="text-2xl">💯</span>
                    </div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">100%</div>
                    <div className="text-gray-300 font-medium">Dedication</div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-12 pt-8 border-t border-gray-700/50 text-center">
                <p className="text-gray-400 text-sm mb-4">Ready to collaborate?</p>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                >
                  Let's Connect
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;