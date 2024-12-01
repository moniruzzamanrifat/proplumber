import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Input } from './ui/Input';
import { TextArea } from './ui/TextArea';
import { Button } from './ui/Button';
import { useForm } from '../hooks/useForm';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export function Contact() {
  const {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useForm<ContactForm>({
    name: '',
    email: '',
    message: '',
  });

  const onSubmit = async (formData: ContactForm) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
            <p className="text-gray-600 mb-8">
              Need plumbing services? Get in touch with us for a free estimate or emergency service.
            </p>
            <div className="space-y-4">
              <ContactInfo icon={Phone} text="(555) 123-4567" />
              <ContactInfo icon={Mail} text="info@proplumb.com" />
              <ContactInfo icon={MapPin} text="123 Plumber Street, City, State 12345" />
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <Input
                label="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
                error={errors.name}
                placeholder="Your name"
              />
              <Input
                label="Email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                error={errors.email}
                placeholder="your.email@example.com"
              />
              <TextArea
                label="Message"
                name="message"
                value={values.message}
                onChange={handleChange}
                error={errors.message}
                rows={4}
                placeholder="How can we help you?"
              />
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <div className="flex items-center space-x-3">
      <Icon className="h-5 w-5 text-blue-600" />
      <span className="text-gray-600">{text}</span>
    </div>
  );
}