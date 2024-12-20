"use client";
import { useState } from "react";
import { StepOne } from "@/components/stepOne";
import { StepTwo } from "@/components/stepTwo";
import { StepThree } from "@/components/stepThree";
import { StepFour } from "@/components/stepFour";

const FormBody = ({
  currentStep,
  setCurrentStep,
  form,
  onChange,
  setErrors,
  errors,
}) => {
  if (currentStep === 1) {
    return (
      <StepOne
        setCurrentStep={setCurrentStep}
        form={form}
        onChange={onChange}
        setErrors={setErrors}
        errors={errors}
      />
    );
  }
  if (currentStep === 2) {
    return <StepTwo setCurrentStep={setCurrentStep} />;
  }
  if (currentStep === 3) {
    return <StepThree setCurrentStep={setCurrentStep} />;
  }
  if (currentStep === 4) {
    return <StepFour setCurrentStep={setCurrentStep} />;
  }
};

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    username: "",
  });

  const onChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  return (
    <div>
      <FormBody
        setCurrentStep={setCurrentStep}
        currentStep={currentStep}
        form={form}
        onChange={onChange}
        errors={errors}
        setErrors={setErrors}
      />
    </div>
  );
}
