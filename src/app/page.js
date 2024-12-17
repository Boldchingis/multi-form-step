"use client";
import { StepOne } from "@/components/StepOne";
import { StepTwo } from "@/components/StepTwo";
import { useState } from "react";

const FormBody = ({ currentStep, setCurrentStep }) => {
  if (currentStep === 1) {
    return <StepOne setCurrentStep={setCurrentStep} />;
  }
  if (currentStep === 2) {
    return <StepTwo setCurrentStep={setCurrentStep} />;
  }
};

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <div>
      <FormBody currentStep={currentStep} setCurrentStep={setCurrentStep} />
    </div>
  );
}
