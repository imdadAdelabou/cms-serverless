interface inputType {
  typeInput: string;
  placeHolder: string;
  handleChange: (value: string) => void;
}

function CustomInput({
  typeInput,
  placeHolder,
  handleChange,
}: inputType) {
  return (
    <div>
      <input
        type={typeInput}
        placeholder={placeHolder}
        onChange={(event) => handleChange(event.target.value)}
        className="bg-white w-full h-14 border border-[#000842] pl-3 mb-8"
      />
    </div>
  );
}

export default CustomInput;