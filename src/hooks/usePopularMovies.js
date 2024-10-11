import { useEffect } from "react";
import { POPULAR_MOVIE_URL, options } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovie } from "../utils/store/movieSlice";
const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movie.popularMovies);
  useEffect(() => {
    !popularMovies && fetchPopularMovies();
  }, []);

  const fetchPopularMovies = async () => {
    const data = await fetch(POPULAR_MOVIE_URL, options);
    const json = await data.json();
    dispatch(addPopularMovie(json?.results));
  };
};
export default usePopularMovies;
