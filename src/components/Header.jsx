import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { AVATAR, LOGO } from "../utils/constant";
import UserDropdown from "./UserDropdown";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  const [showProfile, setShowProfile] = useState(false);
  const handleSignout = () => {
    signOut(auth);
    setShowProfile(!showProfile)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error", error);
      });
  };
  const showUserProfile = () => {
    setShowProfile(!showProfile);
  };

  return (
    <div className="flex justify-between absolute z-10 top-0 w-full left-0 bg-gradient-to-b from-black to-transparent">
      <div className="">
        <Link to="/browse">
          <img
            className="w-32 sm:w-42 md:w-52  mx-28 sm:mx-56 md:mx-80  my-2 p-2  "
            src={LOGO}
            alt="logo"
          ></img>
        </Link>
      </div>
      {user && (
        <div>
          <div className="flex h-14 my-5 mx-3 pr-8 ">
            <Link to="/search">
              <button className="bg-purple-600 mx-4 mb-3  p-3 rounded-2xl font-bold shadow-md">
                GPT Search
              </button>
            </Link>
            <div className="">
              <img src={AVATAR} alt="usericon" className="   w-10 rounded-lg" />
            </div>
            <div className="cursor-pointer" onClick={showUserProfile}>
              <img className="w-6 my-2 mx-2" src="/dropdown.svg" />
            </div>
          </div>
          {showProfile && (
            <UserDropdown
              displayName={user?.displayName}
              handleSignout={handleSignout}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
