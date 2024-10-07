import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AVATAR, LOGO } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error", error);
      });
  };
  return (
    <div className="flex justify-between absolute z-10 top-0 w-full left-0 bg-gradient-to-b from-black to-transparent">
      <div className="">
        <img
          className="w-32 sm:w-42 md:w-52  mx-28 sm:mx-56 md:mx-80  my-2 p-2  "
          src={LOGO}
          alt="logo"
        ></img>
      </div>
      {user && (
        <div className="flex h-14 my-5 mx-3 ">
          <div className="">
            <img src={AVATAR} alt="usericon" className="m-2 w-12 rounded-lg" />
            <h1 className="font-bold">{user?.displayName}</h1>
          </div>

          <button
            onClick={handleSignout}
            className="bg-red-600 rounded-lg border m-2 p-2 font-bold text-white shadow-lg "
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
