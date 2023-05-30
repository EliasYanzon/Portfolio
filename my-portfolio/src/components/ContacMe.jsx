import React, { useState } from 'react';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envía el formulario a tu correo electrónico aquí
    console.log('Formulario enviado:', formData);
    // Limpia los campos después de enviar el formulario
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-3xl font-bold">Contact Me</h2>
      <form className="mt-6 w-72 sm:w-96" onSubmit={handleSubmit}>
        <label className="block mb-2" htmlFor="name">
          Name:
          <input
            className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label className="block mb-2" htmlFor="email">
          Email:
          <input
            className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label className="block mb-2" htmlFor="phone">
          Phone:
          <input
            className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <label className="block mb-2" htmlFor="message">
          Message:
          <textarea
            className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <button
          className="px-4 py-2 mt-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactMe;