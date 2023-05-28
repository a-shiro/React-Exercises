import "./Catalog.css";

const Catalog = () => {
  const filtersWrapper = document.querySelector(".filters-wrapper");

  const toggleFiltersVisibility = () => {
    filtersWrapper.classList.toggle("visible");
  };

  const toggleDropdownVisibility = (e) => {
    document
      .querySelector(`.${e.target.parentElement.className} ul`)
      .classList.toggle("visible");
  };

  return (
    <main>
      <section className="catalog-section">
        <div className="catalog-container">
          <div className="filters-dropdown">
            <button onClick={toggleFiltersVisibility}>Filters &darr;</button>
          </div>

          <div className="filters-wrapper">
            <div className="type-filter">
              <span>Car Type</span>
              <button
                className="type-filter-button"
                onClick={toggleDropdownVisibility}
              >
                All Cars
              </button>
              <ul className="filter-ul">
                <li>All cars</li>
                <li>Convertible</li>
                <li>SUV</li>
                <li>Sports car</li>
                <li>Hyper car</li>
                <li>Luxury Sedan</li>
              </ul>
            </div>
            <div>
              <span>Brand</span>
              <select></select>
            </div>
            <div>
              <span>Price range</span>
              <input name="priceRangeFrom" type="number" placeholder="from $" />
              <input name="priceRangeTo" type="number" placeholder="to $" />
            </div>
            <div>
              <span>Horse power</span>
              <input value={150} type="number" />
              <input value={1500} type="number" />
            </div>
            <div>
              <button className="clear-filters-button">Clear filters</button>
            </div>
          </div>

          <div className="catalog-card-wrapper">
            <div className="catalog-card">
              <div className="catalog-card-clip"></div>

              <span className="card-title">Porsche 992 Cabrio</span>
              <img
                className="catalog-card-image"
                src="https://res.cloudinary.com/unix-center/image/upload/c_fill,dpr_auto,f_auto,fl_progressive,g_center,h_125,q_auto,w_315/v1580913291/ozwawbomlmkclzllldx1.png"
              />
            </div>
            <div className="catalog-card">
              <div className="catalog-card-clip"></div>

              <span className="card-title">Porsche 992 Cabrio</span>
              <img
                className="catalog-card-image"
                src="https://res.cloudinary.com/unix-center/image/upload/c_fill,dpr_auto,f_auto,fl_progressive,g_center,h_125,q_auto,w_315/v1580913291/ozwawbomlmkclzllldx1.png"
              />
            </div>
            <div className="catalog-card">
              <div className="catalog-card-clip"></div>

              <span className="card-title">Porsche 992 Cabrio</span>
              <img
                className="catalog-card-image"
                src="https://res.cloudinary.com/unix-center/image/upload/c_fill,dpr_auto,f_auto,fl_progressive,g_center,h_125,q_auto,w_315/v1580913291/ozwawbomlmkclzllldx1.png"
              />
            </div>
            <div className="catalog-card">
              <div className="catalog-card-clip"></div>

              <span className="card-title">Porsche 992 Cabrio</span>
              <img
                className="catalog-card-image"
                src="https://res.cloudinary.com/unix-center/image/upload/c_fill,dpr_auto,f_auto,fl_progressive,g_center,h_125,q_auto,w_315/v1580913291/ozwawbomlmkclzllldx1.png"
              />
            </div>
            <div className="catalog-card">
              <div className="catalog-card-clip"></div>

              <span className="card-title">Porsche 992 Cabrio</span>
              <img
                className="catalog-card-image"
                src="https://res.cloudinary.com/unix-center/image/upload/c_fill,dpr_auto,f_auto,fl_progressive,g_center,h_125,q_auto,w_315/v1580913291/ozwawbomlmkclzllldx1.png"
              />
            </div>
            <div className="catalog-card">
              <div className="catalog-card-clip"></div>

              <span className="card-title">Porsche 992 Cabrio</span>
              <img
                className="catalog-card-image"
                src="https://res.cloudinary.com/unix-center/image/upload/c_fill,dpr_auto,f_auto,fl_progressive,g_center,h_125,q_auto,w_315/v1580913291/ozwawbomlmkclzllldx1.png"
              />
            </div>
            <div className="catalog-card">
              <div className="catalog-card-clip"></div>

              <span className="card-title">Porsche 992 Cabrio</span>
              <img
                className="catalog-card-image"
                src="https://res.cloudinary.com/unix-center/image/upload/c_fill,dpr_auto,f_auto,fl_progressive,g_center,h_125,q_auto,w_315/v1580913291/ozwawbomlmkclzllldx1.png"
              />
            </div>
            <div className="catalog-card">
              <div className="catalog-card-clip"></div>

              <span className="card-title">Porsche 992 Cabrio</span>
              <img
                className="catalog-card-image"
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
