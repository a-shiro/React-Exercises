import { useEffect } from "react";
import { useState } from "react";
import Home from "./pages/home/Home";

import "./App.css";

function App() {
  const [navListElement, setNavListElement] = useState(null);

  useEffect(() => {
    setNavListElement(document.getElementsByClassName("navbar-list")[0]);
  }, []);

  const toggleHandler = () => {
    navListElement.classList.toggle("active");
  };

  return (
    <div>
      <nav className="navbar">
        <div>
          <a className="brand-logo">RentX</a>
        </div>

        <div className="links-list-container">
          <ul className="links-list">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Cars</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>

        <a href="#" className="toggle-button" onClick={toggleHandler}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
      </nav>

      <Home />

      <section>
        <div style={{ marginTop: "20em" }}>dummy div</div>
      </section>
    </div>
  );
}

export default App;
