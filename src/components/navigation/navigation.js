import React from "react";
import "./navigation.css";

const Navigation = () => (
  <>
    <div class="navbar-brand">
      <span class="Navi_Title_Start">
        Zakład Usług Kominiarskich Andrzej Jankowski
      </span>
      <span class="Navi_Title_End">
        89 767 00 00
      </span>
    </div>

    <nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
      <div class="navbar-toggler-right">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>

      <div class="collapse navbar-collapse flex-column " id="navbar">
        <ul class="navbar-nav  w-100 justify-content-center px-3">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Strona główna
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">
              O mnie
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Oferta
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Kontakt
            </a>
          </li>
        </ul>

        <ul class="navbar-nav justify-content-center w-100 bg-secondary px-3">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </>
);

export default Navigation;
