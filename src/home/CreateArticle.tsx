import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";

function CreateArticle() {
  return (
    <div className="w-screen">
      <div className="px-60 mt-20 ">
        <CustomInput placeHolder="Title" typeInput="text"></CustomInput>
        <textarea className="w-full border border-[#000842] h-72 mb-8 p-4" placeholder="content"></textarea>
        <input type="file" className="mb-8" />

        <div className="mb-8">
          <CustomInput placeHolder="Tags" typeInput="text" ></CustomInput>
          <CustomButton width="w-1/4" isActive={true} action={() => console.log("")} content="Add"></CustomButton>
        </div>

        <CustomButton content="Submit" width="w-full" isActive={true} action={() => console.log("")}></CustomButton>
      </div>
    </div>
  );
}

export default CreateArticle;