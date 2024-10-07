import { useEffect } from "react";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayMovie } from "../utils/movieSlice";

const useNowPlayingMovie = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchNowMovie();
  }, []);

  const fetchNowMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      options
    );
    const json = await data.json();
    dispatch(addNowPlayMovie(json?.results));
  };
};
export default useNowPlayingMovie;
