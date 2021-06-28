import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Logo from "../../assets/images/logo.png";
import "./navigation.css";

const Navigation = () => {
  return (
    <>
      <div class="navbar_brand" id="home">
        <div class="navi_Title_Start">
          <span style={{ paddingRight: "10px" }}>
            Zakład Usług Kominiarskich
          </span>
          <span style={{ color: "#d2ad36" }}>Andrzej Jankowski</span>
        </div>
        <div class="navi_Title_End">+ 48 89 767 00 00</div>
      </div>

      <nav
        class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top"
        role="navigation"
      >
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#NavCollapser"
            aria-controls="NavCollapser"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse flex-column navbar-toggleable"
            id="NavCollapser"
          >
            <ul
              class="navbar-nav  nav-list nav w-100 justify-content-center"
              style={{ marginTop: "20px" }}
            >
              <li class="nav-item active ">
                <Link to={{ hash: "#home" }} class="nav-link">
                  Strona główna
                </Link>
              </li>
              <li class="nav-item active">
                <Link to={{ hash: "#about" }} class="nav-link">
                  Firma
                </Link>
              </li>
              <li
                class="logo-li"              
              >
                <img
                  class="Logo"
                  src={Logo}
                  alt="Logo"
                  width="80"
                  height="74"
                />
              </li>
              <li class="nav-item active">
                <Link to={{ hash: "#about" }} class="nav-link">
                  Oferta
                </Link>
              </li>
              <li class="nav-item active">
                <Link to={{ hash: "#contact" }} class="nav-link">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
