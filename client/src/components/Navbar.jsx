import React from "react";
import styles from "../styles/navbar.module.css";

function Navbar() {
  return (
    <nav
      className={`${styles.navbar} navbar navbar-expand-lg navbar-dark bg-primary`}
    >
      <a className={`${styles.navbarBrand} navbar-brand`} href="/">
        Logo
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse ${styles.navbarCollapse}`}
        id="navbarNav"
      >
        <ul className={`navbar-nav ${styles.navbarNav}`}>
          <li className={`nav-item active ${styles.navItem}`}>
            <a className={`nav-link ${styles.navLink}`} href="/">
              Home Page
            </a>
          </li>
          <li className={`nav-item ${styles.navItem}`}>
            <a className={`nav-link ${styles.navLink}`} href="/">
              About
            </a>
          </li>
          <li className={`nav-item ${styles.navItem}`}>
            <a className={`nav-link ${styles.navLink}`} href="/">
              Admission
            </a>
          </li>
          <li className={`nav-item ${styles.navItem}`}>
            <a className={`nav-link ${styles.navLink}`} href="/">
              Academics
            </a>
          </li>
          <li className={`nav-item ${styles.navItem}`}>
            <a className={`nav-link ${styles.navLink}`} href="/">
              Departments
            </a>
          </li>
          <li className={`nav-item ${styles.navItem}`}>
            <a className={`nav-link ${styles.navLink}`} href="/">
              Facilities
            </a>
          </li>
          <li className={`nav-item ${styles.navItem}`}>
            <a className={`nav-link ${styles.navLink}`} href="/">
              Gallery
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
