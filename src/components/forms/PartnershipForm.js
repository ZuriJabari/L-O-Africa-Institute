import React, { useState } from 'react';
import { FORM_TYPES } from '../../utils/forms';
import FormHandler from './FormHandler';

const PartnershipFormContent = ({ onSubmit, isSubmitting, errors, successMessage }) => {
  const [formData, setFormData] = useState({
    organizationName: '',
    website: '',
    contactName: '',
    email: '',
    phone: '',
    partnershipType: '',
    description: '',
    goals: '',
    timeline: '',
    resources: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      resources: checked 
        ? [...prev.resources, value]
        : prev.resources.filter(resource => resource !== value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const partnershipTypes = [
    'Strategic Partnership',
    'Program Sponsorship',
    'Knowledge Partnership',
    'Resource Partnership',
    'Implementation Partnership'
  ];

  const resourceOptions = [
    'Financial Support',
    'Technical Expertise',
    'Network Access',
    'Venue/Facilities',
    'Marketing Support',
    'Content/Curriculum',
    'Other Resources'
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

        {/* Organization Details */}
        <div className="space-y-6">
          <h3 className="text-lg font-medium text-gray-900">Organization Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Organization Name */}
            <div className="md:col-span-2">
              <label htmlFor="organizationName" className="block text-sm font-medium text-gray-700 mb-1">
                Organization Name *
              </label>
              <input
                type="text"
                id="organizationName"
                name="organizationName"
                value={formData.organizationName}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#0B9A9E] focus:border-transparent ${
                  errors.organizationName ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your organization name"
                disabled={isSubmitting}
              />
              {errors.organizationName && (
                <p className="mt-1 text-sm text-red-600">{errors.organizationName}</p>
              )}
            </div>

            {/* Website */}
            <div className="md:col-span-2">
              <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                Website
              </label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B9A9E] focus:border-transparent"
                placeholder="https://www.example.com"
                disabled={isSubmitting}
              />
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          <h3 className="text-lg font-medium text-gray-900">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Name */}
            <div>
              <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-1">
                Contact Person *
              </label>
              <input
                type="text"
                id="contactName"
                name="contactName"
                value={formData.contactName}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#0B9A9E] focus:border-transparent ${
                  errors.contactName ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter contact person's name"
                disabled={isSubmitting}
              />
              {errors.contactName && (
                <p className="mt-1 text-sm text-red-600">{errors.contactName}</p>
              )}
            </div>

            {/* Email */}
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
                placeholder="Enter email address"
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
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
                placeholder="Enter phone number"
                disabled={isSubmitting}
              />
            </div>

            {/* Partnership Type */}
            <div>
              <label htmlFor="partnershipType" className="block text-sm font-medium text-gray-700 mb-1">
                Partnership Type *
              </label>
              <select
                id="partnershipType"
                name="partnershipType"
                value={formData.partnershipType}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#0B9A9E] focus:border-transparent ${
                  errors.partnershipType ? 'border-red-500' : 'border-gray-300'
                }`}
                disabled={isSubmitting}
              >
                <option value="">Select partnership type</option>
                {partnershipTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {errors.partnershipType && (
                <p className="mt-1 text-sm text-red-600">{errors.partnershipType}</p>
              )}
            </div>
          </div>
        </div>

        {/* Partnership Details */}
        <div className="space-y-6">
          <h3 className="text-lg font-medium text-gray-900">Partnership Details</h3>
          
          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Partnership Description *
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#0B9A9E] focus:border-transparent ${
                errors.description ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Describe the proposed partnership and its objectives"
              disabled={isSubmitting}
            />
            {errors.description && (
              <p className="mt-1 text-sm text-red-600">{errors.description}</p>
            )}
          </div>

          {/* Goals */}
          <div>
            <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-1">
              Expected Outcomes
            </label>
            <textarea
              id="goals"
              name="goals"
              value={formData.goals}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B9A9E] focus:border-transparent"
              placeholder="What are the expected outcomes of this partnership?"
              disabled={isSubmitting}
            />
          </div>

          {/* Timeline */}
          <div>
            <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">
              Proposed Timeline
            </label>
            <input
              type="text"
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B9A9E] focus:border-transparent"
              placeholder="e.g., 6 months, 1 year, ongoing"
              disabled={isSubmitting}
            />
          </div>

          {/* Resources */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Available Resources
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {resourceOptions.map((resource) => (
                <div key={resource} className="flex items-center">
                  <input
                    type="checkbox"
                    id={resource}
                    name="resources"
                    value={resource}
                    checked={formData.resources.includes(resource)}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 text-[#0B9A9E] border-gray-300 rounded focus:ring-[#0B9A9E]"
                    disabled={isSubmitting}
                  />
                  <label htmlFor={resource} className="ml-2 text-sm text-gray-700">
                    {resource}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#0B9A9E] text-white py-3 px-4 rounded-lg hover:bg-[#0B9A9E]/90 transition-colors disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Partnership Proposal'}
        </button>
      </form>
    </div>
  );
};

const PartnershipForm = () => {
  const handleSuccess = (result) => {
    console.log('Partnership form submitted successfully:', result);
    // Add any additional success handling
  };

  const handleError = (error) => {
    console.error('Partnership form submission failed:', error);
    // Add any additional error handling
  };

  return (
    <FormHandler
      formType={FORM_TYPES.PARTNERSHIP}
      onSuccess={handleSuccess}
      onError={handleError}
    >
      <PartnershipFormContent />
    </FormHandler>
  );
};

export default PartnershipForm; 