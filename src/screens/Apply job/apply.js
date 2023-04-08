import React from "react";
import styles from "../Apply job/apply.module.css"
import NavbarHome from ".././Authentication/homePage/components/Navbar-home" ;
import line from "../../images/H-line.png";  
import logo from "../../images/logo.png";  
const Apply = () => {
    return (
      <div className={styles.body}>
        < NavbarHome />
        <div className={styles.applyline}>
        <h2 className={styles.H2}> Apply Jobs </h2>
        <img src={line} className={styles.line} />
        </div>
        <img src={logo} className={styles.logo} />
        <h4 className={styles.H4}>Microsoft</h4>

      <div className={styles.pcontainer}>
        <div className={styles.plang}>Reactjs</div>
        <div className={styles.plang}>Pugjs</div>
        <div className={styles.plang}>Angularjs</div>
        <div className={styles.plang}>PHP</div>
        <div className={styles.plang}>Javascript</div>
       
        <div className={styles.plang}>TypeScript</div>
        <div className={styles.plang}>C++</div>
        <div className={styles.plang}>C#</div>
        <div className={styles.plang}>Python</div>
        <div className={styles.plang}>Django</div>
        
        <div className={styles.plang}>Nodejs</div>
        <div className={styles.plang}>Viewjs</div>
        <div className={styles.plang}>Ruby</div>
        <div className={styles.plang}>.Net</div>
        <div className={styles.plang}>Kotlin</div>
      </div>  
      <br></br><br></br>
      <div className={styles.para}> <p>a network of software development job openings to assist developers in finding a job and company that they enjoy. We understand how difficult it can be to find the right job, especially if you don't know where 
                                        to begin looking. That is why we created I Need Dev,
                                        a one-stop shop for all software development requirements. And we are not limited to a specific location.</p></div>
      
      <button className={styles.submit}>Submit Application</button>
      
      </div>
    );
  };
  
  export default Apply;