import React from "react";

export const Navigation = () => (
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="collapse navbar-collapse flex-column align-items-center"
        id="navbarCollapse"
      >
        <div class="navbar-nav mb-lg-0">
          <a class="nav-item nav-link" href="#">
            (00) 1234567
          </a>
        </div>

        <ul class="navbar-nav mt-0">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Features
            </a>
          </li>
          <div>
            <a class="navbar-brand" href="#">
              <img
                src="https://picsum.photos/140/70"
                width="140"
                height="30"
                alt="Logo"
              />
            </a>
          </div>

          <li class="nav-item">
            <a class="nav-link" href="#">
              Free Cookies
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);