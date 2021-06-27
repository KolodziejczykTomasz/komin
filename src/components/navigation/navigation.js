import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import "./navigation.css";

const Navigation = () => (
  <>
    <div class="navbar_brand">
      <div class="navi_Title_Start">
        <span style={{ paddingRight: "10px" }}>Zakład Usług Kominiarskich</span>{" "}
        <span style={{ color: "#d2ad36" }}>Andrzej Jankowski</span>
      </div>
      <div class="navi_Title_End">+ 48 89 767 00 00</div>
    </div>

    <nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
      <div class="navbar-toggler-right">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>

      <div class="collapse navbar-collapse flex-column" id="navbar">
        <ul
          class="navbar-nav  w-100 justify-content-center"
          style={{ marginTop: "20px" }}
        >
          <li class="nav-item active ">
            <Link to="/" class="nav-link">
              Strona główna
            </Link>
          </li>
          <li class="nav-item active">
            <Link to="/" class="nav-link">
              Firma
            </Link>
          </li>
          <li
            class="Logo"
            style={{
              marginTop: "-12px",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            <img class="Logo" src={Logo} alt="Logo" width="80" height="74" />
          </li>
          <li class="nav-item active">
            <Link to="/" class="nav-link">
              Oferta
            </Link>
          </li>
          <li class="nav-item active">
            <Link to="/" class="nav-link">
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </>
);

export default Navigation;
