import React, { useState } from 'react';
import { FiMail, FiCheck, FiAlertCircle } from 'react-icons/fi';
import { subscriptionService } from '../services/subscriptionService';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submission started');
    
    // Reset previous status
    setMessage('');
    setStatus('idle');

    // Validate email
    if (!email) {
      console.log('Email is empty');
      setStatus('error');
      setMessage('Please enter your email address.');
      return;
    }

    if (!validateEmail(email)) {
      console.log('Invalid email format:', email);
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    console.log('Attempting to subscribe:', email);

    try {
      const response = await subscriptionService.addSubscriber({
        email: email.trim(),
        type: 'newsletter',
        source: 'footer_subscription'
      });
      console.log('Subscription response:', response);
      
      if (response.success) {
        setStatus('success');
        setMessage(response.message);
        setEmail('');

        // Reset form after 3 seconds on success
        setTimeout(() => {
          setStatus('idle');
          setMessage('');
        }, 3000);
      } else {
        setStatus('error');
        setMessage(response.message || 'An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setStatus('error');
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="mt-4 sm:flex sm:max-w-md">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            {status === 'success' ? (
              <FiCheck className="text-green-500 w-5 h-5" />
            ) : status === 'error' ? (
              <FiAlertCircle className="text-red-500 w-5 h-5" />
            ) : (
              <FiMail className="text-gray-400 w-5 h-5" />
            )}
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === 'error') {
                setStatus('idle');
                setMessage('');
              }
            }}
            className={`block w-full rounded-md py-2 pl-10 pr-3 text-sm text-gray-900
              ${status === 'success' 
                ? 'border-green-500 focus:border-green-500 focus:ring-green-500' 
                : status === 'error'
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:border-[#1d8f92] focus:ring-[#1d8f92]'
              } placeholder-gray-400`}
            placeholder="Enter your email"
            disabled={status === 'loading'}
          />
        </div>
        <div className="mt-3 sm:mt-0 sm:ml-3">
          <button
            type="submit"
            disabled={status === 'loading'}
            className={`block w-full rounded-md py-2 px-4 text-sm font-medium text-white 
              ${status === 'loading' 
                ? 'bg-gray-400 cursor-not-allowed'
                : status === 'success'
                ? 'bg-green-500 hover:bg-green-600'
                : status === 'error'
                ? 'bg-red-500 hover:bg-red-600'
                : 'bg-[#1d8f92] hover:bg-[#167275]'
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1d8f92]
              transition-colors duration-200`}
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>
      </form>
      {message && (
        <p 
          className={`mt-2 text-sm ${
            status === 'success' 
              ? 'text-green-600' 
              : status === 'error' 
              ? 'text-red-600' 
              : 'text-gray-600'
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default NewsletterSubscription;
