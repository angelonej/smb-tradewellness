import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock, CheckCircle, ExternalLink, Users } from 'lucide-react';
export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [focused, setFocused] = useState('');
  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate form submission
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        // Reset submission status after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };
  const handleFocus = field => {
    setFocused(field);
  };
  const handleBlur = () => {
    setFocused('');
  };
  return <section id="contact" className="py-20 px-4 bg-black text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -left-[10%] w-[50%] h-[50%] rounded-full bg-crossGold/5 blur-3xl"></div>
        <div className="absolute -bottom-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-steelBlue/5 blur-3xl"></div>
      </div>
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-block bg-crossGold/20 p-3 rounded-full mb-6 border border-crossGold/30">
            <Mail size={30} className="text-crossGold" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Get in Touch
          </h2>
          <p className="text-xl text-center max-w-3xl mx-auto text-gray-300">
            Have questions about Send Me Builders or want to get involved? Reach
            out to us and we'll be happy to connect with you.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="bg-charcoal/70 rounded-xl p-8 border border-white/10 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:border-white/20">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="bg-crossGold/20 p-2 rounded-full mr-3">
                <Send size={18} className="text-crossGold" />
              </span>
              Send Us a Message
            </h3>
            {isSubmitted ? <div className="flex flex-col items-center justify-center py-12 animate-fadeIn">
                <div className="bg-crossGold/20 w-20 h-20 rounded-full flex items-center justify-center mb-6 border border-crossGold/30">
                  <CheckCircle size={40} className="text-crossGold" />
                </div>
                <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                <p className="text-center text-gray-300 mb-4">
                  Thank you for reaching out. We'll get back to you as soon as
                  possible.
                </p>
              </div> : <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Name <span className="text-crossGold">*</span>
                  </label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} onFocus={() => handleFocus('name')} onBlur={handleBlur} className={`w-full bg-black/50 border ${errors.name ? 'border-red-500' : focused === 'name' ? 'border-crossGold' : 'border-white/20'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-crossGold/50 transition-all duration-200`} placeholder="John Doe" aria-required="true" aria-invalid={errors.name ? 'true' : 'false'} />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address <span className="text-crossGold">*</span>
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} onFocus={() => handleFocus('email')} onBlur={handleBlur} className={`w-full bg-black/50 border ${errors.email ? 'border-red-500' : focused === 'email' ? 'border-crossGold' : 'border-white/20'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-crossGold/50 transition-all duration-200`} placeholder="your@email.com" aria-required="true" aria-invalid={errors.email ? 'true' : 'false'} />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                    Phone Number (Optional)
                  </label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} onFocus={() => handleFocus('phone')} onBlur={handleBlur} className={`w-full bg-black/50 border ${focused === 'phone' ? 'border-crossGold' : 'border-white/20'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-crossGold/50 transition-all duration-200`} placeholder="(123) 456-7890" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Subject
                  </label>
                  <select id="subject" name="subject" value={formData.subject} onChange={handleChange} onFocus={() => handleFocus('subject')} onBlur={handleBlur} className={`w-full bg-black/50 border ${focused === 'subject' ? 'border-crossGold' : 'border-white/20'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-crossGold/50 transition-all duration-200 appearance-none`}>
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Mentor Program">Mentor Program</option>
                    <option value="FBO Partnership">FBO Partnership</option>
                    <option value="Youth Program">Youth Program</option>
                    <option value="Corporate Partnership">
                      Corporate Partnership
                    </option>
                    <option value="Donation Question">Donation Question</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Message <span className="text-crossGold">*</span>
                  </label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} onFocus={() => handleFocus('message')} onBlur={handleBlur} rows={5} className={`w-full bg-black/50 border ${errors.message ? 'border-red-500' : focused === 'message' ? 'border-crossGold' : 'border-white/20'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-crossGold/50 transition-all duration-200`} placeholder="How can we help you?" aria-required="true" aria-invalid={errors.message ? 'true' : 'false'}></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1">
                      {errors.message}
                    </p>}
                </div>
                <button type="submit" disabled={isSubmitting} className="bg-crossGold hover:bg-crossGold/90 text-black font-bold py-3 px-8 rounded-full flex items-center justify-center transition-all duration-300 w-full relative overflow-hidden group shadow-lg hover:shadow-xl">
                  <div className="absolute inset-0 w-0 bg-white/20 transition-all duration-300 group-hover:w-full"></div>
                  <div className="relative z-10 flex items-center">
                    {isSubmitting ? <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </> : <>
                        Send Message
                        <Send size={18} className="ml-2" />
                      </>}
                  </div>
                </button>
              </form>}
          </div>
          {/* Contact Information */}
          <div>
            <div className="bg-charcoal/70 rounded-xl p-8 border border-white/10 shadow-xl backdrop-blur-sm mb-8 transition-all duration-300 hover:shadow-2xl hover:border-white/20">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="bg-crossGold/20 p-2 rounded-full mr-3">
                  <MapPin size={18} className="text-crossGold" />
                </span>
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="bg-crossGold/10 p-3 rounded-full mr-4 group-hover:bg-crossGold/30 transition-all duration-300">
                    <Phone size={20} className="text-crossGold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1 group-hover:text-crossGold transition-colors duration-300">
                      Phone
                    </h4>
                    <p className="text-gray-300">TBD</p>
                    <p className="text-sm text-gray-400 mt-1">
                      Monday-Friday, 9am-5pm EST
                    </p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="bg-crossGold/10 p-3 rounded-full mr-4 group-hover:bg-crossGold/30 transition-all duration-300">
                    <Mail size={20} className="text-crossGold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1 group-hover:text-crossGold transition-colors duration-300">
                      Email
                    </h4>
                    <a href="mailto:info@sendmebuilders.org" className="text-gray-300 hover:text-crossGold transition-colors">
                      info@sendmebuilders.org
                    </a>
                    <p className="text-sm text-gray-400 mt-1">
                      We'll respond within 24-48 hours
                    </p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="bg-crossGold/10 p-3 rounded-full mr-4 group-hover:bg-crossGold/30 transition-all duration-300">
                    <MapPin size={20} className="text-crossGold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1 group-hover:text-crossGold transition-colors duration-300">
                      Main Office
                    </h4>
                    <p className="text-gray-300">TBD</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="bg-crossGold/10 p-3 rounded-full mr-4 group-hover:bg-crossGold/30 transition-all duration-300">
                    <Clock size={20} className="text-crossGold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1 group-hover:text-crossGold transition-colors duration-300">
                      Office Hours
                    </h4>
                    <p className="text-gray-300">
                      Monday - Friday: 9:00 AM - 5:00 PM
                      <br />
                      Saturday: By appointment
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-charcoal/70 rounded-xl p-8 border border-white/10 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:border-white/20">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="bg-crossGold/20 p-2 rounded-full mr-3">
                  <Users size={16} className="text-crossGold" />
                </span>
                Connect With Us
              </h3>
              <p className="text-gray-300 mb-6">
                Follow us on social media for updates, stories, and
                opportunities to get involved.
              </p>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-black/50 hover:bg-crossGold/90 hover:text-black p-3 rounded-full transition-all duration-300 transform hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-black/50 hover:bg-crossGold/90 hover:text-black p-3 rounded-full transition-all duration-300 transform hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="bg-black/50 hover:bg-crossGold/90 hover:text-black p-3 rounded-full transition-all duration-300 transform hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="bg-black/50 hover:bg-crossGold/90 hover:text-black p-3 rounded-full transition-all duration-300 transform hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="bg-black/50 hover:bg-crossGold/90 hover:text-black p-3 rounded-full transition-all duration-300 transform hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}