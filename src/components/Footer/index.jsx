import React from "react";
import { NavLink } from "react-router-dom";

function Footer({ links }) {
  return (
    // <div className="container" >
    //   <footer className="py-3 my-4">
    //     <ul className="nav justify-content-center border-bottom pb-3 mb-3">
    //       <li className="nav-item">
    //         <a href="#" className="nav-link px-2 text-body-secondary">
    //           {links[0]}
    //         </a>
    //       </li>
    //       <li className="nav-item">
    //         <a href="#" className="nav-link px-2 text-body-secondary">
    //           {links[1]}
    //         </a>
    //       </li>
    //       <li className="nav-item">
    //         <a href="#" className="nav-link px-2 text-body-secondary">
    //           {links[2]}
    //         </a>
    //       </li>
    //       <li className="nav-item">
    //         <a href="#" className="nav-link px-2 text-body-secondary">
    //           {links[3]}
    //         </a>
    //       </li>
    //     </ul>
    //     <p className="text-center text-body-secondary">© 2023 Company, Inc</p>
    //   </footer>
    // </div>
    <footer className="p-3 text-bg-dark">
      <div className="container">
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul className="navbar-nav">
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
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
