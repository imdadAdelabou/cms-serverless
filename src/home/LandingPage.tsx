import CustomButton from "../components/CustomButton";

import {useHistory, useLocation, } from "react-router-dom";


function LandingPage() {
   


    return (<div className="landing__div">
        
        <div className="flex justify-around px-20">
        <div className="self-center">
            <h1 className="text-6xl text-bold w-3/3 mb-10">The powerful Content Management System(CMS) for the moment</h1>
            <div className="flex gap-6">
           
            <CustomButton width="w-[162px]" content="Sign Up" isActive={true} action={() => { }}></CustomButton>
            <CustomButton width="w-[162px]" content="Log In" isActive={false} action={() => {}}></CustomButton>
            </div>
        </div>
        <img src="src/assets/Iamge.svg" className="m-0" />
        </div>
    </div>);
}

export default LandingPage;
