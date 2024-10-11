import { BG_IMG } from "../utils/constant";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearch from "./GptSearch";

const GptSearchPage = () => {
  return (
    <div className="bg-gradient-to-b from-black w-full h-auto">
      <div className="-z-10 fixed ">
        <img className="w-full  " src={BG_IMG} alt="" />
      </div>
      <GptSearch />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearchPage;
