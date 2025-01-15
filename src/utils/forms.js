import db from '../firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

// Form Types
export const FORM_TYPES = {
  SUBSCRIPTION: 'subscriptions',
  JOIN: 'join_requests',
  CONTACT: 'contact_messages',
  PARTNERSHIP: 'partnership_requests',
  DONATION: 'donation_inquiries',
  TOWNHALL: 'townhall_registrations'
};

// Form submission handler
export const submitFormToFirebase = async (formType, formData) => {
  if (!db) {
    console.error('Firestore is not initialized');
    return {
      success: false,
      message: 'Service is temporarily unavailable. Please try again later.'
    };
  }

  try {
    console.log(`Submitting ${formType} form:`, formData);

    // Add common fields
    const submissionData = {
      ...formData,
      submittedAt: serverTimestamp(),
      status: 'new',
      formType: formType
    };

    // Get the appropriate collection reference based on form type
    const collectionRef = collection(db, formType);
    
    // Add the document to Firestore
    const docRef = await addDoc(collectionRef, submissionData);
    console.log(`Successfully submitted ${formType} form with ID:`, docRef.id);
    
    return {
      success: true,
      id: docRef.id,
      message: getSuccessMessage(formType)
    };
  } catch (error) {
    console.error(`Error submitting ${formType} form:`, error);
    return {
      success: false,
      error: error.message,
      message: getErrorMessage(error)
    };
  }
};

// Success messages for different form types
const getSuccessMessage = (formType) => {
  switch (formType) {
    case FORM_TYPES.SUBSCRIPTION:
      return 'Thank you for subscribing to our newsletter!';
    case FORM_TYPES.JOIN:
      return 'Thank you for your interest in joining us!';
    case FORM_TYPES.CONTACT:
      return 'Thank you for your message. We will get back to you soon!';
    case FORM_TYPES.PARTNERSHIP:
      return 'Thank you for your interest in partnering with us!';
    case FORM_TYPES.DONATION:
      return 'Thank you for your generous support!';
    case FORM_TYPES.TOWNHALL:
      return 'Thank you for registering for the Town Hall!';
    default:
      return 'Form submitted successfully!';
  }
};

// Error messages based on error types
const getErrorMessage = (error) => {
  if (error.code === 'permission-denied') {
    return 'Unable to submit form. Please try again later.';
  }
  if (error.code === 'unavailable') {
    return 'Service is temporarily unavailable. Please try again later.';
  }
  return 'An error occurred while submitting the form. Please try again.';
};

// Form validation rules
export const validateForm = (formType, formData) => {
  const errors = {};

  // Common validation rules
  if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Form specific validation
  switch (formType) {
    case FORM_TYPES.SUBSCRIPTION:
      if (!formData.email) errors.email = 'Email is required';
      break;

    case FORM_TYPES.JOIN:
      if (!formData.name) errors.name = 'Name is required';
      if (!formData.email) errors.email = 'Email is required';
      if (!formData.reason) errors.reason = 'Please tell us why you want to join';
      break;

    case FORM_TYPES.CONTACT:
      if (!formData.name) errors.name = 'Name is required';
      if (!formData.email) errors.email = 'Email is required';
      if (!formData.message) errors.message = 'Message is required';
      break;

    case FORM_TYPES.PARTNERSHIP:
      if (!formData.organizationName) errors.organizationName = 'Organization name is required';
      if (!formData.email) errors.email = 'Email is required';
      if (!formData.partnershipType) errors.partnershipType = 'Please select partnership type';
      break;

    case FORM_TYPES.DONATION:
      if (!formData.name) errors.name = 'Name is required';
      if (!formData.email) errors.email = 'Email is required';
      if (!formData.amount) errors.amount = 'Please enter donation amount';
      break;

    case FORM_TYPES.TOWNHALL:
      if (!formData.name) errors.name = 'Name is required';
      if (!formData.email) errors.email = 'Email is required';
      if (!formData.organization) errors.organization = 'Organization is required';
      if (!formData.attendanceType) errors.attendanceType = 'Please select attendance type';
      break;

    default:
      break;
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}; 