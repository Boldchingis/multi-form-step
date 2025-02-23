"use client";
import { useState } from "react";
import { validateStepThree } from "@/app/utils/validate";

export function StepThree({ setCurrentStep, form, onChange, errors, setErrors, error }) {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
      onChange(e); 
    }
  };

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
            <div>
              Date of birth:
              <input
                type="date"
                className="w-[416px] h-[44px] rounded-[8px] border placeholder:italic placeholder-gray-200"
                id="DateOfBirth"
                name="DateOfBirth"
                value={form?.DateOfBirth}
                onChange={onChange}
              />
              {errors?.DateOfBirth && <span className="text-red-600">{errors.DateOfBirth}</span>}
            </div>
            <div className="flex flex-col mt-[12px]">
              <span>Profile:</span>
              <input
                type="file"
                id="file"
                className="hidden"
                onChange={handleImageChange}
              />
              <label
                htmlFor="file"
                className="w-[416px] h-[180px] rounded-md bg-[#7F7F800D] items-center justify-center text-black flex flex-col"
              >
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Profile preview"
                    className="w-[416px] h-[180px] object-cover"
                  />
                ) : (
                  <>
                    <img
                      className="w-[24px] h-[24px] font-[500] text-[14px]"
                      src="profile.png"
                      alt="Profile image"
                    />
                    <span>Add image</span>
                  </>
                )}
              </label>
              {errors?.profileImage && <span className="text-red-600">{errors.profileImage}</span>}
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-[16px] mt-auto mb-[32px] mr-[24px]">
          <button
            className="w-[120px] h-[44px] bg-[white] rounded-[6px] text-[black] border-[1px] border-[#CBD5E1]"
            onClick={() => setCurrentStep(2)}
          >
            Back
          </button>
          <button
            className="w-[280px] h-[44px] bg-[#202124] rounded-[6px] text-[white]"
            onClick={() => {
              const { isValid, newErrors } = validateStepThree(form);
              setErrors(newErrors);
              if (isValid) {
                setCurrentStep(4);
              }
            }}
          >
            Submit 3/3
          </button>
        </div>
      </main>
    </div>
  );
}
