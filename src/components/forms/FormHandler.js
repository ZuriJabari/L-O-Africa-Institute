import React, { useState } from 'react';
import { submitFormToFirebase, validateForm } from '../../utils/forms';

const FormHandler = ({ formType, onSuccess, onError, children }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (formData) => {
    setIsSubmitting(true);
    setErrors({});
    setSuccessMessage('');

    // Validate form
    const validation = validateForm(formType, formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      setIsSubmitting(false);
      return;
    }

    try {
      // Submit to Firebase
      const result = await submitFormToFirebase(formType, formData);
      
      if (result.success) {
        setSuccessMessage(result.message);
        if (onSuccess) onSuccess(result);
      } else {
        setErrors({ submit: result.message });
        if (onError) onError(result);
      }
    } catch (error) {
      setErrors({ submit: 'An unexpected error occurred' });
      if (onError) onError({ error });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Clone children with additional props
  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        onSubmit: handleSubmit,
        isSubmitting,
        errors,
        successMessage
      });
    }
    return child;
  });

  return <>{childrenWithProps}</>;
};

export default FormHandler; 