import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Chess Chat App',
      description: 'Interactive online chess game with integrated real-time chat functionality, built with React and modern web technologies.',
      tech: ['React', 'Vite', 'Tailwind CSS', 'Lucide React'],
      features: [
        'Real-time chess gameplay',
        'Integrated chat functionality',
        'Responsive modern UI',
        'Optimized performance with Vite'
      ],
      date: 'May 2025 – June 2025',
      link: '#'
    },
    {
      title: 'End-to-End Data Analytics Solution',
      description: 'Complete data analytics pipeline from data cleaning to visualization, delivering actionable business insights.',
      tech: ['Python', 'SQL', 'Power BI'],
      features: [
        'Advanced data cleaning with Python',
        'Complex SQL queries for insights',
        'Interactive Power BI dashboards',
        'Business strategy recommendations'
      ],
      date: 'January 2025 – February 2025',
      link: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <ExternalLink className="w-5 h-5 text-blue-400 hover:text-blue-300 cursor-pointer" />
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-blue-400 font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 text-sm">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-400 text-sm">{project.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;