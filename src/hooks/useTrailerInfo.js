import { useDispatch, useSelector } from "react-redux";
import { addTrailerInfo } from "../utils/store/movieSlice";
import { options } from "../utils/constant";
import { useEffect } from "react";

const useTrailerInfo = (id) => {
  const dispatch = useDispatch();
  const trailerInfos = useSelector((store) => store.movie.trailerInfo);
  useEffect(() => {
    !trailerInfos && fetchTrailerVideo();
  }, []);
  const fetchTrailerVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos",
      options
    );
    const json = await data.json();
    const trailerData = json.results.filter((data) => data.type === "Trailer");
    const trailerInfo = trailerData.length ? trailerData[0] : json.results[0];
    dispatch(addTrailerInfo(trailerInfo));
  };
};

export default useTrailerInfo;
