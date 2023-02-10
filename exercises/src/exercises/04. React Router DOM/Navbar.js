import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <BrowserRouter>
      <nav>
        <div>
          <Link to="/exercise11.1">Exercise 11.1</Link>
          <Link to="/exercise11.2">Exercise 11.2</Link>
          <Link to="/exercise11.3">Exercise 11.3</Link>
        </div>
        <Routes>
          <Route
            path="/exercise11.1"
            element={<PageContent exerciseVersion="11.1" />}
          />
          <Route
            path="/exercise11.2"
            element={<PageContent exerciseVersion="11.2" />}
          />
          <Route
            path="/exercise11.3"
            element={<PageContent exerciseVersion="11.3" />}
          />
        </Routes>
      </nav>
    </BrowserRouter>
  );
};

const PageContent = (props) => {
  return <h1>This is the page for exercise {props.exerciseVersion}</h1>;
};
