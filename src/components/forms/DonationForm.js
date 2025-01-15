import React, { useState } from 'react';
import { FORM_TYPES } from '../../utils/forms';
import FormHandler from './FormHandler';

const DonationFormContent = ({ onSubmit, isSubmitting, errors, successMessage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    amount: '',
    frequency: 'one-time',
    donationType: 'individual',
    organization: '',
    message: '',
    anonymous: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const frequencies = [
    { value: 'one-time', label: 'One-time' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'quarterly', label: 'Quarterly' },
    { value: 'annually', label: 'Annually' }
  ];

  const suggestedAmounts = [
    { value: '50', label: '$50' },
    { value: '100', label: '$100' },
    { value: '250', label: '$250' },
    { value: '500', label: '$500' },
    { value: '1000', label: '$1,000' },
    { value: 'other', label: 'Other Amount' }
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

        {/* Donation Type */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Donation Type
          </label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="donationType"
                value="individual"
                checked={formData.donationType === 'individual'}
                onChange={handleChange}
                className="h-4 w-4 text-[#0B9A9E] border-gray-300 focus:ring-[#0B9A9E]"
              />
              <span className="ml-2 text-sm text-gray-700">Individual</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="donationType"
                value="organization"
                checked={formData.donationType === 'organization'}
                onChange={handleChange}
                className="h-4 w-4 text-[#0B9A9E] border-gray-300 focus:ring-[#0B9A9E]"
              />
              <span className="ml-2 text-sm text-gray-700">Organization</span>
            </label>
          </div>
        </div>

        {/* Donor Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              {formData.donationType === 'individual' ? 'Full Name' : 'Contact Person'} *
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
              placeholder="Enter your name"
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

          {/* Organization Name (if organization) */}
          {formData.donationType === 'organization' && (
            <div className="md:col-span-2">
              <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                Organization Name *
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#0B9A9E] focus:border-transparent ${
                  errors.organization ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter organization name"
                disabled={isSubmitting}
              />
              {errors.organization && (
                <p className="mt-1 text-sm text-red-600">{errors.organization}</p>
              )}
            </div>
          )}

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

          {/* Frequency Selection */}
          <div>
            <label htmlFor="frequency" className="block text-sm font-medium text-gray-700 mb-1">
              Donation Frequency
            </label>
            <select
              id="frequency"
              name="frequency"
              value={formData.frequency}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B9A9E] focus:border-transparent"
              disabled={isSubmitting}
            >
              {frequencies.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Amount Selection */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Donation Amount *
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {suggestedAmounts.map(({ value, label }) => (
              <label
                key={value}
                className={`
                  flex items-center justify-center px-4 py-2 border rounded-lg cursor-pointer
                  ${formData.amount === value
                    ? 'bg-[#0B9A9E] text-white border-[#0B9A9E]'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-[#0B9A9E]'
                  }
                `}
              >
                <input
                  type="radio"
                  name="amount"
                  value={value}
                  checked={formData.amount === value}
                  onChange={handleChange}
                  className="sr-only"
                  disabled={isSubmitting}
                />
                <span>{label}</span>
              </label>
            ))}
          </div>
          {formData.amount === 'other' && (
            <div>
              <label htmlFor="customAmount" className="sr-only">Custom Amount</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                  $
                </span>
                <input
                  type="number"
                  id="customAmount"
                  name="customAmount"
                  className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B9A9E] focus:border-transparent"
                  placeholder="Enter custom amount"
                  min="1"
                  step="1"
                  disabled={isSubmitting}
                />
              </div>
            </div>
          )}
          {errors.amount && (
            <p className="mt-1 text-sm text-red-600">{errors.amount}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B9A9E] focus:border-transparent"
            placeholder="Leave a message with your donation"
            disabled={isSubmitting}
          />
        </div>

        {/* Anonymous Option */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="anonymous"
            name="anonymous"
            checked={formData.anonymous}
            onChange={handleChange}
            className="h-4 w-4 text-[#0B9A9E] border-gray-300 rounded focus:ring-[#0B9A9E]"
            disabled={isSubmitting}
          />
          <label htmlFor="anonymous" className="ml-2 text-sm text-gray-700">
            Make this donation anonymous
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#0B9A9E] text-white py-3 px-4 rounded-lg hover:bg-[#0B9A9E]/90 transition-colors disabled:opacity-50"
        >
          {isSubmitting ? 'Processing...' : 'Proceed to Payment'}
        </button>

        <p className="text-sm text-gray-500 text-center">
          Your donation will be processed securely. You will receive a confirmation email with your donation details.
        </p>
      </form>
    </div>
  );
};

const DonationForm = () => {
  const handleSuccess = (result) => {
    console.log('Donation form submitted successfully:', result);
    // Add any additional success handling
  };

  const handleError = (error) => {
    console.error('Donation form submission failed:', error);
    // Add any additional error handling
  };

  return (
    <FormHandler
      formType={FORM_TYPES.DONATION}
      onSuccess={handleSuccess}
      onError={handleError}
    >
      <DonationFormContent />
    </FormHandler>
  );
};

export default DonationForm; 