import { useSelector } from "react-redux";
import useTrailerInfo from "../hooks/useTrailerInfo";

const MovieVideoBg = ({ id }) => {
  useTrailerInfo(id);
  const trailer = useSelector((store) => store.movie?.trailerInfo);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video "
        src={
          "https://www.youtube.com/embed/" + trailer?.key + "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default MovieVideoBg;
