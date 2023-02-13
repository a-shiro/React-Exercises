import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { Store } from "../pages/store";

export const Navbar = () => {
  return (
    <nav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </BrowserRouter>
    </nav>
  );
};
