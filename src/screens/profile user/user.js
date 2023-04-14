import React , {useState} from "react";
import cover from "../../images/user-cover.png";
import profile from "../../images/profile-pic.png";  
import camera from "../../images/camera.png";  
import egypt from "../../images/egypt.png";  
import pen from "../../images/pen.png";  
import o6u from "../../images/o6u.png";
import iti from "../../images/iti.png";
import share from "../../images/share.png";  
import connection from "../../images/connection.png";
import styles from "../profile user/user.module.css";

const User = () => {

    return (
      <div className={styles.body}>
        <div className={styles.allcontainer}>
        <img src={camera} title="Change Cover" className={styles.camera} />
        <img src={cover} title="Profile Cover" className={styles.coverimg} />
        <div className={styles.container}>
        <img src={profile} title="Profile Picture" className={styles.profileimg} />
        <h4 className={styles.H4}>Andro Smith</h4>
        <img src={egypt} title="From Egypt" className={styles.country} />
        <h5 className={styles.h5}>6th of October, cairo, Egypt</h5>

        <div className={styles.connections}>
        <img src={connection} title="Connections" className={styles.connectionimg} />
        <img src={connection} title="Connections" className={styles.connectionimg} />
        <img src={connection} title="Connections" className={styles.connectionimg} />
        <h6 className={styles.h6} >10 Connections work here</h6>
        <img src={pen} title="edit" className={styles.penimg} />
        <div className={styles.followers}>
            100<h6 className={styles.hi6}>Followers</h6>
        </div>
        <div className={styles.following}>
            150<h6 className={styles.hi6}>Following</h6>
        </div>

        <img src={o6u} title="October 6 Universtiy" className={styles.worksite} />
        <h6 className={styles.o6utext} >October 6 University</h6>
        <h5 className={styles.worktext} >Senior Product Designer</h5><span className={styles.time}>- Full-time</span>
        <img src={share} title="Share profile" className={styles.share} />
        </div>

        </div>
        </div>
        <br></br>
        
        <div className={styles.container2}>
          <h5>Skills</h5>
          <div className={styles.skill}>UI Design</div>
          <div className={styles.skill}>Front End</div>
          <div className={styles.skill}>Back End</div>
          <div className={styles.skill}>TypeScript</div>
          <div className={styles.skill}>Product Design</div>
          <div className={styles.skill}>Design Strategy</div>
        </div>

        <br></br>

        <div className={styles.container3}>
        <h5>Education</h5>
        <img src={o6u} title="October 6 Universtiy" className={styles.worksite2} />
        <div className={styles.details}>
            October 6 University
        <br></br>
        Master of Computer Science - MCS
        <br></br>
        2019
        </div>
        </div>

        <br></br>

        <div className={styles.container4}>
        <h5>Interests</h5>
        <div className={styles.firsthalf}>
        <img src={o6u} title="October 6 Universtiy" className={styles.worksite3} />
        <div className={styles.o6utext2}>October 6 University</div>
        <button className={styles.follow}>Follow</button>
        </div>

        <div className={styles.sechalf}>
        <img src={iti} title="October 6 Universtiy" className={styles.worksite4} />
        <div className={styles.worktext2}>Information Technology Institute</div>
        <button className={styles.follow2}> &#10003; Following</button>
        </div>
        </div>

        <br></br><br></br>
      </div>
    );

  };
  
  export default User;