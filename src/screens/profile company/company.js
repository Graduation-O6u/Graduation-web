import React , {useState,useEffect} from "react";
import cover from "../../images/microsoft-cover.png";
import logo from "../../images/microsoft-logo.png";  
import arrows from "../../images/arrows.png";  
import styles from "../profile company/company.module.css";
import Input from "../Authentication/components/input/input";
import pen from "../../images/pen.png"; 
import Drop from "./Signup comapny/components/drop edit/drop";

const Company = () => {

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
                <div className={styles.small}>
                  <Input
                    label={"Country"}
                    small={true}
                    name={"country"}
                    type={"text"}
                  />
                  <br></br>
                  <Drop/>
                  </div>
                  <br></br>
                  <div className={styles.small}>
                  <Input
                    label={"Website Url"}
                    small={true}
                    name={"Url"}
                    type={"text"}
                  />
                  <br></br>
                  <Input
                    label={"Marketing Value"}
                    small={true}
                    name={"value"}
                    type={"text"}
                  />
                  </div>
                  <br></br>
                    <Input
                    label={"History"}
                    small={false}
                    name={"history"}
                    type={"text"}
                  />
                  <br></br>
                  <Input
                    label={"About"}
                    small={false}
                    name={"about"}
                    type={"text"}
                  />
                  <br></br>
                  


                <button type='button' className={styles.save}>Save</button>
                </form>

            </div>
        </div>
    </>
}

    return (
      <div className={styles.body}>
        <div className={styles.allcontainer}>
        <img src={cover} title="Company Cover" className={styles.coverimg} />
        <div className={styles.container}>
        <img src={logo} title="Company logo" className={styles.logoimg} />
        <h4 className={styles.H4}>Microsoft</h4>
        <h6 className={styles.H6}>Software Development</h6>
        <img src={pen} title="edit" onClick={showHidePopup} className={styles.penimg} />
        <div className={styles.followers}>
            100<br></br> <h6 className={styles.h6}>Views</h6>
        </div>

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
        {isPopupShown && popup()}
      </div>
    );
  };
  
  export default Company;