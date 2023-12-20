// import "./Header.css";
import { NavLink } from "react-router-dom";
// import cart from "../../assets/images/cart.svg"
import { BsCart3 } from "react-icons/bs";
function Header({ logo , totalQty}) {
  return (
    <header className="p-3 text-bg-dark">
      <div className="container ">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark  me-lg-auto mb-2 mb-md-0">
            <ul className="navbar-nav  nav col-12 col-lg-auto  ">
              <a
                href="/"
                className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
              >
                <h3>{logo}</h3>
              </a>
              <li className="nav-item m-1">
                <NavLink
                  className="btn btn-dark btn-outline-placeholder"
                  to="/"
                >
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
            </ul>
          </nav>

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

          <div className="ms-auto">
            <NavLink
              className="btn btn-dark btn-outline-placeholder me-2"
              to="/login"
            >
              Login
            </NavLink>

            <NavLink
              className="btn btn-warning btn-outline-placeholder"
              to="/signup"
            >
              Sign-up
            </NavLink>
          </div>
          <div className="cart ms-auto">
            <i class="bi bi-cart3"></i>
            <span className="bg-danger text-white p-2">{totalQty}</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
