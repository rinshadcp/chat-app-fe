import { useEffect } from "react";
import client from "../utils/openai";

const useGptResponse = (userQuery) => {
  useEffect(() => {
    gptResponse();
  }, []);
  const gptResponse = async () => {
    const completeQuery = {
      "Based on the user's query, recommend 5 movies that fit their description. Consider the genre, mood, themes, and specific details provided. Return the 5 movie names, separated by commas, without any extra text or punctuation. If the user mentions specific actors, directors, or time periods, include movies that match those preferences as well. Here are some examples to follow:Blade Runner 2049, Interstellar, The Matrix, Inception, Dune.User query":
        +userQuery,
    };
    const chatCompletion = await client.chat.completions.create({
      messages: [{ role: "user", content: completeQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(chatCompletion, "chat");
  };
};

export default useGptResponse;
