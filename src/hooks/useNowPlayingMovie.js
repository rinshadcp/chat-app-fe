import { useEffect } from "react";
import { NOW_PLAYING_MOVIE_URL, options } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayMovie } from "../utils/store/movieSlice";

const useNowPlayingMovie = () => {
  const dispatch = useDispatch();
  const nowPlayMovies = useSelector((store) => store.movie.nowPlayMovie);
  useEffect(() => {
    !nowPlayMovies && fetchNowMovie();
  }, []);

  const fetchNowMovie = async () => {
    const data = await fetch(NOW_PLAYING_MOVIE_URL, options);
    const json = await data.json();
    dispatch(addNowPlayMovie(json?.results));
  };
};
export default useNowPlayingMovie;
