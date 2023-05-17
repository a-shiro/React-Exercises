import { Fragment, useEffect } from "react";
import { useState } from "react";
import Home from "./pages/home/Home";

import "./App.css";

function App() {
  const [navListElement, setNavListElement] = useState(null);

  useEffect(() => {
    setNavListElement(document.getElementsByClassName("links-list")[0]);
  }, []);

  const toggleHandler = () => {
    navListElement.classList.toggle("active");
  };

  return (
    <Fragment>
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

      <footer>
        <div className="footer-clip"></div>
        <div className="info-wrapper">
          <div>
            <h6 className="info-title">Contacts:</h6>
            <p>+359 88 888 8888</p>
            <p>rentx@email.com</p>
          </div>
          <div>
            <h6 className="info-title">Social Networking:</h6>
            <p>Instagram - @official_rentx</p>
            <p>Facebook - RentX Cars</p>
            <p>TikTok - @official_rentx</p>
          </div>
          <div>
            <h6 className="info-title">Links:</h6>
            <p>Terms And Conditions</p>
            <p>Trustpilot Reviews</p>
            <p>FAQ</p>
          </div>
        </div>
        <div className="copyright-wrapper">
          <p>Copyright © 2023 RentX. All rights reserved</p>
        </div>
      </footer>
    </Fragment>
  );
}

export default App;
