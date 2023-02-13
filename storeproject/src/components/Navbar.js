import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "../pages/home";
import { Store } from "../pages/store";
import { PageNotFount } from "../pages/404";

export const Navbar = () => {
  return (
    <nav>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/store">Store</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/login" element={<PageNotFount />} />
          <Route path="/register" element={<PageNotFount />} />
          <Route path="*" element={<PageNotFount />} />
        </Routes>
      </BrowserRouter>
    </nav>
  );
};
