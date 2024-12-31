import React, { useState, useEffect } from 'react';
import { FiMail, FiCheck } from 'react-icons/fi';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');
  const [subscriptionService, setSubscriptionService] = useState(null);

  useEffect(() => {
    // Import subscription service only on client side
    import('../services/subscriptionService').then(module => {
      setSubscriptionService(module.subscriptionService);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !subscriptionService) return;

    setStatus('loading');
    setMessage('');

    try {
      const response = await subscriptionService.addSubscriber(email);
      
      if (response.success) {
        setStatus('success');
        setMessage(response.message);
        setEmail('');
      } else {
        setStatus('error');
        setMessage(response.message);
      }
    } catch (error) {
      setStatus('error');
      setMessage('There was an error. Please try again.');
    }

    // Reset status after success
    if (status === 'success') {
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 3000);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="mt-4 sm:flex sm:max-w-md">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            {status === 'success' ? (
              <FiCheck className="text-green-500 w-5 h-5" />
            ) : (
              <FiMail className="text-gray-400 w-5 h-5" />
            )}
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`block w-full rounded-md py-2 pl-10 pr-3 text-sm 
              ${status === 'success' 
                ? 'border-green-500 focus:border-green-500 focus:ring-green-500' 
                : 'border-gray-300 focus:border-[#1d8f92] focus:ring-[#1d8f92]'
              } placeholder-gray-400`}
            placeholder="Enter your email"
            disabled={status === 'loading'}
          />
        </div>
        <div className="mt-3 sm:mt-0 sm:ml-3">
          <button
            type="submit"
            disabled={status === 'loading' || !email}
            className={`block w-full rounded-md py-2 px-4 text-sm font-medium text-white 
              ${status === 'loading' 
                ? 'bg-gray-400 cursor-not-allowed'
                : status === 'success'
                ? 'bg-green-500 hover:bg-green-600'
                : 'bg-[#1d8f92] hover:bg-[#167275]'
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1d8f92]`}
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>
      </form>
      {message && (
        <p className={`mt-2 text-sm ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default NewsletterSubscription;
