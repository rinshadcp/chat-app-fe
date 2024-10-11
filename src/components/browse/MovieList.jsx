import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    movies && (
      <div className=" pl-2 md:pl-6">
        <h1 className="font-bold my-2 text-md md:text-2xl text-white  md:py-2">
          {title}
        </h1>
        <div className="flex  overflow-x-scroll  scrollbar-hide ">
          <div className="flex">
            {movies.map((movie) => (
              <MovieCard key={movie.id} imgPath={movie.poster_path} />
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default MovieList;
