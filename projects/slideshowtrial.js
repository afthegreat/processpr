import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
function Slideshowtrial() {
  return (
    <div class="px-3 py-2 text-bg-dark border-bottom">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
          >
            <svg
              class="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <use xlink:href="#bootstrap" />
            </svg>
          </a>

          <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <a href="#" class="nav-link text-secondary">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24">
                  <use xlink:href="#home" />
                </svg>
                Home
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24">
                  <use xlink:href="#speedometer2" />
                </svg>
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24">
                  <use xlink:href="#table" />
                </svg>
                Orders
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24">
                  <use xlink:href="#grid" />
                </svg>
                Products
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24">
                  <use xlink:href="#people-circle" />
                </svg>
                Customers
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Slideshowtrial;
