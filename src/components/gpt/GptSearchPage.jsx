import { BG_IMG } from "../../utils/constant";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearch from "./GptSearch";

const GptSearchPage = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute -z-10 inset-0 ">
        <img className="w-full h-full object-cover  " src={BG_IMG} alt="" />
      </div>
      <div className=" relative  bg-gradient-to-b from-black min-h-screen">
        <GptSearch />
        <GptMovieSuggestion />
      </div>
    </div>
  );
};

export default GptSearchPage;
