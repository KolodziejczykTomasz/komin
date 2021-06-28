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
          </span>{" "}
          <span style={{ color: "#d2ad36" }}>Andrzej Jankowski</span>
        </div>
        <div class="navi_Title_End">+ 48 89 767 00 00</div>
      </div>

      <nav
        class="navbar navbar-expand-md navbar-dark bg-dark sticky-top"
        role="navigation"
      >
        <div class="navbar-toggler-right">
          <button          
            class="navbar-toggler burger"
            type="button"
            data-toggle="collapse"
            data-target="#NavCollapse"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>

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
      </nav>
    </>
  );};

export default Navigation;
