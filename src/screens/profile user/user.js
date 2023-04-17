import React , {useState} from "react";
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
import BoxField from "../Authentication/signup/components/boxField/boxField";
import Input from "../Authentication/components/input/input";

const User = () => {

  const [isPopupShown, setIsPopupShown] = useState(false);
  const showHidePopup = () => {
      setIsPopupShown(!isPopupShown);
  };

    function popup() {
        return <>
            <div id={styles.loginModal}>
                <div className={styles.modal}>
                    <div className={styles.header}>
                    <h5>Edit profile</h5>
                    <div onClick={showHidePopup} className={styles.close}>x</div>
                    </div>
                    <form className={styles.edit}>
                      <Input
                        label={"First Name"}
                        small={false}
                        name={"first name"}
                        type={"text"}
                      />
                      <br></br>
                      <Input
                        label={"Last Name"}
                        small={false}
                        name={"last name"}
                        type={"text"}
                      />
                      <br></br>
                      <Input
                        label={"Education"}
                        small={false}
                        name={"education"}
                        type={"text"}
                      />
                      <br></br>
                      <Input
                        label={"Skills"}
                        small={false}
                        name={"skills"}
                        type={"text"}
                      />
                      <br></br>
                      <div className={styles.small}>
                        <Input
                        label={"Job Title"}
                        small={true}
                        name={"job title"}
                        type={"text"}
                      />
                      <br></br>
                      <Input
                        label={"Job Type"}
                        small={true}
                        name={"job type"}
                        type={"text"}
                      />
                      </div>
                      <br></br>
                      <div className={styles.small}>
                      <Input
                        label={"Country"}
                        small={true}
                        name={"country"}
                        type={"text"}
                      />
                      <br></br>
                      <Input
                        label={"City"}
                        small={true}
                        name={"city"}
                        type={"text"}
                      />
                      </div>
                      
                      
                    <button type='button' className={styles.save}>Save</button>
                    </form>
                    
                </div>
            </div>
        </>
    }

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
        <div className={styles.icons}>
        <img src={git} title="Github profile" className={styles.icon} />
        <img src={be} title="Behance profile" className={styles.icon} />
        <img src={cv} title="CV" className={styles.icon} />
        </div>
        <div className={styles.connections}>
        
        <img src={pen} title="edit" onClick={showHidePopup} className={styles.penimg} />
        
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

        </div>

        <div className={styles.sechalf}>
        <img src={iti} title="Information Technology Institute" className={styles.worksite4} />
        <div className={styles.worktext2}>Information Technology Institute</div>
        </div>
        </div>

        <br></br><br></br>
        {isPopupShown && popup()}
      </div>
    );

  };
  
  export default User;