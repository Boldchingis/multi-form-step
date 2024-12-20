export const validateStepOne = (form) => {
  let isValid = true;
  let newErrors = {
    firstName: "",
    lastName: "",
    username: "",
  };

  if (form.firstName === "") {
    isValid = false;
    newErrors.firstName = "firstname aa hiigerei!";
  }
  if (form.lastName === "") {
    isValid = false;
    newErrors.lastName = "lastname aa hiigerei!";
  }
  if (form.username === "") {
    isValid = false;
    newErrors.username = "hoch neree hiigerei!";
  }

  return { isValid, newErrors };
};
