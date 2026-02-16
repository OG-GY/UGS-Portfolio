'use client';
import { useState, ChangeEvent, FormEvent } from "react";
import { Send, CheckCircle, XCircle, X } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Icon } from "@iconify/react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface Notification {
  type: 'success' | 'error';
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [notification, setNotification] = useState<Notification | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setNotification(null);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      );

      setNotification({
        type: 'success',
        message: 'Your message has been sent successfully!'
      });

      // Reset form on success
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

      // Auto-hide notification after 5 seconds
      setTimeout(() => {
        setNotification(null);
      }, 5000);

    } catch (error) {
      console.error("EmailJS error:", error);
      setNotification({
        type: 'error',
        message: 'Failed to send message. Please try again.'
      });

      // Auto-hide error notification after 5 seconds
      setTimeout(() => {
        setNotification(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const closeNotification = () => {
    setNotification(null);
  };

  return (
    <div className="w-full h-full">
      {/* Notification Bar */}
      {notification && (
        <div className={`
          flex items-center justify-between p-4 mb-6 rounded-lg border-l-4 
          ${notification.type === 'success'
            ? 'bg-green-500/10 border-green-500 text-green-600 dark:text-green-400'
            : 'bg-red-500/10 border-red-500 text-red-600 dark:text-red-400'
          }
          animate-in slide-in-from-top duration-300
        `}>
          <div className="flex items-center gap-3">
            {notification.type === 'success' ? (
              <CheckCircle className="h-5 w-5 text-green-500" />
            ) : (
              <XCircle className="h-5 w-5 text-red-500" />
            )}
            <span className="font-medium text-sm">{notification.message}</span>
          </div>
          <button
            onClick={closeNotification}
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-white/5 
              text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-1 
              focus:ring-red-500 focus:border-red-500 transition-all duration-200"
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-white/5 
              text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-1 
              focus:ring-red-500 focus:border-red-500 transition-all duration-200"
              required
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Subject <span className="text-red-500">*</span>
          </label>
          <input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="What's this about?"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-white/5 
            text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-1 
            focus:ring-red-500 focus:border-red-500 transition-all duration-200"
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us more about your inquiry..."
            className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-white/5 
            text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-1 
            focus:ring-red-500 focus:border-red-500 transition-all duration-200 min-h-[128px] resize-none"
            required
            disabled={isSubmitting}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-4 flex items-center justify-center gap-2 px-8 py-4 
          bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider
          rounded-xl transition-all active:scale-[0.98]
          disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? (
            <>
              <Icon icon="mdi:loading" className="animate-spin text-xl" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <Icon icon="mdi:send" className="text-lg" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
