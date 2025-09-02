import React from 'react';
import { Code, Database, Globe, Award } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6" />,
      skills: ['Java (Core & Advanced)', 'C', 'C++', 'SQL', 'JavaScript']
    },
    {
      title: 'Java Technologies',
      icon: <Database className="w-6 h-6" />,
      skills: ['Spring Boot', 'Servlets', 'JSP', 'JDBC', 'Collections Framework', 'Multithreading']
    },
    {
      title: 'Web Technologies',
      icon: <Globe className="w-6 h-6" />,
      skills: ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript ES6+']
    },
    {
      title: 'Tools & Databases',
      icon: <Award className="w-6 h-6" />,
      skills: ['MySQL', 'PostgreSQL', 'Git', 'Maven', 'IntelliJ IDEA', 'Eclipse']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className="text-blue-400 mr-3">{category.icon}</div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-300 text-sm">
                    • {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;