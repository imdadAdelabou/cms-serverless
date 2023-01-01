import { useEffect, useState } from "react";
import ArticleService from "../services/ArticleService";
import { Auth } from "@aws-amplify/auth";
import { Article } from "../helpers/constant";
import { useParams } from "react-router-dom";

function SeeMore() {
  const { id } = useParams();

  const [article, setArticle] = useState<Article>();

  useEffect(() => {
    (async () => {
      try {
        const session = await Auth.currentSession();
        const idToken = session.getIdToken().getJwtToken();
        const article = await ArticleService.get(id, idToken);

        setArticle(article);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <div className="px-40 mt-16">
      <h2 className="mt-6 font-bold text-3xl">First Title</h2>
      <p className="mt-6">
        {article?.text || ""}
      </p>
      <h3 className="font-bold text-lg mt-6">Tags</h3>
      {article?.tag || ""}
    </div>
  );
}

export default SeeMore;