import ArticleCard from "../components/ArticleCard";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";

function Home() {
  const content = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  return (
    <div className="w-screen flex justify-center items-center mt-10">
      <div className="w-full">
        <div className="w-1/3">
          <CustomInput typeInput="text" placeHolder="Rechercher par tags" ></CustomInput>
          <CustomButton content="Rechercher" isActive={true} action={() => console.log("okay")} width="w-1/2"></CustomButton>
        </div>

        <div className="grid grid-cols-3 mt-20">
          <ArticleCard urlImg="" content={content} title="First Title"></ArticleCard>
        </div>
      </div>
    </div>
  );
}

export default Home;