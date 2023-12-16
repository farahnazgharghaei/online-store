// import "./Header.css";
import { NavLink } from "react-router-dom";

function Header({ logo }) {
  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul className="navbar-nav">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <h3>{logo}</h3>
            </a>
            <li className="nav-item m-1">
              <NavLink className="btn btn-dark btn-outline-placeholder" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item m-1">
              <NavLink
                className="btn btn-dark btn-outline-placeholder"
                to="/login"
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item m-1">
              <NavLink
                type=""
                className="btn btn-dark btn-outline-placeholder"
                to="/user"
              >
                User
              </NavLink>
            </li>
            <li>
              <form 
                className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
                role="search"
              >
                
                <input
                  type="search"
                  className="form-control form-control-dark text-bg-dark"
                  placeholder="Search..."
                  aria-label="Search"
                />
              </form>
            </li>
            <li className="nav-item m-1">
              <NavLink
                className="btn btn-dark btn-outline-placeholder"
                to="/login"
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item m-1">
              <NavLink
                className="btn btn-warning btn-outline-placeholder"
                to="/signup"
              >
                Sign-up
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
