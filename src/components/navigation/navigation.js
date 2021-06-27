import React from "react";
import Logo from "../../assets/images/logo.png";
import "./navigation.css";

const Navigation = () => (
<>
    <div class="navbar_brand">
      <div class="navi_Title_Start">
        <span style={{paddingRight: "10px"}}>Zakład Usług Kominiarskich</span> <span>Andrzej Jankowski</span>
      </div>
      <div class="navi_Title_End">89 767 00 00</div>
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

      <div
        class="collapse navbar-collapse flex-column"
        id="navbar"
      >
        <ul class="navbar-nav  w-100 justify-content-center" style={{marginTop: "20px"}}>
          <li class="nav-item active ">
            <a class="nav-link" href="#">
              Strona główna
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">
              O mnie
            </a>
          </li>
          <li class="Logo" style={{marginTop: "-12px", marginLeft: "10px", marginRight: "10px"}}>
            <img class="Logo" src={Logo} alt="Logo" width="80" height="74" />
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
      </div>
    </nav>
  </>
);

export default Navigation;
