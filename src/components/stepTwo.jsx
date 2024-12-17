export function StepTwo({ setCurrentStep }) {
  return (
    <div>
      <div onClick={() => setCurrentStep(1)}>Back</div>
      <div onClick={() => setCurrentStep(2)}>Next</div>
    </div>
  );
}
