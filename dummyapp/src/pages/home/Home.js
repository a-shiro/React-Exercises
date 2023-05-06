import heroImage from "../../images/hero.jpg";
import "./Home.css";

const Home = () => {
  return (
    <main>
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
              <a className="cta-button">Discover</a>
              <a className="cta-button">About</a>
            </div>
          </div>

          <img className="hero-image" src={heroImage} />
        </div>
      </section>

      <section className="popular-section">
        <div>
          <h1>Popular Choices</h1>
          <div className="card-slider">
            <div className="card">
              <span className="card-title">Porsche</span>
              <img
                className="card-image"
                src="https://res.cloudinary.com/unix-center/image/upload/c_fill,dpr_auto,f_auto,fl_progressive,g_center,h_125,q_auto,w_315/v1580913291/ozwawbomlmkclzllldx1.png"
              />
            </div>
          </div>
          <button className="cta-button">All cars</button>
        </div>
      </section>
    </main>
  );
};

export default Home;
