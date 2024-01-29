import React from "react";
import styles from "../styles/image.module.css"; // Import your CSS module for styling

const ImageGallery = ({ images }) => {
  // const displayedImages = images.slice(0, 6);

  return (
    <div className={styles.imageGallery}>
      {images.map(({ img }) => (
        <div className={styles.imageItem}>
          <img src={img} alt={`Image `} className={styles.image} />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
