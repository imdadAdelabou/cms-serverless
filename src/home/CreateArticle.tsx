import { useState } from "react";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import ArticleService from "../services/ArticleService";
import { Auth } from "@aws-amplify/auth";
import { Link, useHistory } from "react-router-dom";

function CreateArticle() {
  const history = useHistory();

  const [tag, setTag] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [isCreating, setIsCreating] = useState(false);

  async function handleSubmit(event: React.SyntheticEvent<Element, Event>) {
    event.preventDefault();

    if (isCreating) return;

    setIsCreating(true);

    try {
      const session = await Auth.currentSession();
      const idToken = session.getIdToken().getJwtToken();

      await ArticleService.create({
        title: title,
        text: content,
        tag: tags[0],
        id: ""
      }, idToken);

      history.push("/home");
    } catch (err) {
      console.error(err);
    }

    setIsCreating(false);
  }

  function addTag(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();

    setTags(tags => [...tags, tag]);
  }

  return (
    <form className="w-screen" onSubmit={handleSubmit}>
      <div className="px-60 mt-20 ">
        <CustomInput placeHolder="Title" typeInput="text" handleChange={setTitle} />
        <textarea
          placeholder="Content"
          className="w-full border border-[#000842] h-72 mb-8 p-4"
          onChange={(event) => setContent(event.target.value)}
        ></textarea>

        <div className="mb-4 flex gap-2">
          <input placeholder="Tags" className="bg-white w-full h-14 border border-[#000842] pl-3" onChange={(event) => setTag(event.target.value)} />
          <button className="block rounded-[14px] h-14 bg-[#217BF4] text-white w-1/4" onClick={addTag}>Add</button>
        </div>

        <div className="mb-8">
          {tags.map((tag, index) => <span key={`${index}`} className="mx-1">{tag}</span>)}
        </div>

        <CustomButton content="Submit" width="w-full" isActive={true} action={() => {}} />
        <Link className="block text-center text-blue-500 my-4" to="/home">Go back</Link>
      </div>
    </form>
  );
}

export default CreateArticle;