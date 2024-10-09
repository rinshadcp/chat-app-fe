import { useEffect } from "react";
import { TOP_RATED_MOVIE_URL, options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTopRatedMovie } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchTopRatedMovies();
  }, []);

  const fetchTopRatedMovies = async () => {
    const data = await fetch(TOP_RATED_MOVIE_URL, options);
    const json = await data.json();
    dispatch(addTopRatedMovie(json?.results));
  };
};
export default useTopRatedMovies;
