"use client";
import { FormInputs } from "./FormInputs";
export function StepOne({ setCurrentStep, form, onChange }) {
  return (
    <div className="bg-gray-100 w-full h-screen flex justify-center items-center">
      <main className="w-[480px] h-[655px] rounded-[8px] bg-[#ffffff] flex flex-col gap-2 pl-[30px] pt-[20px]">
        <form method="" action={""}>
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
              Firstname:
              <FormInputs
                id="firstName"
                name="firstName"
                value={form?.firstName}
                onChange={onChange}
              />
            </div>
            <div>
              Lastname:
              <FormInputs
                id="lastName"
                name="lastName"
                value={form?.lastName}
                onChange={onChange}
              />
            </div>
            <div>
              Username:
              <FormInputs
                id="username"
                name="username"
                value={form?.username}
                onChange={onChange}
              />
            </div>
          </div>
        </form>
        <button
          className="w-[416px] h-[44px] bg-[#202124] rounded-[6px] mt-[auto] mb-[32px] text-[white]"
          onClick={() => {
            console.log(form);
            setCurrentStep(2);
          }}
        >
          Continue 1/3
        </button>
      </main>
    </div>
  );
}
