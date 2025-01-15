import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import db from '../firebaseConfig';

export const SUBSCRIPTION_TYPES = {
  NEWSLETTER: 'newsletter',
  MEMBERSHIP: 'membership'
};

class SubscriptionService {
  async addSubscriber(data) {
    if (!db) {
      console.error('Firestore is not initialized');
      return {
        success: false,
        message: 'Service is temporarily unavailable. Please try again later.'
      };
    }

    try {
      // Basic validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!data.email || !emailRegex.test(data.email)) {
        console.log('Invalid email format:', data.email);
        return {
          success: false,
          message: 'Please enter a valid email address.'
        };
      }

      // Normalize email
      const normalizedEmail = data.email.toLowerCase().trim();
      console.log('Attempting to subscribe:', { email: normalizedEmail, type: data.type });

      // Determine collection based on subscription type
      const collectionName = data.type === SUBSCRIPTION_TYPES.MEMBERSHIP ? 'join_requests' : 'newsletter_subscribers';
      const subscribersRef = collection(db, collectionName);

      // Check if email already exists
      const q = query(subscribersRef, where('email', '==', normalizedEmail));
      
      try {
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          console.log('Email already exists:', normalizedEmail);
          return {
            success: false,
            message: 'This email is already registered with us.'
          };
        }
      } catch (queryError) {
        console.error('Error checking existing email:', queryError);
        throw queryError;
      }

      // Prepare subscriber data
      const subscriber = {
        email: normalizedEmail,
        submissionDate: new Date().toISOString(),
        status: 'pending',
        ...data
      };

      console.log('Adding new subscriber:', subscriber);
      const docRef = await addDoc(subscribersRef, subscriber);
      console.log('Successfully added subscriber with ID:', docRef.id);
      
      const successMessage = data.type === SUBSCRIPTION_TYPES.MEMBERSHIP 
        ? 'Thank you for joining! We will review your application and get back to you soon.'
        : 'Thank you for subscribing to our newsletter!';

      return {
        success: true,
        message: successMessage
      };
    } catch (error) {
      console.error('Subscription error:', error);
      
      // Provide more specific error messages
      if (error.code === 'permission-denied') {
        return {
          success: false,
          message: 'Unable to process your request at this time. Please try again later.'
        };
      }
      
      if (error.code === 'unavailable') {
        return {
          success: false,
          message: 'Service is temporarily unavailable. Please try again later.'
        };
      }

      return {
        success: false,
        message: 'An error occurred while processing your request. Please try again later.'
      };
    }
  }
}

export const subscriptionService = new SubscriptionService();
