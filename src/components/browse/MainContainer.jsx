import MovieTitle from "./MovieTitle";
import MovieVideoBg from "./MovieVideoBg";
import { useSelector } from "react-redux";
import useNowPlayingMovie from "../../hooks/useNowPlayingMovie";

const MainContainer = () => {
  useNowPlayingMovie();
  const nowPlayMovie = useSelector((store) => store.movie?.nowPlayMovie);
  if (nowPlayMovie === null) return;
  const movie = nowPlayMovie[0];
  const { id, original_title, overview } = movie;

  return (
    <div className="">
      <MovieTitle title={original_title} overview={overview} />
      <MovieVideoBg id={id} />
    </div>
  );
};

export default MainContainer;
