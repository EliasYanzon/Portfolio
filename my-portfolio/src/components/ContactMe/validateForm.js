export const validateForm = (form) => {
    const { name, email, phone, message } = form.elements;
    const errors = {};
  
    if (!name.value.trim()) {
      errors.name = "Name is required";
    }
  
    if (!email.value.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
      errors.email = "Email is invalid";
    }
  
    if (!phone.value.trim()) {
      errors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(phone.value)) {
      errors.phone = "Phone is invalid";
    }
  
    if (!message.value.trim()) {
      errors.message = "Message is required";
    }
  
    return errors;
  };