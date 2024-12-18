export function StepFour({ setCurrentStep }) {
  return (
    <div className="bg-gray-100 w-full h-screen flex justify-center items-center">
      <main className="w-[480px] h-[193px] rounded-[8px] bg-white flex flex-col gap-2 pl-[30px] pt-[20px]">
        <div>
          <img
            className="w-[60px] h-[60px]"
            src="logo-removebg.png"
            alt="Logo"
          />
        </div>
        <div className="flex flex-col gap-[8px]">
          <h2 className="text-[26px] font-semibold">You're all set🔥</h2>
          <p className="text-[#8E8E8E] text-[18px]">
            We have received your submission. Thank you!
          </p>
        </div>
      </main>
    </div>
  );
}
