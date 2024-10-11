import { IMG_CDN_LINK } from "../../utils/constant";

const MovieCard = ({ imgPath }) => {
  if (!imgPath) return null;
  return (
    <div className="w-32 md:w-48 pr-1 md:pr-4 ">
      <img alt="movie-card" src={IMG_CDN_LINK + imgPath} />
    </div>
  );
};

export default MovieCard;
