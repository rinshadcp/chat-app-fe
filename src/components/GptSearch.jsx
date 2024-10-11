import { useRef } from "react";
import { useSelector } from "react-redux";
import language from "../utils/languageConstants";

const GptSearch = () => {
  const input = useRef("");

  const langIdentifier = useSelector((store) => store.config.lang);

  return (
    <div className="  ">
      <div className="flex flex-col">
        <h1 className="font-bold text-center text-white text-5xl pb-6">
          {language[langIdentifier].mainHeading}
        </h1>
        <h2 className="font-bold text-center text-white text-2xl mb-5">
          {language[langIdentifier].secondHeading}
        </h2>
      </div>
      <div>
        <input
          ref={input}
          className="rounded-lg p-3 my-2 w-9/12  bg-gray-600 opacity-80 "
          type="text"
          placeholder={language[langIdentifier].placeholderName}
        />
        <button
          onClick=""
          className="w-2/12 p-3 my-2 mx-6 text-white rounded-lg bg-red-600"
        >
          {language[langIdentifier].searchName}
        </button>
      </div>
    </div>
  );
};

export default GptSearch;
