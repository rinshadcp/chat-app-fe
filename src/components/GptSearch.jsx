const GptSearch = () => {
  return (
    <div className="  ">
      <div className="flex flex-col">
        <h1 className="font-bold text-center text-white text-5xl pb-6">
          Discover Movies Tailored Just for You
        </h1>
        <h2 className="font-bold text-center text-white text-2xl mb-5">
          Let our AI curate your next movie adventure—just type what you're in
          the mood for!
        </h2>
      </div>
      <div>
        <input
          className="rounded-lg p-3 my-2 w-9/12  bg-gray-600 opacity-80 "
          type="text"
          placeholder="Type a movie description here..."
        />
        <button className="w-2/12 p-3 my-2 mx-6 text-white rounded-lg bg-red-600">
          Search
        </button>
      </div>
    </div>
  );
};

export default GptSearch;
