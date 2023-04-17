import React , {useState,useEffect} from "react";
import cover from "../../images/user-cover.png";
import profile from "../../images/profile-pic.png";  
import camera from "../../images/camera.png";  
import egypt from "../../images/egypt.png";  
import pen from "../../images/pen.png";  
import o6u from "../../images/o6u.png";
import iti from "../../images/iti.png";
import share from "../../images/share.png";  
import git from "../../images/git.png"
import be from "../../images/be.png"
import cv from "../../images/cv.png"
import styles from "../profile user/user.module.css";
import { Link } from "react-router-dom";

const User = () => {

  const [user, setUser] = useState({
    backgroundImage: cover,
    image:profile,
    name:"",
    city:"",
    github:"",
    behance:""
  });
  const [job, setJob] = useState({
    title:""
  });
  

  useEffect(() => {
    getProfileData();
  }, [])



    return (
      <div className={styles.body}>
        <div className={styles.allcontainer}>
        <img src={camera} title="Change Cover" className={styles.camera} />
        <img src={user.backgroundImage} title="Profile Cover" className={styles.coverimg} />
        <div className={styles.container}>
        <img src={user.image} title="Profile Picture" className={styles.profileimg} />
        <h4 className={styles.H4}> {user.name} </h4>
        <img src={egypt} title="From Egypt" className={styles.country} />
        <h5 className={styles.h5}> {user.city} </h5>
        <div className={styles.icons}>
        
        <Link to={user.github}>
          <img src={git} title="Change Cover" className={styles.icon} />
        </Link>
        <Link to={user.behance}>
        <img src={be} title="Change Cover" className={styles.icon} />
        </Link>
        <img src={cv} title="Change Cover" className={styles.icon} />
        </div>
       

        <div className={styles.connections}>
        
        <img src={pen} title="edit" className={styles.penimg} />
        
        <img src={o6u} title="October 6 Universtiy" className={styles.worksite} />
        <h6 className={styles.o6utext} >October 6 University</h6>
        <h5 className={styles.worktext} > {job.title} </h5><span className={styles.time}>- Full-time</span>
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

        </div>

        <div className={styles.sechalf}>
        <img src={iti} title="Information Technology Institute" className={styles.worksite4} />
        <div className={styles.worktext2}>Information Technology Institute</div>
        </div>
        </div>

        <br></br><br></br>
      </div>
    );
  //===============================================================================================================================

    function getProfileData(){
        const PROFILE_DATA_URL = "https://graduation-backend-production.up.railway.app/user";
        var token = localStorage.getItem("Access Token");

        fetch(PROFILE_DATA_URL, {
            method: "GET",
            headers: {
              "content-type": "application/json",
              "Authorization": "Bearer " + token
            },
          })
              .then((response) => response.json())
              .then((json) => onGetProfileData(json));
    }

    function onGetProfileData(json){
       // window.alert(json.data.user.email);
       setUser(json.data.user);
       setJob(json.data.user.job)
    }













  //===============================================================================================================================

  };
  
  export default User;