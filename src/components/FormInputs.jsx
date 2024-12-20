export function FormInputs({ id, name, value, onChange, error }) {
  return (
    <div>
      <input
        id={id}
        name={name}
        type="text"
        value={value}
        onChange={onChange}
        className="w-[416px] h-[44px] rounded-[8px] border placeholder:italic placeholder-gray-200"
      />
      {error && <span className="text-red-600">{error}</span>}
    </div>
  );
}
