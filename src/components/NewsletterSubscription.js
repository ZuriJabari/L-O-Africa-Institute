import React, { useState } from 'react';
import { FiMail, FiCheck, FiAlertCircle, FiArrowRight } from 'react-icons/fi';
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
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-5 py-4 pr-32 text-sm font-light text-white placeholder-white/60 bg-white/10 border rounded-full backdrop-blur-sm transition-all duration-500 focus:outline-none focus:bg-white/15
              ${successMessage 
                ? 'border-green-400 focus:border-green-400' 
                : errors.email || errors.submit
                ? 'border-red-400 focus:border-red-400'
                : 'border-white/20 focus:border-white/40'
              }`}
            placeholder="Your email address"
            disabled={isSubmitting}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className={`absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-500 group
              ${isSubmitting 
                ? 'bg-white/20 text-white/60 cursor-not-allowed'
                : successMessage
                ? 'bg-green-500 text-white hover:bg-green-600'
                : errors.submit
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'bg-[#F6911E] text-white hover:bg-white hover:text-[#F6911E]'
              }`}
          >
            {isSubmitting ? (
              'Sending...'
            ) : successMessage ? (
              <>
                <FiCheck className="w-4 h-4" />
                <span>Subscribed</span>
              </>
            ) : (
              <>
                <span>Subscribe</span>
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500" />
              </>
            )}
          </button>
        </div>
      </form>
      {(successMessage || errors.submit) && (
        <p 
          className={`mt-3 text-sm font-light ${
            successMessage 
              ? 'text-green-300' 
              : 'text-red-300'
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
