import { useRef, useState } from "react";
import { validateSigninData } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Signin = () => {
  const [signIn, setSignin] = useState(true);
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  console.log(fullName);
  const handleSignin = () => {
    const msg = validateSigninData(
      !signIn ? fullName.current.value : null,
      email.current.value,
      password.current.value
    );
    setMessage(msg);
    if (message) return;

    if (!signIn) {
      //signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(() => {
          updateProfile(auth.currentUser, {
            displayName: fullName.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
              navigate("/browse");
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
          if (errorCode === "auth/invalid-credential") {
            setMessage("Invalid Credentials");
          }
          if (errorCode === "auth/email-already-in-use") {
            setMessage("Email Already Used");
          }
        });
    } else {
      //signin logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(() => {
          // Signed in
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          // const errorMessage = error.message;
          if (errorCode === "auth/invalid-credential") {
            setMessage("Invalid Credentials");
          }
        });
    }
  };

  const toggleSigninForm = () => {
    setSignin(!signIn);
  };
  return (
    <div className="relative h-screen w-full">
      <img
        className="w-full "
        src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_large.jpg"
        alt="bg"
      />
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-10 flex items-center justify-center flex-col  rounded-lg w-9/12  sm:w-6/12 md:w-4/12  bg-black/75"
      >
        <h1 className=" self-start text-white font-bold text-2xl  md:mx-10 p-4">
          {signIn ? "Sign In" : "Sign Up"}
        </h1>
        {!signIn && (
          <input
            ref={fullName}
            className="m-3 p-3  w-9/12 rounded-lg border border-gray-500 bg-gray-600/40"
            type="text"
            placeholder="Full Name"
          ></input>
        )}
        <input
          ref={email}
          className="m-3 p-3  w-9/12 rounded-lg border border-gray-500 bg-gray-600/40"
          type="email"
          name="email"
          placeholder="Email Address"
        ></input>
        <input
          ref={password}
          className="m-3 p-3 w-9/12 rounded-lg border border-gray-500 bg-gray-600/40"
          type="password"
          name="password"
          placeholder="Password"
        />
        <p className="text-start m-3 font-bold text-red-700 text-lg">
          {message}
        </p>
        {signIn ? (
          <button
            className="m-3 p-2 w-9/12    rounded-lg bg-red-600 text-white font-bold"
            type="submit"
            onClick={handleSignin}
          >
            Sign In
          </button>
        ) : (
          <button
            className="m-3 p-2 w-9/12    rounded-lg bg-red-600 text-white font-bold"
            type="submit"
            onClick={handleSignin}
          >
            Sign Up
          </button>
        )}

        {signIn ? (
          <div className="flex flex-row self-start md:mx-16 m-2">
            <h1 className="text-white/50 font-bold m-1">New to Netflix ? </h1>
            <button
              className="text-white font-bold m-1 hover:underline "
              onClick={toggleSigninForm}
            >
              Sign up now.
            </button>
          </div>
        ) : (
          <div className="flex flex-row self-start md:mx-16 m-2">
            <h1 className="text-white/50 font-bold m-1">
              Already registered ?
            </h1>
            <button
              className="text-white font-bold m-1 hover:underline "
              onClick={toggleSigninForm}
            >
              Sign in
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Signin;
