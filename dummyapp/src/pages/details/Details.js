import "./Details.css";
import detailsPhoto from "../../images/details-photo.webp";

const Details = () => {
  return (
    <main>
      <section className="details-section">
        <h1 className="details-title">Porsche 911 Cabrio</h1>
        <div className="rent-info-wrapper">
          <img className="details-photo" src={detailsPhoto} />
          <div>
            <div className="rent-details">
              <span className="price">
                from <b>900$</b> per day
              </span>
              <span>The minimum rental period is 2 days.</span>
            </div>
            <div className="car-details">
              <span>Car specifications</span>
              <table>
                <tbody>
                  <tr>
                    <td>Engine</td>
                    <td>4.0 litre</td>
                  </tr>
                  <tr>
                    <td>Horse Power</td>
                    <td>600</td>
                  </tr>
                  <tr>
                    <td>0-100 km/h</td>
                    <td>3.5s</td>
                  </tr>
                  <tr>
                    <td>Top Speed</td>
                    <td>360</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <button className="rent-button">Rent</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Details;
