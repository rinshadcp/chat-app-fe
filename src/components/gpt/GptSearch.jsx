import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import language from "../../utils/languageConstants";
import useGptResponse from "../../hooks/useGptResponse";

const GptSearch = () => {
  const input = useRef("");
  const [userQuery, setUserQuery] = useState("");

  const langIdentifier = useSelector((store) => store.config.lang);
  useGptResponse(userQuery);
  const handleSearch = () => {
    setUserQuery(input.current.value);
  };

  return (
    <div className="pt-36 md:pt-44">
      <div className="flex flex-col">
        <h1 className="font-bold text-center text-white text-xl md:text-5xl pb-2 md:pb-6">
          {language[langIdentifier].mainHeading}
        </h1>
        <h2 className="font-bold text-center text-white text-lg md:text-2xl mb-5">
          {language[langIdentifier].secondHeading}
        </h2>
      </div>
      <div className="flex  items-center justify-center">
        <input
          ref={input}
          className="rounded-lg p-3 my-2  w-6/12 md:w-4/12  bg-gray-600 opacity-80 "
          type="text"
          placeholder={language[langIdentifier].placeholderName}
        />
        <button
          onClick={handleSearch}
          className="w-3/12 md:w-2/12 p-3 my-2 mx-6 text-white rounded-lg bg-red-600"
        >
          {language[langIdentifier].searchName}
        </button>
      </div>
    </div>
  );
};

export default GptSearch;
