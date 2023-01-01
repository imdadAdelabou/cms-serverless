interface inputType {
  typeInput: string;
  placeHolder: string;
}

function CustomInput(props: inputType) {
  return <div>
    <input type={props.typeInput} className="bg-white w-full h-14 border border-[#000842] pl-3 mb-8" placeholder={props.placeHolder} />
  </div>
}

export default CustomInput;