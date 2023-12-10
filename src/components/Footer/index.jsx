import React from "react";

function Footer({ links }) {
  return (
    <div class="container">
      <footer class="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-body-secondary">
              {links[0]}
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-body-secondary">
              {links[1]}
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-body-secondary">
              {links[2]}
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-body-secondary">
              {links[3]}
            </a>
          </li>
        </ul>
        <p class="text-center text-body-secondary">© 2023 Company, Inc</p>
      </footer>
    </div>
  );
}

export default Footer;
