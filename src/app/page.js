"use client";
import Image from "next/image";
import { StepOne } from "@/components/stepOne";
import { StepTwo } from "@/components/stepTwo";
import { StepThree } from "@/components/stepThree";
import { StepFour } from "@/components/stepFour";
import { useState } from "react";

const FormBody = ({ currentStep, setCurrentStep }) => {
  if (currentStep === 1) {
    return <StepOne setCurrentStep={setCurrentStep} />;
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
  });

  return (
    <div className="">
      <FormBody setCurrentStep={setCurrentStep} currentStep={currentStep} />
    </div>
  );
}
