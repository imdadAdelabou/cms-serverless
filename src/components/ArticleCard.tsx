import { useHistory } from "react-router-dom";
import { Article } from "../helpers/constant";
import CustomButton from "./CustomButton";

function ArticleCard(props: Article & { handleClick: () => void; }) {
  const history = useHistory();

  return (
    <div className="my-2 w-full">
      <div className="rounded-lg w-1/2">
        <h2 className="font-bold text-xl mt-4">{props.title}</h2>
        <h3 className="font-bold text-lg mb-2">{props.tag}</h3>
        <p className="mb-6">
          {props.text.substring(0, 250)}
        </p>
        <CustomButton content="Voir plus" isActive={true} action={props.handleClick} width="w-[162px]"></CustomButton>
      </div>
    </div>
  );
}

export default ArticleCard;