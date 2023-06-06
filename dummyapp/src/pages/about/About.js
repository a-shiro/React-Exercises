import "./About.css";
import historyIcon from "../../images/history.png";
import carsIcon from "../../images/cars.png";
import locationsIcon from "../../images/locations.png";
import customerServiceIcon from "../../images/customer-service.png";

const About = () => {
  return (
    <main>
      <section>
        <div className="about-hero-section-wrapper">
          <div className="about-heading">
            <h1>Your gateway to unparalleled luxury</h1>
            <p>
              Unmatched elegance and performance with our premium car rental
              services
            </p>
          </div>
          <div className="about-cards">
            <div className="about-card">
              <div className="icon-wrapper">
                <img className="icon" src={historyIcon} />
              </div>
              <span>Company</span>
              <p>Our rich and interesting history</p>
              <a
                href="https://www.flaticon.com/free-icons/scroll"
                title="scroll icons"
              >
                Scroll icons created by Freepik - Flaticon
              </a>
            </div>

            <div className="about-card">
              <div className="icon-wrapper">
                <img className="icon" src={carsIcon} />
              </div>
              <span>Cars</span>
              <p>Only the finest examples</p>
              <a
                href="https://www.flaticon.com/free-icons/car"
                title="car icons"
              >
                Car icons created by Freepik - Flaticon
              </a>
            </div>
            <div className="about-card">
              <div className="icon-wrapper">
                <img className="icon" src={customerServiceIcon} />
              </div>
              <span>Service</span>
              <p>24/7 available service</p>
              <a
                href="https://www.flaticon.com/free-icons/customer-service"
                title="customer service icons"
              >
                Customer service icons created by Icon home - Flaticon
              </a>
            </div>
            <div className="about-card">
              <div className="icon-wrapper">
                <img className="icon" src={locationsIcon} />
              </div>
              <span>Location</span>
              <p>We've got the globe covered</p>
              <a
                href="https://www.flaticon.com/free-icons/customer-service"
                title="customer service icons"
              >
                Customer service icons created by Icon home - Flaticon
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
