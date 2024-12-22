export const validateStepOne = (form) => {
  let isValid = true;
  let newErrors = {
    firstName: "",
    lastName: "",
    username: "",
  };

  if (form.firstName === "") {
    isValid = false;
    newErrors.firstName = "Firstname is required!";
  } else if (!/^[A-Za-z]+$/.test(form.firstName)) {
    isValid = false;
    newErrors.firstName = "Firstname can only contain letters!";
  }

  if (form.lastName === "") {
    isValid = false;
    newErrors.lastName = "Lastname is required!";
  } else if (!/^[A-Za-z]+$/.test(form.lastName)) {
    isValid = false;
    newErrors.lastName = "Lastname can only contain letters!";
  }

  if (form.username === "") {
    isValid = false;
    newErrors.username = "Username is required!";
  }

  return { isValid, newErrors };
};

export const validateStepTwo = (form) => {
  let isValid = true;
  let newErrors = {
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  };

  if (form.email === "") {
    isValid = false;
    newErrors.email = "Email is required!";
  }

  if (form.phoneNumber === "") {
    isValid = false;
    newErrors.phoneNumber = "Phone number is required!";
  } else if (!/^\d+$/.test(form.phoneNumber)) {
    isValid = false;
    newErrors.phoneNumber = "Phone number must contain only numbers!";
  }

  if (form.password === "") {
    isValid = false;
    newErrors.password = "Password is required!";
  } else if (form.password.length < 8) {
    isValid = false;
    newErrors.password = "Password must be at least 8 characters!";
  }

 
  if (form.confirmPassword !== form.password) {
    isValid = false;
    newErrors.confirmPassword = "Passwords do not match!";
  }

  return { isValid, newErrors };
};

export const validateStepThree = (form) => {
  let isValid = true;
  let newErrors = {
    DateOfBirth: "",
    profileImage: "",
  };


  if (!form.DateOfBirth) {
    isValid = false;
    newErrors.DateOfBirth = "Date of Birth is required!";
  }


  if (!form.profileImage) {
    isValid = false;
    newErrors.profileImage = "Profile image is required!";
  }

  return { isValid, newErrors };
};
