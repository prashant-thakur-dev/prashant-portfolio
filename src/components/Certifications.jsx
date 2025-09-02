import React from 'react';
import { Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Web Development',
      provider: 'Internshala Trainings',
      year: '2024',
      description: 'Completed hands-on training covering HTML, CSS, JavaScript, and responsive design principles.'
    },
    {
      title: 'Introduction to Cybersecurity',
      provider: 'Cisco NetAcad',
      year: '2024',
      description: 'Gained foundational knowledge in cybersecurity concepts, threats, and defense strategies.'
    },
    {
      title: 'Google Data Analytics Professional Certificate',
      provider: 'Coursera',
      year: '2024',
      description: 'Completed end-to-end data analytics training, including data cleaning, SQL, and dashboard creation.'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Certifications & Awards</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-blue-400 mr-3" />
                <span className="text-blue-400 font-semibold">{cert.year}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
              <p className="text-blue-400 font-semibold mb-4">{cert.provider}</p>
              <p className="text-gray-300 text-sm leading-relaxed">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;