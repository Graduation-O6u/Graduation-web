import React from "react";
import styles from "../welcome.module.css";
import { useNavigate } from "react-router-dom";
import Logo from "../../../../components/logo/logo";

const Navbar = () => {
  const navigate = useNavigate();
  function loginClick() {
    navigate("/login");
  }
  function signupClick() {
    navigate("/signup");
  }
  return (
    <nav className={styles.navbar}>
      <Logo />
      <ul className={styles.navLink}>
        <div className={styles.nonBut}>
          <li>
            <a href="#home" className={styles.home}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className={styles.aboutus}>
              About Us
            </a>
          </li>
          <li>
            <a href="#contact" className={styles.contact}>
              Contact Us
            </a>
          </li>
        </div>
        <div className={styles.butt}>
          <button className={styles.login} onClick={loginClick}>
            login
          </button>
          <button className={styles.signup} onClick={signupClick}>
            sign up
          </button>
        </div>
      </ul>
    </nav>
  );
};
export default Navbar;
