import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";
import { useContext } from "react";

export const Login = () => {
  const { setCurrentUser } = useContext(AppContext);
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, provider);

    setCurrentUser(auth.currentUser);
    navigate("/");
  };

  return (
    <div>
      <button onClick={signInWithGoogle}>Login With Google</button>
    </div>
  );
};
