'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We'll get back to you soon.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-100 flex items-center justify-center px-4 py-16">
      <div className="bg-white shadow-xl rounded-xl p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">📬 Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Your Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="example@mail.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Your Message</label>
            <textarea
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Type your message here..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>

        {formData.name && (
          <p className="text-center mt-6 text-gray-600">
            👋 Hello, <span className="font-medium text-blue-700">{formData.name}</span>! Thanks for reaching out.
          </p>
        )}
      </div>
    </main>
  );
}
