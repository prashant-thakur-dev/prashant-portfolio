import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 p-8 rounded-xl">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 p-3 rounded-lg">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Software Engineering Virtual Experience Participant
                    </h3>
                    <p className="text-blue-400 font-semibold">Electronic Arts (Forage)</p>
                  </div>
                  <span className="text-gray-400 text-sm mt-2 md:mt-0">August 2025</span>
                </div>
                
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Proposed a new gameplay feature for EA Sports College Football, drafting a detailed proposal reviewed by simulated stakeholders.
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Designed a class diagram and C++ header file, streamlining potential implementation by 15%.
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Patched a bug and optimized a data structure, improving retrieval speed by 25% in testing.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;