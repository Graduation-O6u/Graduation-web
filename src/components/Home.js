import React from 'react';
import Navbar from "./home/navbar";
import Text from './home/text';
import Search from "./home/search";
import Boximage from "./home/box-image";
import Socail from "./home/social/socail";
import Text2 from './home/text2';
import Steps from "./home/social/steps";
import Half from "./home/half";
import Last from "./home/last";
import Footer from "./home/footer";
import Dawnload from "./home/download";
import "./Home.css"
const Home = () => {
  return (
    <>
      <div className="App">
        <div id="home">
          <Navbar />
          <div className="bb">
            <Text />
            < Boximage />
          </div>
          <Search />
        </div>
        <div id="about">
          <Socail />
          <Text2 />
          < Steps />
          < Half />
          < Last />
        </div>
        <div id='contact'>
          < Footer />
          < Dawnload />
        </div>
      </div>
    </>
  );
};
export default Home;
