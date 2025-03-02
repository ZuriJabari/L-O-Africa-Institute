import React, { useState } from 'react';
import { FiMail, FiCheck, FiAlertCircle } from 'react-icons/fi';
import { FORM_TYPES } from '../utils/forms';
import FormHandler from './forms/FormHandler';

const NewsletterSubscriptionContent = ({ onSubmit, isSubmitting, errors, successMessage }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ 
      email: email.trim(),
      type: 'newsletter',
      source: 'footer_subscription'
    });
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="mt-4 sm:flex sm:max-w-md">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            {successMessage ? (
              <FiCheck className="text-green-500 w-5 h-5" />
            ) : errors.submit ? (
              <FiAlertCircle className="text-red-500 w-5 h-5" />
            ) : (
              <FiMail className="text-gray-400 w-5 h-5" />
            )}
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`block w-full rounded-md py-2 pl-10 pr-3 text-sm text-gray-900
              ${successMessage 
                ? 'border-green-500 focus:border-green-500 focus:ring-green-500' 
                : errors.email || errors.submit
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:border-[#1d8f92] focus:ring-[#1d8f92]'
              } placeholder-gray-400`}
            placeholder="Enter your email"
            disabled={isSubmitting}
          />
        </div>
        <div className="mt-3 sm:mt-0 sm:ml-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`block w-full rounded-md py-2 px-4 text-sm font-medium text-white 
              ${isSubmitting 
                ? 'bg-gray-400 cursor-not-allowed'
                : successMessage
                ? 'bg-green-500 hover:bg-green-600'
                : errors.submit
                ? 'bg-red-500 hover:bg-red-600'
                : 'bg-[#1d8f92] hover:bg-[#167275]'
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1d8f92]
              transition-colors duration-200`}
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>
      </form>
      {(successMessage || errors.submit) && (
        <p 
          className={`mt-2 text-sm ${
            successMessage 
              ? 'text-green-600' 
              : 'text-red-600'
          }`}
        >
          {successMessage || errors.submit}
        </p>
      )}
    </div>
  );
};

const NewsletterSubscription = () => {
  const handleSuccess = (result) => {
    console.log('Newsletter subscription successful:', result);
  };

  const handleError = (error) => {
    console.error('Newsletter subscription failed:', error);
  };

  return (
    <FormHandler
      formType={FORM_TYPES.SUBSCRIPTION}
      onSuccess={handleSuccess}
      onError={handleError}
    >
      <NewsletterSubscriptionContent />
    </FormHandler>
  );
};

export default NewsletterSubscription;
