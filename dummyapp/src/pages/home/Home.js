import heroImage from "../../images/hero.jpg";
import "./Home.css";

const Home = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-title-container">
          <h1 className="hero-title">
            ​ELEVATE YOUR JOURNEY WITH LUXURY CAR RENTALS
          </h1>
          <p className="hero-subtitle">
            Indulge in the finest automotive luxury with our premium car rental
            services. Choose from an exquisite fleet of high-end vehicles and
            experience the unmatched comfort, performance, and style that define
            true sophistication.
          </p>
          <div className="cta-container">
            <a className="cta-button">Discover</a>
            <a className="cta-button">About</a>
          </div>
        </div>

        <img className="hero-image" src={heroImage} />
      </div>
    </section>
  );
};

export default Home;
