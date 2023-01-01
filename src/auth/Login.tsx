import { useState } from "react";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { Auth } from "@aws-amplify/auth";
import { Link, useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(event: React.SyntheticEvent<Element, Event>) {
    event.preventDefault();

    try {
      await Auth.signIn(email, password);
      history.push("/home");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <form className="w-screen h-screen flex" onSubmit={handleLogin}>
      <div className="w-1/2 h-full flex justify-center items-center">
        <div className="w-3/4 ">
          <CustomInput typeInput="email" placeHolder="E-mail" handleChange={setEmail}></CustomInput>
          <CustomInput typeInput="password" placeHolder="Password" handleChange={setPassword}></CustomInput>
          <CustomButton width="w-full" isActive={true} action={() => {}} content="Login" ></CustomButton>
          <Link className="block text-blue-500 text-center my-4" to="/register">Go to register</Link>
        </div>
      </div>
      <div className="w-1/2 h-full bg-[#000842] rounded-2xl m-auto" >
        <div className="flex justify-center items-center h-full flex-col">
          <img src="/assets/salyBg.png" />
          <h3 className="text-white text-5xl mt-28 text-start">Login to CMS</h3>
        </div>
      </div>
    </form>
  );
}

export default Login;