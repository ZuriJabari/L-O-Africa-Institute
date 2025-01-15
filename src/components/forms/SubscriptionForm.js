import React, { useState } from 'react';
import { FORM_TYPES } from '../../utils/forms';
import FormHandler from './FormHandler';

const SubscriptionFormContent = ({ onSubmit, isSubmitting, errors, successMessage }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email });
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
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

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#0B9A9E] text-white py-2 px-4 rounded-lg hover:bg-[#0B9A9E]/90 transition-colors disabled:opacity-50"
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
    </div>
  );
};

const SubscriptionForm = () => {
  const handleSuccess = (result) => {
    console.log('Subscription successful:', result);
    // Add any additional success handling
  };

  const handleError = (error) => {
    console.error('Subscription failed:', error);
    // Add any additional error handling
  };

  return (
    <FormHandler
      formType={FORM_TYPES.SUBSCRIPTION}
      onSuccess={handleSuccess}
      onError={handleError}
    >
      <SubscriptionFormContent />
    </FormHandler>
  );
};

export default SubscriptionForm; 