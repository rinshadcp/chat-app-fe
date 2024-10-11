import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import usePopularMovies from "../../hooks/usePopularMovies";
import useTopRatedMovies from "../../hooks/useTopRatedMovies";
import useUpcomingMovies from "../../hooks/useUpcomingMovies";

const SecondContainer = () => {
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const movies = useSelector((store) => store.movie);
  return (
    <div className="bg-black">
      <div className="-mt-20 md:-mt-80 z-20 relative">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayMovie} />
        <MovieList title={"Popular"} movies={movies?.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
        <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondContainer;
