import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";

function Login() {
  return (
    <div className="w-screen h-screen flex">
      <div className="w-1/2 h-full flex justify-center items-center">

        <div className="w-3/4 ">
          <CustomInput typeInput="text" placeHolder="E-mail"></CustomInput>
          <CustomInput typeInput="password" placeHolder="Password"></CustomInput>
          <CustomButton width="w-full" isActive={true} action={() => console.log("lol")} content="Login" ></CustomButton>
        </div>
      </div>
      <div className="w-1/2 h-full bg-[#000842] rounded-2xl m-auto" >
        <div className="flex justify-center items-center h-full flex-col">
          <img src="src/assets/salyBg.png" />
          <h3 className="text-white text-5xl mt-28 text-start">Sign in to CMS</h3>
        </div>
      </div>
    </div>
  );
}

export default Login;