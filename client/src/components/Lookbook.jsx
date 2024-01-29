import React from "react";
import styles from "../styles/lookbook.module.css";
import { useNavigate } from "react-router-dom";

function Lookbook() {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <section class="">
      <section class="">
        <div class="row">
          <div class="col-lg-4 col-md-12 mt-2 mb-4 mb-lg-0">
            <button
              onClick={handleClick}
              class="bg-image hover-overlay ripple shadow-1-strong rounded"
              data-ripple-color="light"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/screens/yt/screen-video-1.webp"
                class="w-100"
                alt="random"
              />
            </button>
          </div>

          <div class="col-lg-4 mt-2 mb-4 mb-lg-0">
            <div
              class="bg-image hover-overlay ripple shadow-1-strong rounded"
              data-ripple-color="light"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/screens/yt/screen-video-2.webp"
                class="w-100"
                alt="random"
              />
            </div>
          </div>

          <div class="col-lg-4 mt-2 mb-4 mb-lg-0">
            <div
              class="bg-image hover-overlay ripple shadow-1-strong rounded"
              data-ripple-color="light"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/screens/yt/screen-video-3.webp"
                class="w-100"
                alt="random"
              />
            </div>
          </div>
          <div class="col-lg-4 mt-2 mb-4 mb-lg-0">
            <div
              class="bg-image hover-overlay ripple shadow-1-strong rounded"
              data-ripple-color="light"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/screens/yt/screen-video-3.webp"
                class="w-100"
                alt="random"
              />
            </div>
          </div>
          <div class="col-lg-4 mt-2 mb-4 mb-lg-0">
            <div
              class="bg-image hover-overlay ripple shadow-1-strong rounded"
              data-ripple-color="light"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/screens/yt/screen-video-3.webp"
                class="w-100"
                alt="random"
              />
            </div>
          </div>
          <div class="col-lg-4 mt-2 mb-4 mb-lg-0">
            <div
              class="bg-image hover-overlay ripple shadow-1-strong rounded"
              data-ripple-color="light"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/screens/yt/screen-video-3.webp"
                class="w-100"
                alt="random"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Lookbook;
