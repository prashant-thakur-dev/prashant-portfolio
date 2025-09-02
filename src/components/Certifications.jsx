import React from 'react';
import { Award, Calendar, Building, CheckCircle, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Web Development',
      provider: 'Internshala Trainings',
      year: '2024',
      description: 'Completed hands-on training covering HTML, CSS, JavaScript, and responsive design principles.',
      skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      credentialId: 'INT-WD-2024-001',
      status: 'Completed',
      link: '#'
    },
    {
      title: 'Introduction to Cybersecurity',
      provider: 'Cisco NetAcad',
      year: '2024',
      description: 'Gained foundational knowledge in cybersecurity concepts, threats, and defense strategies.',
      skills: ['Network Security', 'Threat Analysis', 'Security Protocols'],
      credentialId: 'CISCO-CS-2024-002',
      status: 'Completed',
      link: '#'
    },
    {
      title: 'Google Data Analytics Professional Certificate',
      provider: 'Coursera',
      year: '2024',
      description: 'Completed end-to-end data analytics training, including data cleaning, SQL, and dashboard creation.',
      skills: ['SQL', 'Python', 'Data Visualization', 'Statistical Analysis'],
      credentialId: 'GOOGLE-DA-2024-003',
      status: 'Completed',
      link: '#'
    },
    {
      title: 'AWS Cloud Practitioner',
      provider: 'Amazon Web Services',
      year: '2025',
      description: 'Foundational understanding of AWS cloud services, architecture, and best practices for cloud computing.',
      skills: ['Cloud Computing', 'AWS Services', 'Cloud Architecture'],
      credentialId: 'AWS-CP-2025-004',
      status: 'In Progress',
      link: '#'
    }
  ];

  return (
    <section id="certifications" className="min-h-screen bg-gray-800 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-full border border-gray-600 mb-6">
            <Award className="w-5 h-5 text-gray-400" />
            <span className="text-gray-300 font-medium">Achievements</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            Certifications & Awards
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Continuous learning and professional development across multiple domains
          </p>
        </div>
        
        {/* Certifications Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-gray-900 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
            >
              {/* Status Bar */}
              <div className={`h-1 ${cert.status === 'Completed' ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
              
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-700 p-3 rounded-xl group-hover:bg-gray-600 transition-colors duration-300">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-white group-hover:text-gray-100 transition-colors">
                          {cert.title}
                        </h3>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                          cert.status === 'Completed' 
                            ? 'bg-green-900 text-green-300 border border-green-700' 
                            : 'bg-yellow-900 text-yellow-300 border border-yellow-700'
                        }`}>
                          {cert.status}
                        </div>
                      </div>
                      <p className="text-gray-300 font-semibold text-lg">
                        {cert.provider}
                      </p>
                    </div>
                  </div>
                  
                  <a
                    href={cert.link}
                    className="flex items-center gap-1 text-gray-400 hover:text-gray-200 transition-colors p-2 hover:bg-gray-700 rounded-lg"
                    aria-label={`View ${cert.title} certificate`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-4 mb-6 text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{cert.year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4" />
                    <span className="text-sm font-medium">ID: {cert.credentialId}</span>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {cert.description}
                </p>

                {/* Skills Covered */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-200 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gray-400" />
                    Skills Covered
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
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

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gray-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-gray-900 rounded-xl p-6 text-center border border-gray-700">
            <div className="text-3xl font-bold text-white mb-2">4</div>
            <div className="text-gray-400 text-sm font-medium">Certifications</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 text-center border border-gray-700">
            <div className="text-3xl font-bold text-white mb-2">3</div>
            <div className="text-gray-400 text-sm font-medium">Completed</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 text-center border border-gray-700">
            <div className="text-3xl font-bold text-white mb-2">12+</div>
            <div className="text-gray-400 text-sm font-medium">Skills Gained</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 text-center border border-gray-700">
            <div className="text-3xl font-bold text-white mb-2">2024</div>
            <div className="text-gray-400 text-sm font-medium">Latest Year</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-gray-700 px-8 py-4 rounded-2xl border border-gray-600 hover:border-gray-500 transition-all duration-300 hover:shadow-lg">
            <span className="text-gray-300 font-medium">Explore my learning journey</span>
            <button className="px-6 py-2 bg-white text-gray-900 hover:bg-gray-100 rounded-lg font-medium hover:shadow-lg transition-all duration-200 hover:scale-105">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;