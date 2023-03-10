import CustomButton from "../components/CustomButton";
import { useHistory } from "react-router-dom";

function LandingPage() {
  const history = useHistory();

  function redirectTo(path: string) {
    history.push(path);
  }

  return (
    <div className="landing__div">
      <div className="flex justify-around px-20">
        <div className="self-center">
          <h1 className="text-6xl text-bold w-3/3 mb-10">The powerful Content Management System(CMS) for the moment</h1>
          <div className="flex gap-6">
            <CustomButton width="w-[162px]" content="Sign Up" isActive={true} action={() => redirectTo("/register")}></CustomButton>
            <CustomButton width="w-[162px]" content="Log In" isActive={false} action={() => redirectTo("/login")}></CustomButton>
          </div>
        </div>
        <img src="/assets/Iamge.svg" className="m-0" />
        </div>
    </div>);
}

export default LandingPage;
