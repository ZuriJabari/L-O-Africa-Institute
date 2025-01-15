import React, { useState } from 'react';
import { FORM_TYPES } from '../../utils/forms';
import FormHandler from './FormHandler';

const JoinFormContent = ({ onSubmit, isSubmitting, errors, successMessage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    role: '',
    reason: '',
    interests: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, value]
        : prev.interests.filter(interest => interest !== value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const interests = [
    'Leadership Development',
    'Policy & Governance',
    'Innovation & Technology',
    'Social Impact',
    'Youth Empowerment'
  ];

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {successMessage && (
          <div className="bg-green-50 text-green-800 rounded-lg p-4">
            {successMessage}
          </div>
        )}

        {errors.submit && (
          <div className="bg-red-50 text-red-800 rounded-lg p-4">
            {errors.submit}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#0B9A9E] focus:border-transparent ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your full name"
              disabled={isSubmitting}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#0B9A9E] focus:border-transparent ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your email"
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B9A9E] focus:border-transparent"
              placeholder="Enter your phone number"
              disabled={isSubmitting}
            />
          </div>

          {/* Organization Field */}
          <div>
            <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
              Organization
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B9A9E] focus:border-transparent"
              placeholder="Enter your organization"
              disabled={isSubmitting}
            />
          </div>

          {/* Role Field */}
          <div className="md:col-span-2">
            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
              Current Role
            </label>
            <input
              type="text"
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B9A9E] focus:border-transparent"
              placeholder="Enter your current role"
              disabled={isSubmitting}
            />
          </div>
        </div>

        {/* Interests Section */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Areas of Interest
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {interests.map((interest) => (
              <div key={interest} className="flex items-center">
                <input
                  type="checkbox"
                  id={interest}
                  name="interests"
                  value={interest}
                  checked={formData.interests.includes(interest)}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-[#0B9A9E] border-gray-300 rounded focus:ring-[#0B9A9E]"
                  disabled={isSubmitting}
                />
                <label htmlFor={interest} className="ml-2 text-sm text-gray-700">
                  {interest}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Reason Field */}
        <div>
          <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
            Why do you want to join? *
          </label>
          <textarea
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            rows={4}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#0B9A9E] focus:border-transparent ${
              errors.reason ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Tell us why you want to join and what you hope to achieve"
            disabled={isSubmitting}
          />
          {errors.reason && (
            <p className="mt-1 text-sm text-red-600">{errors.reason}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#0B9A9E] text-white py-3 px-4 rounded-lg hover:bg-[#0B9A9E]/90 transition-colors disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </button>
      </form>
    </div>
  );
};

const JoinForm = () => {
  const handleSuccess = (result) => {
    console.log('Join form submitted successfully:', result);
    // Add any additional success handling
  };

  const handleError = (error) => {
    console.error('Join form submission failed:', error);
    // Add any additional error handling
  };

  return (
    <FormHandler
      formType={FORM_TYPES.JOIN}
      onSuccess={handleSuccess}
      onError={handleError}
    >
      <JoinFormContent />
    </FormHandler>
  );
};

export default JoinForm; 