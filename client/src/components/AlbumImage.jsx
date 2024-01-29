import React from "react";
import classroom from "../assets/sugunu.jpg";
function AlbumImage() {
  return (
    <div>
      <section style={{ margin: "4rem" }} class="">
        <div class="col-lg-4 col-md-12 mt-3 mb-4 mb-lg-0">
          <button
            style={{
              background: "none",
              border: "none",
              position: "relative",
            }}
            class="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <img
              src={classroom}
              class="w-100"
              alt="random"
              style={{ opacity: 0.7 }}
            />
          </button>
        </div>
      </section>
    </div>
  );
}

export default AlbumImage;
