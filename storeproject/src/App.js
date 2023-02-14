import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Home } from "./pages/home";
import { Store } from "./pages/store";
import { PageNotFount } from "./pages/404";
import { Login } from "./pages/login";
import { createContext, useState } from "react";

export const AppContext = createContext();

function App() {
  const [currentUser, setCurrentUser] = useState({});

  return (
    <div>
      <AppContext.Provider value={{ currentUser, setCurrentUser }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<PageNotFount />} />
            <Route path="*" element={<PageNotFount />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
