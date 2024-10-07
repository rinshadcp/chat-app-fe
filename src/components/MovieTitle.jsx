const MovieTitle = ({ title, overview }) => {
  return (
    <div className="mt-28 absolute">
      <h1>{title}</h1>
      <p>{overview}</p>
      <div className="flex">
        <button className="border rounded-lg bg-gray-600 font-bold p-3 ">
          Play
        </button>
        <button className="border rounded-lg bg-gray-600 font-bold p-3 ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default MovieTitle;
