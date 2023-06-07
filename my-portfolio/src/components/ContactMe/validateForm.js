export const validateForm = (form) => {
    const { email } = form.elements;
    const errors = {};
    
    if (!/\S+@\S+\.\S+/.test(email.value)) {
      errors.email = "Email is invalid";
    }

    return errors;
  };