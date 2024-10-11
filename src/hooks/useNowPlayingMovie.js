import { useEffect } from "react";
import { NOW_PLAYING_MOVIE_URL, options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayMovie } from "../utils/store/movieSlice";

const useNowPlayingMovie = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchNowMovie();
  }, []);

  const fetchNowMovie = async () => {
    const data = await fetch(NOW_PLAYING_MOVIE_URL, options);
    const json = await data.json();
    dispatch(addNowPlayMovie(json?.results));
  };
};
export default useNowPlayingMovie;
