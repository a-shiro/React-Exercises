import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";

export const Navbar = () => {
  const { currentUser, setCurrentUser } = useContext(AppContext);

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/store">Store</Link>
      <Link to="/login">Login</Link>
      <Link
        onClick={async () => {
          signOut(auth);
          setCurrentUser({});
        }}
      >
        Logout
      </Link>
      {currentUser?.displayName && (
        <div>
          <h3>{currentUser.displayName}</h3>
          <img src={currentUser.photoURL} />
        </div>
      )}
    </div>
  );
};
