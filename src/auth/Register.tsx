import { useState } from "react";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { Auth } from "@aws-amplify/auth";
import { Link, useHistory } from "react-router-dom";

function Register() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleSignUp(event: React.SyntheticEvent<Element, Event>) {
    event.preventDefault();

    if (password !== confirmPassword) {
      return;
    }

    try {
      await Auth.signUp({
        username: email,
        password: confirmPassword,
        attributes: {
          email,
          name,
          phone_number: phone,
        }
      });

      history.push("/confirmation");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <form className="w-screen h-screen flex" onSubmit={handleSignUp}>
      <div className="w-1/2 h-full flex justify-center items-center">
        <div className="w-3/4 ">
          <CustomInput typeInput="text" placeHolder="Name" handleChange={setName}></CustomInput>
          <CustomInput typeInput="email" placeHolder="E-mail" handleChange={setEmail}></CustomInput>
          <CustomInput typeInput="tel" placeHolder="Phone Number" handleChange={setPhone}></CustomInput>
          <CustomInput typeInput="password" placeHolder="Password" handleChange={setPassword}></CustomInput>
          <CustomInput typeInput="password" placeHolder="Confirm Password" handleChange={setConfirmPassword}></CustomInput>
          <CustomButton width="w-full" isActive={true} action={() => {}} content="Register"></CustomButton>
          <Link className="block text-blue-500 text-center my-4" to="/login">Go to login</Link>
        </div>
      </div>
      <div className="w-1/2 h-full bg-[#000842] rounded-2xl m-auto" >
        <div className="flex justify-center items-center h-full flex-col">
          <img src="src/assets/salyBg.png" />
          <h3 className="text-white text-5xl mt-28 text-start">Sign in to CMS</h3>
        </div>
      </div>
    </form>
  );
}

export default Register;