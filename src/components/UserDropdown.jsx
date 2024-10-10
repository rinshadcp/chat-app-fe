const UserDropdown = ({ displayName, handleSignout }) => {
  return (
    <div className=" bg-black m-2 p-2 flex flex-col  rounded-lg opacity-70">
      <h1 className="font-bold  pb-2 text-white ">Hey ! {displayName}</h1>
      <div className="border-b-2 border-solid opacity-50  my-2"></div>
      <button
        onClick={handleSignout}
        className="bg-red-600 rounded-lg   p-2 font-bold text-white shadow-lg "
      >
        Sign Out
      </button>
    </div>
  );
};

export default UserDropdown;
