import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "./utils/firebase";
import { addUser, removeUser } from "./utils/userSlice";

const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="">
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
