import React from "react";
import Navbar from "./components/navbar";
import Text from "./components/text";
import Search from "./components/search";
import Boximage from "./components/box-image";
import Social from "./components/social/social";
import Text2 from "./components/text2";
import Steps from "./components/social/steps";
import Half from "./components/half";
import Last from "./components/last";
import Footer from "./components/footer";
import Download from "./components/download";
import styles from "./welcome.module.css";
const Welcome = () => {
  return (
    <>
      <div className={styles.App}>
        <div id="home">
          <Navbar />
          <div className={styles.bb}>
            <Text />
            <Boximage />
          </div>
          <Search />
        </div>
        <div id="about">
          <Social />
          <Text2 />
          <Steps />
          <Half />
          <Last />
        </div>
        <div id="contact">
          <Footer />
          <Download />
        </div>
      </div>
    </>
  );
};
export default Welcome;
