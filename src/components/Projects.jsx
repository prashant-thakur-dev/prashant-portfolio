import React from 'react';
import { ExternalLink, Calendar, Code, Zap } from 'lucide-react';

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
      link: '#',
      gradient: 'bg-gray-300'
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
      link: '#',
      gradient: 'bg-gray-300'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full border border-gray-700 mb-6">
            <Code className="w-5 h-5 text-gray-400" />
            <span className="text-gray-300 font-medium">Portfolio</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            Featured Projects
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Showcasing innovative solutions and technical expertise across various domains
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gray-300`}></div>
              
              <div className="p-8">
                {/* Project Title & Link */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    className="flex items-center gap-1 text-gray-500 hover:text-gray-700 transition-colors p-2 hover:bg-gray-50 rounded-lg"
                    aria-label={`View ${project.title} project`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="w-5 h-5 text-gray-500" />
                    <h4 className="font-semibold text-gray-700">Key Features</h4>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-3 text-gray-600 bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors"
                      >
                        <div className="w-2 h-2 bg-gray-400 rounded-full flex-shrink-0"></div>
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200 hover:shadow-md transition-all duration-200 hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 text-gray-500 border-t border-gray-100 pt-4">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{project.date}</span>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gray-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-gray-800 px-8 py-4 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-lg">
            <span className="text-gray-300 font-medium">Interested in collaborating?</span>
            <button className="px-6 py-2 bg-white text-gray-900 hover:bg-gray-100 rounded-lg font-medium hover:shadow-lg transition-all duration-200 hover:scale-105">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;