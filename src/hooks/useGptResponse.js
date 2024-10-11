import { useDispatch } from "react-redux";
import { MOVIE_SEARCH_URL, options } from "../utils/constant";
import client from "../utils/openai";
import { updateMovieDetails } from "../utils/store/gptSlice";
import { useEffect } from "react";

const useGptResponse = (userQuery) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (userQuery) {
      gptResponse();
    }
  }, []);

  const searchMovieInTMDB = async (movieName) => {
    const data = await fetch(MOVIE_SEARCH_URL + movieName, options);
    const json = await data.json();
    return json.results;
  };
  const gptResponse = async () => {
    const completeQuery = {
      "Based on the user's query, recommend 5 movies that fit their description. Consider the genre, mood, themes, and specific details provided. Return the 5 movie names, separated by commas, without any extra text or punctuation. If the user mentions specific actors, directors, or time periods, include movies that match those preferences as well. Here are some examples to follow:Blade Runner 2049, Interstellar, The Matrix, Inception, Dune.User query":
        +userQuery,
    };
    const chatCompletion = await client.chat.completions.create({
      messages: [{ role: "user", content: completeQuery }],
      model: "gpt-3.5-turbo",
    });
    const movieNames = chatCompletion.choices?.[0]?.message?.content.split(",");
    const moviesPromises = movieNames.map((movieName) =>
      searchMovieInTMDB(movieName)
    );

    const result = await Promise.all(moviesPromises);
    dispatch(updateMovieDetails({ movieName: movieNames, movies: result }));
  };
};

export default useGptResponse;
