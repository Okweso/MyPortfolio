// src/components/Contacts.js

import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS

const Contacts = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_oknzrxj', 'template_135r77u', e.target, 'dUuLvpcvCyixRMyK8')
      .then(
        (result) => {
          setSuccessMessage('Your message has been sent successfully!');
          setFormData({ from_name: '', from_email: '', message: '' });
        },
        (error) => {
          setSuccessMessage('Something went wrong. Please try again.');
        }
      );
  };

  return (
    <section id="contact" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-600 mb-12 text-center">
          Contact Me
        </h2>
        <div className="md:flex md:justify-between">
          {/* Contact Information */}
          <div className="mb-10 md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800">Let's Connect</h3>
            <p className="text-gray-700 mt-4">
              Feel free to reach out if you have any questions or want to discuss a project!
            </p>
            <p className="text-gray-700 mt-4">
              <strong>Email:</strong> paulokweso7@gmail.com
            </p>
            <p className="text-gray-700 mt-2">
              <strong>Phone:</strong> +254717836655
            </p>
            <p className="text-gray-700 mt-2">
              <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/paul-okweso-94933a230/" className="text-blue-600">https://www.linkedin.com/in/paul-okweso-94933a230/</a>
            </p>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <div className="mb-6">
                <label htmlFor="from_name" className="block text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="from_email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="from_email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Send Message
              </button>
              {successMessage && (
                <p className="text-green-600 mt-4">{successMessage}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
