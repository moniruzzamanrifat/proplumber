import { useState, ChangeEvent, FormEvent } from 'react';

interface FormErrors {
  [key: string]: string;
}

export function useForm<T extends { [key: string]: any }>(initialValues: T) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    // Clear error when field is modified
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = (values: T): FormErrors => {
    const errors: FormErrors = {};
    
    Object.entries(values).forEach(([key, value]) => {
      if (!value && typeof value === 'string') {
        errors[key] = 'This field is required';
      }
      
      if (key === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          errors[key] = 'Invalid email address';
        }
      }
    });

    return errors;
  };

  const handleSubmit = async (
    onSubmit: (values: T) => Promise<void> | void
  ) => {
    return async (e: FormEvent) => {
      e.preventDefault();
      const validationErrors = validate(values);
      setErrors(validationErrors);

      if (Object.keys(validationErrors).length === 0) {
        setIsSubmitting(true);
        try {
          await onSubmit(values);
          // Reset form on successful submission
          setValues(initialValues);
        } catch (error) {
          console.error('Form submission error:', error);
        } finally {
          setIsSubmitting(false);
        }
      }
    };
  };

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    setErrors,
  };
}