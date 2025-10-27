import React, { useState } from 'react';
import { FiMail, FiArrowRight, FiUser, FiMapPin, FiCheck, FiChevronDown } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { subscriptionService, SUBSCRIPTION_TYPES } from '../services/subscriptionService';

const africanCountries = [
  "Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", 
  "Cameroon", "Cape Verde", "Central African Republic", "Chad", "Comoros", 
  "Congo", "Côte d'Ivoire", "DR Congo", "Djibouti", "Egypt", "Equatorial Guinea", 
  "Eritrea", "eSwatini", "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea", 
  "Guinea-Bissau", "Kenya", "Lesotho", "Liberia", "Libya", "Madagascar", 
  "Malawi", "Mali", "Mauritania", "Mauritius", "Morocco", "Mozambique", 
  "Namibia", "Niger", "Nigeria", "Rwanda", "São Tomé and Príncipe", "Senegal", 
  "Seychelles", "Sierra Leone", "Somalia", "South Africa", "South Sudan", 
  "Sudan", "Tanzania", "Togo", "Tunisia", "Uganda", "Zambia", "Zimbabwe"
].sort();

const features = [
  "Access to exclusive events and workshops",
  "Network with African thought leaders",
  "Mentorship opportunities",
  "Regular newsletter with insights",
  "Early access to programs"
];

const SubscriptionForm = ({ variant }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    interests: []
  });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    console.log('Form submission started');

    try {
      const response = await subscriptionService.addSubscriber({
        ...formData,
        type: SUBSCRIPTION_TYPES.MEMBERSHIP,
        source: 'join_movement_form',
        submissionDate: new Date().toISOString()
      });
      console.log('Form submission response:', response);

      if (response.success) {
        setSuccess(true);
        setMessage(response.message);
        setFormData({ name: '', email: '', country: '', interests: [] });
      } else {
        setSuccess(false);
        setMessage(response.message);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSuccess(false);
      setMessage('There was an error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Bare variant: only the form body, styled for light surfaces and wide layout
  if (variant === 'bare') {
    return (
      <div className="w-full">
        {success ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-14 h-14 bg-[#F6911E] rounded-full mx-auto flex items-center justify-center">
              <FiCheck className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-medium text-gray-900">{message}</h3>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-gray-800 text-sm font-medium pl-1">Full Name</label>
                <div className="relative">
                  <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full bg-white text-gray-900 pl-12 pr-5 py-4 rounded-2xl border border-gray-200 focus:border-gray-900 focus:ring-0 transition-all duration-200 placeholder:text-gray-400 text-base"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-gray-800 text-sm font-medium pl-1">Email Address</label>
                <div className="relative">
                  <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    className="w-full bg-white text-gray-900 pl-12 pr-5 py-4 rounded-2xl border border-gray-200 focus:border-gray-900 focus:ring-0 transition-all duration-200 placeholder:text-gray-400 text-base"
                    required
                  />
                </div>
              </div>

              {/* Country - spans full width on lg */}
              <div className="space-y-2 lg:col-span-2">
                <label htmlFor="country" className="text-gray-800 text-sm font-medium pl-1">Country</label>
                <div className="relative">
                  <FiMapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    style={{ WebkitAppearance: 'none', MozAppearance: 'none' }}
                    className="w-full bg-white text-gray-900 pl-12 pr-10 py-4 rounded-2xl border border-gray-200 focus:border-gray-900 focus:ring-0 transition-all duration-200 cursor-pointer text-base [&:not([value])]:text-gray-400"
                    required
                  >
                    <option value="" disabled>Select your country</option>
                    {africanCountries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                  <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {message && (
              <p className="text-sm text-gray-700 text-center pt-1">{message}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full lg:w-auto mt-2 bg-[#0B9A9E] hover:bg-[#0B9A9E]/90 text-white py-4 px-10 rounded-2xl font-medium text-base transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-t-2 border-r-2 border-white rounded-full animate-spin"></div>
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <span>Subscribe</span>
                  <FiArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    );
  }

  // Default variant: existing full-bleed gradient section
  return (
    <section className="relative w-full bg-gradient-to-br from-[#0B9A9E] via-[#0B9A9E]/90 to-[#0B9A9E]/80 py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="relative space-y-8 text-white">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-extrabold tracking-tight leading-tight"
            >
              Join the Movement<br/>
              <span className="text-[#F6911E]">Shape Africa's Future</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl leading-relaxed text-white/90"
            >
              Be part of a transformative community of emerging leaders, innovators, and change-makers dedicated to building a better Africa.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#F6911E] flex items-center justify-center">
                    <FiCheck className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-lg p-10 md:p-12 rounded-2xl">
              {success ? (
                <div className="text-center py-12 space-y-6">
                  <div className="w-16 h-16 bg-[#F6911E] rounded-full mx-auto flex items-center justify-center">
                    <FiCheck className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{message}</h3>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  {/* Name Input */}
                  <div className="space-y-4">
                    <label htmlFor="name" className="text-white/90 text-base font-medium pl-1">Full Name</label>
                    <div className="relative">
                      <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0B9A9E] w-6 h-6" />
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full bg-white/5 hover:bg-white/10 text-white pl-14 pr-5 py-4 md:py-5 rounded-2xl border-b-2 border-white/20 focus:border-[#F6911E] transition-all duration-300 placeholder:text-white/40 focus:outline-none text-xl"
                        required
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="space-y-4">
                    <label htmlFor="email" className="text-white/90 text-base font-medium pl-1">Email Address</label>
                    <div className="relative">
                      <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0B9A9E] w-6 h-6" />
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email address"
                        className="w-full bg-white/5 hover:bg-white/10 text-white pl-14 pr-5 py-4 md:py-5 rounded-2xl border-b-2 border-white/20 focus:border-[#F6911E] transition-all duration-300 placeholder:text-white/40 focus:outline-none text-xl"
                        required
                      />
                    </div>
                  </div>

                  {/* Country Input */}
                  <div className="space-y-4">
                    <label htmlFor="country" className="text-white/90 text-base font-medium pl-1">Country</label>
                    <div className="relative">
                      <FiMapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0B9A9E] w-6 h-6" />
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        style={{ WebkitAppearance: 'none', MozAppearance: 'none' }}
                        className="w-full bg-white/5 hover:bg-white/10 text-white pl-14 pr-12 py-4 md:py-5 rounded-2xl border-b-2 border-white/20 focus:border-[#F6911E] transition-all duration-300 cursor-pointer focus:outline-none text-xl [&:not([value])]:text-white/40"
                        required
                      >
                        <option value="" disabled>Select your country</option>
                        {africanCountries.map(country => (
                          <option key={country} value={country} className="text-gray-800 bg-[#0B9A9E]">{country}</option>
                        ))}
                      </select>
                      <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-white/40 pointer-events-none" />
                    </div>
                  </div>

                  {message && (
                    <p className="text-sm text-white/90 text-center pt-2">{message}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-4 bg-gradient-to-r from-[#F6911E] to-[#F6911E]/90 text-white py-6 px-10 rounded-2xl font-medium text-xl transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    {loading ? (
                      <div className="flex items-center space-x-2 relative z-10">
                        <div className="w-5 h-5 border-t-2 border-r-2 border-white rounded-full animate-spin"></div>
                        <span>Processing...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2 relative z-10">
                        <span>Join Now</span>
                        <FiArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionForm;
