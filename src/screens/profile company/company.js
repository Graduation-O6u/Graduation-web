import React from "react";
import cover from "../../images/microsoft-cover.png";
import logo from "../../images/microsoft-logo.png";  
import arrows from "../../images/arrows.png";  
import connection from "../../images/connection.png";
import styles from "../profile company/company.module.css";

const Company = () => {
    return (
      <div className={styles.body}>
        <img src={cover} title="Company Cover" className={styles.coverimg} />
        <div className={styles.container}>
        <img src={logo} title="Company logo" className={styles.logoimg} />
        <h4 className={styles.H4}>Microsoft</h4>
        <h6 className={styles.H6}>Software Development</h6>
        <div className={styles.followers}>
            100<br></br> <h6 className={styles.h6}>Followers</h6>
        </div>

        <div className={styles.connections}>
        <img src={connection} title="Connections" className={styles.connectionimg} />
        <img src={connection} title="Connections" className={styles.connectionimg} />
        <img src={connection} title="Connections" className={styles.connectionimg} />
        <h5 className={styles.H5} >10 Connections work here</h5>
        <button className={styles.follow}>Follow</button>
        </div>
        </div>

        <br></br>
        <img src={arrows} title="Career arrows" className={styles.arrowsimg} />
        <br></br><br></br>
        
        <div className={styles.container2}>
          <h5>About</h5>
          <p>a network of software development job openings to assist developers in finding a job and company that they enjoy. We understand how difficult it can be to find the right job, especially if you don't know where to begin looking.</p>
        </div>

        <br></br>

        <div className={styles.container3}>
          <div>
            <p>Marketing value <br></br> <span className={styles.Span}>$263.10</span></p>
            </div>
          <div><p>History<br></br> <span className={styles.Span}>2007</span></p></div>
          <div><p>Website<br></br><a href="#URL">URL</a></p></div>
        </div>

        <br></br><br></br>

        <div className={styles.container4}>
        <h5>Location</h5>
        <h6>• Nasr City</h6>
        <h6>• New Cairo City</h6>
        <h6>• 6th October City</h6>

        <div className={styles.viewmap}>
        <h6 ><a href="view in maps">View In Maps</a></h6>
        <h6 ><a href="view in maps">View In Maps</a></h6>
        <h6 ><a href="view in maps">View In Maps</a></h6>
        </div>

        </div>

        <br></br><br></br><br></br>

      </div>
    );
  };
  
  export default Company;