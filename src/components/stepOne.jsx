export function StepOne(setCurrentStep) {
  return (
    <div>
      <button onClick={() => setCurrentStep(2)}> Next </button>
    </div>
  );
}
