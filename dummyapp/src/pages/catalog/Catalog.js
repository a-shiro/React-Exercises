import "./Catalog.css";

const Catalog = () => {
  const filtersWrapper = document.querySelector(".filters-wrapper");
  const typeDropdownList = document.querySelector(".type-filter ul");
  const brandDropdownList = document.querySelector(".brand-filter ul");

  const toggleFiltersVisibility = () => {
    filtersWrapper.classList.toggle("visible");
  };

  const toggleDropdownVisibility = (e) => {
    const list = document.querySelector(
      `.${e.target.parentElement.className} ul`
    );

    if (list === typeDropdownList) {
      brandDropdownList.classList.remove("visible");
      typeDropdownList.classList.toggle("visible");
      return;
    }

    typeDropdownList.classList.remove("visible");
    brandDropdownList.classList.toggle("visible");
  };

  const clickHandler = (e) => {
    const nameDisplay = e.target.parentElement.parentElement.children[1];

    // ToDo: Add filtered query to DB

    nameDisplay.textContent = e.target.textContent;
    typeDropdownList.classList.remove("visible");
    brandDropdownList.classList.remove("visible");
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
                className="filter-button"
                onClick={toggleDropdownVisibility}
              >
                All Cars
              </button>
              <ul onClick={clickHandler} className="filter-ul">
                <li>All cars</li>
                <li>Convertible</li>
                <li>SUV</li>
                <li>Sports car</li>
                <li>Hyper car</li>
                <li>Luxury Sedan</li>
              </ul>
            </div>

            <div className="brand-filter">
              <span>Brand</span>
              <button
                className="filter-button"
                onClick={toggleDropdownVisibility}
              >
                All brands
              </button>
              <ul onClick={clickHandler} className="filter-ul">
                <li>All brands</li>
                <li>Porsche</li>
                <li>Lamborghini</li>
                <li>Ferrari</li>
                <li>Bentley</li>
                <li>McLaren</li>
              </ul>
            </div>

            <div>
              <span>Price range</span>
              <div>
                <input
                  name="priceRangeFrom"
                  type="number"
                  placeholder="from $"
                />
                <input name="priceRangeTo" type="number" placeholder="to $" />
              </div>
            </div>
            <div>
              <span>Horse power</span>
              <div>
                <input defaultValue={150} type="number" />
                <input defaultValue={1500} type="number" />
              </div>
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
