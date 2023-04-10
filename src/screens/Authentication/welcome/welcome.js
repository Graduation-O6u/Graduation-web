import React from "react";
import Navbar from "./components/navbarwe";
import LeftSection  from "./components/boxsection"
import styles from "./welcome.css";
import RightSection from "./components/box-image"
import Social from "./components/social";
import Text2 from "./components/text2";
import Steps from "./components/steps";
import Half from "./components/half";
import Last from "./components/last";
import Footer from "./components/footerwe";
const Welcome = () => {
    return (
        <>
        <div style={{ background:"#f7f7f7f7"}}>
            <div id="welcome">
                <Navbar />
                <div className="section1">
                    <LeftSection />
                    <RightSection />
                </div>
            </div>
            <div id="about">
                <Social />
                <Text2 />
                <Steps />
                <Half />
                <Last />
            </div>
            <div id="contact ">
                <Footer />
            </div>
        </div>
    </>
    );
};
export default Welcome;