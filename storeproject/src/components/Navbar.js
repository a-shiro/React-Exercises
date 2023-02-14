import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";

export const Navbar = () => {
  const { currentUser } = useContext(AppContext);

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/store">Store</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      {currentUser?.displayName && (
        <div>
          <h3>{currentUser.displayName}</h3>
          <img src={currentUser.photoURL} />
        </div>
      )}
    </div>
  );
};
