import { useState } from "react";

const Signin = () => {
  const [signIn, setSignin] = useState(true);
  return (
    <div className="relative h-screen w-full">
      <img
        className="w-full "
        src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_large.jpg"
        alt="bg"
      />
      <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-10 flex items-center justify-center flex-col  rounded-lg w-9/12  sm:w-6/12 md:w-4/12  bg-black/75">
        <h1 className=" self-start text-white font-bold text-2xl  md:mx-10 p-4">
          {signIn ? "Sign In" : "Sign Up"}
        </h1>
        {!signIn && (
          <input
            className="m-3 p-3  w-9/12 rounded-lg border border-gray-500 bg-gray-600/40"
            type="text"
            placeholder="Full Name"
          ></input>
        )}
        <input
          className="m-3 p-3  w-9/12 rounded-lg border border-gray-500 bg-gray-600/40"
          type="email"
          placeholder="Email Address"
        ></input>
        <input
          className="m-3 p-3 w-9/12 rounded-lg border border-gray-500 bg-gray-600/40"
          type="password"
          name="password"
          id=""
          placeholder="Password"
        />
        <button
          className="m-3 p-2 w-9/12    rounded-lg bg-red-600 text-white font-bold"
          type="submit"
        >
          Sign In
        </button>

        {signIn ? (
          <div className="flex flex-row self-start md:mx-16 m-2">
            <h1 className="text-white/50 font-bold m-1">New to Netflix ? </h1>
            <button
              className="text-white font-bold m-1 hover:underline "
              onClick={() => {
                setSignin(!signIn);
              }}
            >
              Sign up now.
            </button>
          </div>
        ) : (
          <div className="flex flex-row self-start md:mx-16 m-2">
            <h1 className="text-white/50 font-bold m-1">Already registered ? </h1>
            <button
              className="text-white font-bold m-1 hover:underline "
              onClick={() => {
                setSignin(!signIn);
              }}
            >
              Sign in
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signin;
