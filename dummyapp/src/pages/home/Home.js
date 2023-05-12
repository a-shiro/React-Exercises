import heroImage from "../../images/hero.jpg";
import leftWorldMap from "../../images/left-world-map-vector.png";
import middleWorldMap from "../../images/middle-world-map-vector.png";
import rightWorldMap from "../../images/right-world-map-vector.png";

import "./Home.css";

const Home = () => {
  const toggleHandler = (e) => {
    const [countriesButton, citiesButton] = e.target.parentElement.children;

    countriesButton.classList.toggle("selected");
    citiesButton.classList.toggle("selected");
  };

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
          <div className="card-wrapper">
            <div className="card">
              <span className="card-title">Porsche 992 Cabrio</span>
              <img
                className="card-image"
                src="https://res.cloudinary.com/unix-center/image/upload/c_fill,dpr_auto,f_auto,fl_progressive,g_center,h_125,q_auto,w_315/v1580913291/ozwawbomlmkclzllldx1.png"
              />
            </div>

            <div className="card medium-screen">
              <span className="card-title">Lamborghini Hurracan EVO</span>
              <img
                className="card-image"
                src="https://res.cloudinary.com/unix-center/image/upload/c_fill,dpr_auto,f_auto,fl_progressive,g_center,h_125,q_auto,w_315/v1573743772/tfgvvsuaydikw5ad1yds.png"
              />
            </div>

            <div className="card large-screen">
              <span className="card-title">Mercedes-Benz G63 AMG</span>
              <img
                className="card-image"
                src="https://res.cloudinary.com/unix-center/image/upload/c_lfill,dpr_auto,f_auto,fl_progressive,g_center,h_108,q_auto,w_270/v1520083160/dyneukcbulzxewb1ay5g.png"
              />
            </div>

            <div className="card xl-screen">
              <span className="card-title">Mercedes-Benz G63 AMG</span>
              <img
                className="card-image"
                src="https://res.cloudinary.com/unix-center/image/upload/c_lfill,dpr_auto,f_auto,fl_progressive,g_center,h_108,q_auto,w_270/v1520083160/dyneukcbulzxewb1ay5g.png"
              />
            </div>
          </div>
          <button className="cta-button">All cars</button>
        </div>
      </section>

      <section className="location-section">
        <div>
          <img className="background-image-left" src={leftWorldMap} />
          <img className="background-image-middle" src={middleWorldMap} />
          <img className="background-image-right" src={rightWorldMap} />

          <h1>Select Place</h1>

          <div className="controls-wrapper">
            <button className="toggler-button selected" onClick={toggleHandler}>
              Countries
            </button>
            <button className="toggler-button" onClick={toggleHandler}>
              Cities
            </button>
          </div>

          <div className="location-card-wrapper">
            <div className="location-card">
              <span>Paris</span>
              <img src="https://res.cloudinary.com/unix-center/image/upload/c_lfill,dpr_auto,f_auto,fl_progressive,g_center,h_200,q_auto,w_290/v1573488138/euiwvpylbtzawkymw8mw.png" />
            </div>
            <div className="location-card">
              <span>Marbella</span>
              <img src="https://res.cloudinary.com/unix-center/image/upload/c_lfill,dpr_auto,f_auto,fl_progressive,g_center,h_200,q_auto,w_290/v1573486364/ntjrtuf94bs9gjkemlh7.png" />
            </div>
            <div className="location-card">
              <span>London</span>
              <img src="https://res.cloudinary.com/unix-center/image/upload/c_lfill,dpr_auto,f_auto,fl_progressive,g_center,h_200,q_auto,w_290/v1573485962/eieclwgkkjdbgb7fp8ey.png" />
            </div>
            <div className="location-card">
              <span>Monaco</span>
              <img src="https://res.cloudinary.com/unix-center/image/upload/c_lfill,dpr_auto,f_auto,fl_progressive,g_center,h_200,q_auto,w_290/v1573486515/wz4mr5pvgbipd8saytse.png" />
            </div>
            <div className="location-card">
              <span>Vienna</span>
              <img src="https://res.cloudinary.com/unix-center/image/upload/c_lfill,dpr_auto,f_auto,fl_progressive,g_center,h_200,q_auto,w_290/v1573231555/mxqi1ewcv038v0jcdslp.png" />
            </div>
          </div>
        </div>
      </section>

      <section className="brand-section">
        <div>
          <h1>Our Brands</h1>

          <div className="brands-card-wrapper">
            <div className="brand-card">
              <img src="https://res.cloudinary.com/unix-center/image/upload/c_lfill,dpr_auto,f_auto,fl_progressive,g_center,h_206,q_auto,w_206/v1562524909/kb041wxyazyrn6j49trl.jpg" />
            </div>
            <div className="brand-card">
              <img src="https://res.cloudinary.com/unix-center/image/upload/c_lfill,dpr_auto,f_auto,fl_progressive,g_center,h_206,q_auto,w_206/v1562524489/hmd9nuskyaehqwrgd0cc.jpg" />
            </div>
            <div className="brand-card">
              <img src="https://res.cloudinary.com/unix-center/image/upload/c_lfill,dpr_auto,f_auto,fl_progressive,g_center,h_206,q_auto,w_206/v1556479867/pxivkqkelvgr8ntpnxrv.jpg" />
            </div>
            <div className="brand-card">
              <img src="https://res.cloudinary.com/unix-center/image/upload/c_lfill,dpr_auto,f_auto,fl_progressive,g_center,h_206,q_auto,w_206/v1556479928/lxkmam1neeulzsklaxni.jpg" />
            </div>
            <div className="brand-card">
              <img src="https://res.cloudinary.com/unix-center/image/upload/c_lfill,dpr_auto,f_auto,fl_progressive,g_center,h_206,q_auto,w_206/v1556479928/lxkmam1neeulzsklaxni.jpg" />
            </div>
            <div className="brand-card">
              <img src="https://res.cloudinary.com/unix-center/image/upload/c_lfill,dpr_auto,f_auto,fl_progressive,g_center,h_206,q_auto,w_206/v1556479928/lxkmam1neeulzsklaxni.jpg" />
            </div>
            <div className="brand-card">
              <img src="https://res.cloudinary.com/unix-center/image/upload/c_lfill,dpr_auto,f_auto,fl_progressive,g_center,h_206,q_auto,w_206/v1556479928/lxkmam1neeulzsklaxni.jpg" />
            </div>
            <div className="brand-card">
              <img src="https://res.cloudinary.com/unix-center/image/upload/c_lfill,dpr_auto,f_auto,fl_progressive,g_center,h_206,q_auto,w_206/v1556479928/lxkmam1neeulzsklaxni.jpg" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
