import { useEffect } from "react";
import { useState } from "react";
import heroImage from "./images/hero.jpg";

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
        <div className="brand-title">RentX</div>
        <a href="#" className="toggle-button" onClick={toggleHandler}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <div className="links-container">
          <ul className="navbar-list">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Cars</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <section className="hero-section">
        <div className="container">
          <div className="hero-title-container">
            <h1 className="hero-title">
              ​ELEVATE YOUR JOURNEY WITH LUXURY CAR RENTALS
            </h1>
            <p className="hero-subtitle">
              Indulge in the finest automotive luxury with our premium car
              rental services. Choose from an exquisite fleet of high-end
              vehicles and experience the unmatched comfort, performance, and
              style that define true sophistication.
            </p>
            <div className="cta-container">
              <button className="default-button">Discover</button>
              <button className="default-button">About</button>
            </div>
          </div>
          <img className="hero-image" src={heroImage} />
        </div>
      </section>

      <section>
        <div style={{ marginTop: "20em" }}>dummy div</div>
      </section>
    </div>
  );
}

export default App;
