import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const form = useRef();
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación del campo de correo electrónico
    const emailValue = form.current.email.value;
    const isValidEmail = /\S+@\S+\.\S+/.test(emailValue);
    setEmailError(!isValidEmail);

    if (isValidEmail) {
      emailjs
        .sendForm(
          "service_jbee9ip",
          "template_fmlnryu",
          form.current,
          "Sq3tRPSy1kYJm0tS_"
        )
        .then((response) => {
          console.log("Email sent successfully!", response);
        })
        .catch((error) => {
          console.error("Error sending email:", error);
        });
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center mt-8">
      <h2 className="text-3xl font-bold">Contact Me</h2>
      <form ref={form} className="mt-6 w-72 sm:w-96" onSubmit={handleSubmit}>
        <label className="block mb-2" htmlFor="name">
          Name:
          <input
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            type="text"
            id="name"
            name="name"
            required
          />
        </label>
        <label className="block mb-2" htmlFor="email">
          Email:
          <input
            className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light ${
              emailError ? "border-red-500" : ""
            }`}
            type="email"
            id="email"
            name="email"
            required
          />
          {emailError && (
            <p className="text-red-500 text-sm mt-1">Invalid email address</p>
          )}
        </label>
        <label className="block mb-2" htmlFor="message">
          Message:
          <textarea
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            id="message"
            name="message"
            rows="4"
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