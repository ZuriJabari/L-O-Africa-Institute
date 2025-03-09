// src/components/CookieConsent.js
import React, { useState, useEffect } from 'react';
import '../Styles/CookieConsent.css';
import { FaTimes } from 'react-icons/fa'; // Importing a close icon from react-icons

const CookieConsent = () => {
  // Start with not visible and check localStorage in useEffect
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
  });

  // Handle first mount - check localStorage first before showing
  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Only show if consent not given previously
      setIsVisible(true);
    }
    setIsMounted(true);
  }, []);

  // Add transition effect for unmounting
  useEffect(() => {
    if (isAnimatingOut) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 500); // Match the transition time in CSS
      return () => clearTimeout(timer);
    }
  }, [isAnimatingOut]);

  const handleAcceptAll = () => {
    setPreferences({
      essential: true,
      analytics: true,
      marketing: true
    });
    handleDismiss();
  };

  const handleSavePreferences = () => {
    handleDismiss();
  };

  const handleDismiss = () => {
    // Start animation out
    setIsAnimatingOut(true);
    // Save to localStorage
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
  };

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setPreferences((prev) => ({ ...prev, [name]: checked }));
  };

  // If not mounted yet or not visible, don't render anything
  if (!isMounted || (!isVisible && !isAnimatingOut)) return null;

  return (
    <div className={`cookie-consent ${isAnimatingOut ? 'fade-out' : 'fade-in'}`}>
      <div className="cookie-consent-content">
        <button className="close-button" onClick={handleDismiss}>
          <FaTimes />
        </button>
        <h2 className="cookie-consent-title">We Value Your Privacy</h2>
        <p>
          LéO Africa Institute uses cookies to enhance your experience. You can choose to accept all cookies or customize your preferences below.
        </p>
        <div className="cookie-consent-options">
          <label>
            <input
              type="checkbox"
              name="essential"
              checked={preferences.essential}
              onChange={handleChange}
              disabled
            />
            Essential Cookies (Always Active)
          </label>
          <label>
            <input
              type="checkbox"
              name="analytics"
              checked={preferences.analytics}
              onChange={handleChange}
            />
            Analytics Cookies (Help us improve our site)
          </label>
          <label>
            <input
              type="checkbox"
              name="marketing"
              checked={preferences.marketing}
              onChange={handleChange}
            />
            Marketing Cookies (Personalized content/ads)
          </label>
        </div>
        <div className="cookie-consent-buttons">
          <button onClick={handleSavePreferences} className="cookie-consent-button save">
            Save Preferences
          </button>
          <button onClick={handleAcceptAll} className="cookie-consent-button accept">
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;