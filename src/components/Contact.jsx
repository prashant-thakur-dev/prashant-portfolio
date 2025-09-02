import React, { useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Send, User, MessageSquare, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-white" />,
      title: 'Email',
      value: 'prashantthakur.dev@gmail.com',
      link: 'mailto:prashantthakur.dev@gmail.com',
      description: 'Drop me a line anytime'
    },
    {
      icon: <Phone className="w-6 h-6 text-white" />,
      title: 'Phone',
      value: '+91-8457922877',
      link: 'tel:+918457922877',
      description: 'Available Mon-Fri, 9AM-6PM IST'
    },
    {
      icon: <Linkedin className="w-6 h-6 text-white" />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/prashant00kumar',
      link: 'https://linkedin.com/in/prashant00kumar',
      description: 'Let\'s connect professionally'
    },
    {
      icon: <MapPin className="w-6 h-6 text-white" />,
      title: 'Location',
      value: 'Delhi, India',
      link: '#',
      description: 'Open to remote opportunities'
    }
  ];

  return (
    <section id="contact" className="min-h-screen bg-gray-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full border border-gray-700 mb-6">
            <MessageSquare className="w-5 h-5 text-gray-400" />
            <span className="text-gray-300 font-medium">Let's Connect</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities and collaborating on exciting projects.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
              <p className="text-gray-400 leading-relaxed">
                Feel free to reach out through any of these channels. I typically respond within 24 hours.
              </p>
            </div>

            {contactInfo.map((contact, index) => (
              <div
                key={index}
                className="group bg-gray-800 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="bg-gray-700 p-3 rounded-lg group-hover:bg-gray-600 transition-colors duration-300">
                        {contact.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold text-lg">{contact.title}</h4>
                        <p className="text-gray-300 font-medium">{contact.value}</p>
                        <p className="text-gray-500 text-sm mt-1">{contact.description}</p>
                      </div>
                    </div>
                    {contact.link !== '#' && (
                      <a
                        href={contact.link}
                        className="text-gray-400 hover:text-gray-200 transition-colors p-2 hover:bg-gray-700 rounded-lg"
                        target={contact.link.startsWith('http') ? '_blank' : '_self'}
                        rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Availability Notice */}
            <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 mt-8">
              <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Current Status
              </h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-300 text-sm">Available for new opportunities</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                  <span className="text-gray-400 text-sm">Open to freelance projects</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gray-800 rounded-2xl border border-gray-700 p-8 hover:border-gray-600 transition-all duration-300">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-gray-400">I'll get back to you as soon as possible.</p>
            </div>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-500/20 transition-all duration-200"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-500/20 transition-all duration-200"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 font-medium mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-500/20 transition-all duration-200"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 font-medium mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project or just say hello..."
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-500/20 resize-none transition-all duration-200"
                ></textarea>
              </div>
              
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full font-semibold py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                  isSubmitting 
                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                    : 'bg-white text-gray-900 hover:bg-gray-100 hover:shadow-lg hover:scale-105'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </div>

            {/* Quick Contact Options */}
            <div className="mt-8 pt-6 border-t border-gray-700">
              <p className="text-gray-400 text-sm mb-4">Prefer a quick chat?</p>
              <div className="flex gap-3">
                <a
                  href="mailto:prashantthakur.dev@gmail.com"
                  className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors text-sm font-medium hover:scale-105 duration-200"
                >
                  Quick Email
                </a>
                <a
                  href="https://linkedin.com/in/prashant00kumar"
                  className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors text-sm font-medium hover:scale-105 duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn Message
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Response Time Notice */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-gray-800 px-6 py-3 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-300 text-sm font-medium">
              Typically responds within 24 hours
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;