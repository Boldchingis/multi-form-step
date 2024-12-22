import { useState } from "react";
import { validateStepTwo } from "@/app/utils/validate";
import { FormInputs } from "./FormInputs";

export function StepTwo({ setCurrentStep, form, onChange, errors, setErrors }) {
  return (
    <div className="bg-gray-100 w-full h-screen flex justify-center items-center">
      <main className="w-[480px] h-[655px] rounded-[8px] bg-[#ffffff] flex flex-col gap-2 pl-[30px] pt-[20px]">
        <div>
          <img
            className="w-[60px] h-[60px]"
            src="logo-removebg.png"
            alt="Logo"
          />
        </div>
        <div className="flex flex-col gap-[8px]">
          <h2 className="text-[26px] leading-[31.47px] font-[600]">
            Join us! 😎
          </h2>
          <p className="text-[#8E8E8E] font-[400] text-[18px] leading-[21.78px]">
            Please provide all current information accurately
          </p>
        </div>
        <div className="flex flex-col gap-[12px] mt-[12px]">
          <div>
            Email:
            <FormInputs
              id="email"
              name="email"
              value={form?.email}
              onChange={onChange}
              error={errors?.email}
            />
          </div>
          <div>
            Phone number:
            <FormInputs
              id="phoneNumber"
              name="phoneNumber"
              value={form?.phoneNumber}
              onChange={onChange}
              error={errors?.phoneNumber}
            />
          </div>
          <div>
            Password:
            <FormInputs
              id="password"
              name="password"
              value={form?.password}
              onChange={onChange}
              error={errors?.password}
            />
          </div>
          <div>
            Confirm password:
            <FormInputs
              id="confirmPassword"
              name="confirmPassword"
              value={form?.confirmPassword}
              onChange={onChange}
              error={errors?.confirmPassword}
            />
          </div>
        </div>
        <div className="flex justify-center gap-[16px] mt-auto mb-[32px] mr-[24px]">
          <button
            className="w-[120px] h-[44px] bg-[white] rounded-[6px] text-[black] border-[1px] border-[#CBD5E1]"
            onClick={() => setCurrentStep(1)}
          >
            Back
          </button>
          <button
            className="w-[280px] h-[44px] bg-[#202124] rounded-[6px] text-[white]"
            onClick={() => {
              const { isValid, newErrors } = validateStepTwo(form);
              setErrors(newErrors);
              if (isValid) {
                setCurrentStep(3);
              }
            }}
          >
            Continue 2/3
          </button>
        </div>
      </main>
    </div>
  );
}
