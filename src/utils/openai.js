import OpenAI from "openai";
import { O_A_KEY } from "./constant";

const client = new OpenAI({
  apiKey: { O_A_KEY },
  dangerouslyAllowBrowser: true,
});

export default client;
