import { useSelector } from "react-redux";
import { BG_IMG } from "../utils/constant";
import GptSearch from "./GptSearch";
import MovieList from "./MovieList";

const GptSearchPage = () => {
  const movies = useSelector((store) => store.movie);
  return (
    <div className="relative w-full h-screen -mt-36">
      <img className="w-full" src={BG_IMG} alt="" />
      <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-24  flex items-center justify-center flex-col  rounded-lg w-9/12  sm:w-9/12 md:w-9/12  bg-black/75">
        <GptSearch />
      </div>
      <div className="-mt-[20%] z-20 relative bg-gradient-to-r from-black">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayMovie} />
      </div>
    </div>
  );
};

export default GptSearchPage;
