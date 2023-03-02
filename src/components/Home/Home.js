import React from 'react';
import Navbar from "./parts/navbar";
import Text from './parts/text';
import Search from "./parts/search";
import Boximage from "./parts/box-image";
import Social from "./parts/social/social";
import Text2 from './parts/text2';
import Steps from "./parts/social/steps";
import Half from "./parts/half";
import Last from "./parts/last";
import Footer from "./parts/footer";
import Download from "./parts/download";
import styles from "./Home.module.css"
const Home = () => {
  return (
    <>
      <div className={styles.App}>
        <div id="home">
          <Navbar />
          <div className={styles.bb}>
            <Text />
            < Boximage />
          </div>
          <Search />
        </div>
        <div id="about">
          <Social />
          <Text2 />
          < Steps />
          < Half />
          < Last />
        </div>
        <div id='contact'>
          < Footer />
          < Download />
        </div>
      </div>
    </>
  );
};
export default Home;
