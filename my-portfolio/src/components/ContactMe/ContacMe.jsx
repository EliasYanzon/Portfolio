import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { validateForm } from "./validateForm";

const ContactMe = () => {
  const form = useRef();
  const [errors, setErrors] = useState();


  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form.current))
    if(Object.keys(errors)=== 0) {
      emailjs
      .sendForm(
        "service_jbee9ip",
        "template_fmlnryu",
        form.current,
        "Sq3tRPSy1kYJm0tS_"
      )
      .then(
        (result) => {
          alert("e-mail sended")
          form.current.reset();
        },
        (error) => {
          alert("error")
          console.log(error)
        }
      );
    } else {
      console.log(errors)
    }
    
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-3xl font-bold">Contact Me</h2>
      <form ref={form} className="mt-6 w-72 sm:w-96" onSubmit={handleSubmit}>
        <label className="block mb-2" htmlFor="name">
          Name:
          <input
            className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            type="text"
            id="name"
            name="name"
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
