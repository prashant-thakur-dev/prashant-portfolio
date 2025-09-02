import React, { useState } from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities and collaborating on exciting projects.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 p-3 rounded-lg">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Email</h3>
                <p className="text-gray-300">prashantthakur.dev@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 p-3 rounded-lg">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Phone</h3>
                <p className="text-gray-300">+91-8457922877</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 p-3 rounded-lg">
                <Linkedin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">LinkedIn</h3>
                <p className="text-gray-300">linkedin.com/in/prashant00kumar</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
              />
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
              />
            </div>
            
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 resize-none"
              ></textarea>
            </div>
            
            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-300"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;