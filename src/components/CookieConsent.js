// src/components/CookieConsent.js
import React, { useState } from 'react';
import CookieConcent from '../components/CookieConsent'; // Ensure to import the CSS file
import CookieStyles from '../Styles/CookieConsent.css'
import { FaTimes } from 'react-icons/fa'; // Importing a close icon from react-icons

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
  });

  const handleAcceptAll = () => {
    setIsVisible(false);
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
  };

  const handleSavePreferences = () => {
    setIsVisible(false);
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
  };

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setPreferences((prev) => ({ ...prev, [name]: checked }));
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  // Check if the user has already accepted or declined cookies
  React.useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent) {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`cookie-consent ${isVisible ? 'fade-in' : 'fade-out'}`}>
      <div className="cookie-consent-content">
        <button className="close-button" onClick={handleClose}>
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