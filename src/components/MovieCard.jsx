import { IMG_CDN_LINK } from "../utils/constant";

const MovieCard = ({ imgPath }) => {
  return (
    <div className="w-48 pr-4 ">
      <img alt="movie-card" src={IMG_CDN_LINK + imgPath} />
    </div>
  );
};

export default MovieCard;
