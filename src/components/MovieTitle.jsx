const MovieTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] absolute  px-24  bg-gradient-to-r from-black">
      <h1 className="text-white text-3xl p-2 font-bold">{title}</h1>
      <p className="text-white p-3  text-lg w-1/4 my-3  ">{overview}</p>
      <div className="flex p-3 m-3">
        <button className="flex  rounded-lg bg-white bg-opacity-80 p-1 m-1 ">
          <svg
            className="w-8 m-2 p-2"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 30 30"
          >
            <path d="M 6 3 A 1 1 0 0 0 5 4 A 1 1 0 0 0 5 4.0039062 L 5 15 L 5 25.996094 A 1 1 0 0 0 5 26 A 1 1 0 0 0 6 27 A 1 1 0 0 0 6.5800781 26.8125 L 6.5820312 26.814453 L 26.416016 15.908203 A 1 1 0 0 0 27 15 A 1 1 0 0 0 26.388672 14.078125 L 6.5820312 3.1855469 L 6.5800781 3.1855469 A 1 1 0 0 0 6 3 z"></path>
          </svg>
          <h1 className="text-center font-bold  m-2 p-2">Play</h1>
        </button>
        <button className="flex rounded-lg bg-gray-300  p-3 m-3 bg-opacity-60 ">
          <img className="w-8" src="/infoBtn.svg" alt="" />
          <h1 className="text-center font-bold"> More Info</h1>
        </button>
      </div>
    </div>
  );
};

export default MovieTitle;
