import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { AVATAR, languages, LOGO } from "../utils/constant";
import UserDropdown from "./signin/UserDropdown";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { updateLang } from "../utils/store/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const user = useSelector((store) => store.user);
  const selectedLanguage = useSelector((store) => store.config.lang);
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

  const handleLang = (e) => {
    dispatch(updateLang(e.target.value));
  };

  const handleLogoClick = () => {
    if (user) {
      navigate("/browse");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="flex justify-between absolute z-10 top-0 w-full left-0 bg-gradient-to-b from-black to-transparent">
      <div className="">
        <img
          className="w-32  md:w-52  mx-auto  md:mx-80  my-2 p-2  "
          src={LOGO}
          alt="logo"
          onClick={handleLogoClick}
        ></img>
      </div>
      {user && (
        <div>
          <div className="flex h-14 my-5 mx-3 pr-8 ">
            {location.pathname === "/search" && (
              <select
                className="bg-gray-500 mb-2 rounded-lg p-2 md:font-bold w-16   md:w-36"
                onChange={handleLang}
                value={selectedLanguage}
              >
                {languages.map((lang) => (
                  <option
                    className=""
                    key={lang.identifier}
                    value={lang.identifier}
                  >
                    {lang.Name}
                  </option>
                ))}
              </select>
            )}
            <Link to="/search">
              <button className="bg-purple-600 mx-4 mb-3 p-2 md:p-3 rounded-lg  md:font-bold shadow-md w-18  md:w-36">
                GPT Search
              </button>
            </Link>
            <div className="">
              <img
                src={AVATAR}
                alt="usericon"
                className="   w-10 rounded-lg "
              />
            </div>
            <div className="cursor-pointer" onClick={showUserProfile}>
              <img className="w-4 md:w-6 my-2 mx-2" src="/dropdown.svg" />
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
