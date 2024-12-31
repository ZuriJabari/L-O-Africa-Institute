import { collection, addDoc } from 'firebase/firestore';
import db from '../firebaseConfig';

class SubscriptionService {
  async addSubscriber(email, source = 'footer') {
    try {
      console.log('Starting subscription process for:', email);
      
      // Basic validation
      if (!email || !email.includes('@')) {
        return {
          success: false,
          message: 'Please enter a valid email address.'
        };
      }

      // Add new subscriber
      const subscriber = {
        email: email.toLowerCase().trim(),
        subscriptionDate: new Date().toISOString(),
        source: source,
        status: 'active'
      };

      const subscribersRef = collection(db, 'newsletter_subscribers');
      const docRef = await addDoc(subscribersRef, subscriber);
      
      console.log('Successfully added subscriber with ID:', docRef.id);
      return {
        success: true,
        message: 'Thank you for subscribing to our newsletter!'
      };
    } catch (error) {
      console.error('Subscription error:', error);
      return {
        success: false,
        message: 'Unable to connect to the subscription service. Please try again later.'
      };
    }
  }
}

export const subscriptionService = new SubscriptionService();
