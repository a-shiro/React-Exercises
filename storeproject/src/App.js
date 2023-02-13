import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/home";
import { Store } from "./pages/store";
import { PageNotFount } from "./pages/404";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/login" element={<PageNotFount />} />
          <Route path="/register" element={<PageNotFount />} />
          <Route path="*" element={<PageNotFount />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
