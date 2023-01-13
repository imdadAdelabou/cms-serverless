import { useState } from "react";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { Auth } from "@aws-amplify/auth";
import { useHistory } from "react-router-dom";

function Confirmation() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  async function handleSubmit(event: React.SyntheticEvent<Element, Event>) {
    event.preventDefault();

    try {
      await Auth.confirmSignUp(email, code);
      history.push("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="w-screen h-screen flex" onSubmit={handleSubmit}>
      <div className="w-1/2 h-full flex justify-center items-center">
        <div className="w-3/4 ">
          <CustomInput typeInput="email" placeHolder="E-mail" handleChange={setEmail}></CustomInput>
          <CustomInput typeInput="text" placeHolder="Code" handleChange={setCode}></CustomInput>
          <CustomButton width="w-full" isActive={true} action={() => {}} content="Verify your account" ></CustomButton>
        </div>
      </div>
      <div className="w-1/2 h-full bg-[#000842] rounded-2xl m-auto" >
        <div className="flex justify-center items-center h-full flex-col">
          <img src="/assets/salyBg.png" />
          <h3 className="text-white text-5xl mt-28 text-start">Verify your account</h3>
        </div>
      </div>
    </form>
  );
};

export default Confirmation;