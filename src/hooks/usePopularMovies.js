import { useEffect } from "react";
import { POPULAR_MOVIE_URL, options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPopularMovie } from "../utils/movieSlice";
const usePopularMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const fetchPopularMovies = async () => {
    const data = await fetch(POPULAR_MOVIE_URL, options);
    const json = await data.json();
    dispatch(addPopularMovie(json?.results));
  };
};
export default usePopularMovies;
