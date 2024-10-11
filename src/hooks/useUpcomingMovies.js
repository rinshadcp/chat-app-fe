import { useEffect } from "react";
import { UPCOMING_MOVIE_URL, options } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovie } from "../utils/store/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovie = useSelector((store) => store.movie.upcomingMovies);
  useEffect(() => {
    !upcomingMovie && fetchUpcomingMovies();
  }, []);

  const fetchUpcomingMovies = async () => {
    const data = await fetch(UPCOMING_MOVIE_URL, options);
    const json = await data.json();
    dispatch(addUpcomingMovie(json?.results));
  };
};
export default useUpcomingMovies;
