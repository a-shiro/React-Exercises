import "./Catalog.css";

const Catalog = () => {
  const filtersWrapper = document.querySelector(".filters-wrapper");

  const toggleFiltersVisibility = () => {
    filtersWrapper.classList.toggle("visible");
  };

  return (
    <main>
      <section>
        <div className="catalog-container">
          <div className="filters-dropdown">
            <button onClick={toggleFiltersVisibility}>Filters &darr;</button>
          </div>

          <div className="filters-wrapper">
            <div>
              <p>Car Type</p>
              <select>
                <option>All cars</option>
                <option>Convertible</option>
                <option>SUV</option>
                <option>Sports Car</option>
                <option>Hyper Car</option>
                <option>Luxury Sedan</option>
              </select>
            </div>
            <div>
              <p>Brand</p>
              <select></select>
            </div>
            <div>
              <p>Price range</p>
              <input name="priceRangeFrom" type="number" placeholder="from $" />
              <input name="priceRangeTo" type="number" placeholder="to $" />
            </div>
          </div>

          <div className="cards-wrapper">
            <div className="card">
              <div className="card-clip"></div>
              <div className="card-clip-2"></div>
              <div className="card-clip-3"></div>

              <span className="card-title">Porsche 992 Cabrio</span>
              <img
                className="card-image"
                src="https://res.cloudinary.com/unix-center/image/upload/c_fill,dpr_auto,f_auto,fl_progressive,g_center,h_125,q_auto,w_315/v1580913291/ozwawbomlmkclzllldx1.png"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Catalog;
