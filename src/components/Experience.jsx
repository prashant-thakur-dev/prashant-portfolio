import { Award, Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineering Virtual Experience Participant',
      company: 'Electronic Arts (Forage)',
      location: 'Remote',
      date: 'August 2025',
      type: 'Virtual Experience',
      achievements: [
        'Proposed a new gameplay feature for EA Sports College Football, drafting a detailed proposal reviewed by simulated stakeholders.',
        'Designed a class diagram and C++ header file, streamlining potential implementation by 15%.',
        'Patched a bug and optimized a data structure, improving retrieval speed by 25% in testing.'
      ],
      skills: ['C++', 'Game Development', 'Software Design', 'Problem Solving'],
      icon: 'briefcase'
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'TechCorp Solutions',
      location: 'Kota, IN',
      date: 'June 2024 - Sep 2024',
      type: 'Internship',
      achievements: [
        'Developed and deployed 3 responsive web applications using React and Node.js, serving 500+ active users.',
        'Collaborated with cross-functional teams to implement RESTful APIs, reducing data loading time by 40%.',
        'Participated in code reviews and agile development practices, contributing to 95% on-time project delivery.',
        'Built automated testing suites with Jest, improving code coverage from 60% to 85%.'
      ],
      skills: ['React', 'Node.js', 'JavaScript', 'MongoDB', 'REST APIs'],
      icon: 'award'
    }
  ];

  const getIcon = (iconType) => {
    switch (iconType) {
      case 'briefcase':
        return <Briefcase className="w-6 h-6 text-white" />;
      case 'award':
        return <Award className="w-6 h-6 text-white" />;
      default:
        return <Briefcase className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section id="experience" className="min-h-screen bg-gray-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full border border-gray-700 mb-6">
            <Briefcase className="w-5 h-5 text-gray-400" />
            <span className="text-gray-300 font-medium">Career Journey</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            Experience
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Building expertise through hands-on projects and professional development
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="group relative bg-gray-800 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
              >
                {/* Header Bar */}
                <div className="h-1 bg-gray-600"></div>
                
                <div className="p-8">
                  <div className="flex items-start space-x-6">
                    {/* Icon */}
                    <div className="bg-gray-700 p-4 rounded-xl group-hover:bg-gray-600 transition-colors duration-300 flex-shrink-0">
                      {getIcon(experience.icon)}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      {/* Header Info */}
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gray-100 transition-colors">
                            {experience.title}
                          </h3>
                          <p className="text-gray-300 font-semibold text-lg mb-2">
                            {experience.company}
                          </p>
                          <div className="flex flex-wrap items-center gap-4 text-gray-400">
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              <span className="text-sm">{experience.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span className="text-sm">{experience.date}</span>
                            </div>
                            <div className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs font-medium">
                              {experience.type}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-200 mb-4 flex items-center gap-2">
                          <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                          Key Achievements
                        </h4>
                        <div className="space-y-3">
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <div
                              key={achievementIndex}
                              className="flex items-start gap-3 text-gray-300 bg-gray-700/50 rounded-lg p-4 hover:bg-gray-700 transition-colors"
                            >
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm font-medium leading-relaxed">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Skills */}
                      <div>
                        <h4 className="font-semibold text-gray-200 mb-3">Technologies & Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1.5 bg-gray-700 text-gray-200 rounded-full text-sm font-medium border border-gray-600 hover:bg-gray-600 hover:scale-105 transition-all duration-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gray-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-gray-800 px-8 py-4 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-lg">
            <span className="text-gray-300 font-medium">Want to work together?</span>
            <button className="px-6 py-2 bg-white text-gray-900 hover:bg-gray-100 rounded-lg font-medium hover:shadow-lg transition-all duration-200 hover:scale-105">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;