export const validateForm = (form) => {
    const { email, phone } = form.elements;
    const errors = {};
    
    if (!/\S+@\S+\.\S+/.test(email.value)) {
      errors.email = "Email is invalid";
    }
  
    if (!/^\d{10}$/.test(phone.value)) {
      errors.phone = "Phone is invalid";
    }
  
    return errors;
  };