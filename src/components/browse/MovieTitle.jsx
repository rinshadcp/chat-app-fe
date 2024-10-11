const MovieTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] absolute  px-24  bg-gradient-to-r from-black to-transparent">
      <h1 className="text-white text-3xl p-2 font-bold">{title}</h1>
      <p className="text-white p-3  text-lg w-1/4 my-3  ">{overview}</p>
      <div className="flex ">
        <div className="flex justify-center items-center rounded-lg bg-white bg-opacity-80 p-3 m-2 hover:bg-opacity-70 hover:cursor-pointer">
          <svg
            className="w-10 "
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 30 30"
          >
            <path d="M 6 3 A 1 1 0 0 0 5 4 A 1 1 0 0 0 5 4.0039062 L 5 15 L 5 25.996094 A 1 1 0 0 0 5 26 A 1 1 0 0 0 6 27 A 1 1 0 0 0 6.5800781 26.8125 L 6.5820312 26.814453 L 26.416016 15.908203 A 1 1 0 0 0 27 15 A 1 1 0 0 0 26.388672 14.078125 L 6.5820312 3.1855469 L 6.5800781 3.1855469 A 1 1 0 0 0 6 3 z"></path>
          </svg>
          <h1 className="text-center font-bold  p-2">Play</h1>
        </div>
        <div className="flex justify-center items-center rounded-lg bg-gray-600   bg-opacity-90 p-3 m-2 hover:bg-opacity-70 hover:cursor-pointer">
          <svg
            className="w-10"
            fill="#FFFFFF"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
          >
            <path d="M 64 6 C 32 6 6 32 6 64 C 6 96 32 122 64 122 C 96 122 122 96 122 64 C 122 32 96 6 64 6 z M 64 12 C 92.7 12 116 35.3 116 64 C 116 92.7 92.7 116 64 116 C 35.3 116 12 92.7 12 64 C 12 35.3 35.3 12 64 12 z M 64 38 C 62.3 38 61 39.3 61 41 L 61 46 C 61 47.7 62.3 49 64 49 C 65.7 49 67 47.7 67 46 L 67 41 C 67 39.3 65.7 38 64 38 z M 64 58 C 62.3 58 61 59.3 61 61 L 61 87 C 61 88.7 62.3 90 64 90 C 65.7 90 67 88.7 67 87 L 67 61 C 67 59.3 65.7 58 64 58 z" />
          </svg>
          <h1 className="text-center text-white font-bold  p-2"> More Info</h1>
        </div>
      </div>
    </div>
  );
};

export default MovieTitle;
