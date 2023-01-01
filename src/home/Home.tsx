import { useEffect, useState } from "react";
import ArticleCard from "../components/ArticleCard";
import ArticleService from "../services/ArticleService";
import { Auth } from "@aws-amplify/auth";
import { Article } from "../helpers/constant";
import { Link, useHistory } from "react-router-dom";
import CustomButton from "../components/CustomButton";

function TagSearchBar({
  handleInput
}: {
  handleInput: (value: string) => void;
}) {
  return (
    <input
      placeholder="Search by tag"
      className="bg-white w-full h-14 border border-[#000842] pl-3"
      onChange={(event) => handleInput(event.target.value)}
    />
  );
}

function SeeMore(props: Article & { handleClick: () => void; }) {
  return (
    <div className="w-screen">
      <div className="mx-auto w-1/3 mt-10">
        <h2 className="font-bold text-xl mt-4">{props.title}</h2>
        <h3 className="font-bold text-lg mb-2">{props.tag}</h3>
        <p className="mb-6">
          {props.text}
        </p>
        <CustomButton width="w-full" isActive={true} content="Go back" action={props.handleClick} />
      </div>
    </div>
  );
}

function Home() {
  const history = useHistory();

  const [tag, setTag] = useState("");
  const [article, setArticle] = useState<Article>();
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const session = await Auth.currentSession();
        const idToken = session.getIdToken().getJwtToken();
        const articles = await ArticleService.getAll(idToken);

        setArticles(articles);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  function handleClick() {
    history.push("/create-article");
  }

  function filterArticles() {
    const transformedTag = new RegExp(tag.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));

    if (tag === "")
      return articles;
    return articles.filter(article =>
      article.tag.toLowerCase().match(transformedTag) !== null);
  }

  if (article) {
    return <SeeMore {...article} handleClick={() => setArticle(undefined)} />;
  }

  return (
    <div className="w-screen flex justify-center items-center mt-10">
      <div className="w-full">
        <div className="w-1/3 flex gap-4">
          <TagSearchBar handleInput={setTag} />
          <button className="block rounded-[14px] h-14 bg-[#217BF4] text-white w-1/2">Search</button>
        </div>

        <div className="w-1/3 mx-auto my-4">
          <CustomButton content="Create new article" isActive={true} width="w-full" action={handleClick} />
        </div>

        <div className="grid grid-cols-3 mt-20">
          {filterArticles().map(article =>
            <ArticleCard key={article.id} {...article} handleClick={() => setArticle(article)} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;