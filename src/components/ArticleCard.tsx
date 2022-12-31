import { Article } from "../helpers/constant";
import CustomButton from "./CustomButton";




function ArticleCard(props: Article) {

    return (<div>
         <div className="rounded-lg w-1/2">
                <img src="https://static.wikia.nocookie.net/boruto/images/5/54/Boruto_Uzumaki_1.png/revision/latest?cb=20220222163347" />
                <h2 className="font-bold text-lg mt-4">{props.title}</h2>
                <p className="mb-6">
                {props.content.substring(0, 250)}
                </p>
                <CustomButton content="Voir plus" isActive={true} action={() => console.log("Top") } width="w-[162px]"></CustomButton>
            </div>
    </div>);
}

export default ArticleCard;