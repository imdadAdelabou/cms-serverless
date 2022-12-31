import { Article } from "../helpers/constant";

function SeeMore() {

    return (<div className="px-40 mt-16">
        <img src="https://static.wikia.nocookie.net/boruto/images/5/54/Boruto_Uzumaki_1.png/revision/latest?cb=20220222163347" className="w-full h-60" />
        <h2 className="mt-6 font-bold text-3xl">First Title</h2>
        <p className="mt-6">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <h3 className="font-bold text-lg mt-6">Tags</h3>
    </div>);
}

export default SeeMore;