import { React , useState } from "react";
import styles from "../meetings/meetings.module.css"
import NavbarHome from "../.././Authentication/homePage/components/Navbar-home" ;
import line from "../../../images/H-line.png";  
import logo from "../../../images/logo.png";
import egypt2 from "../../../images/egypt2.png";
import deleter from "../../../images/delete.png";
import deletere from "../../../images/deleter.png";
import cancel from "../../../images/Cancel.png";
import delete2 from "../../../images/delete2.png";
import meet from "../../../images/meet.png";



const Meetings = () => {


  const [isPopupShown, setIsPopupShown] = useState(false);
  const showHidePopup = () => {
        setIsPopupShown(!isPopupShown);
    };

  const [isPopupShown2, setIsPopupShown2] = useState(false);
  const showHidePopup2 = () => {
        setIsPopupShown2(!isPopupShown2);
    };

  const [isPopupShown3, setIsPopupShown3] = useState(false);
  const showHidePopup3 = () => {
        setIsPopupShown3(!isPopupShown3);
    };

  const [isPopupShown4, setIsPopupShown4] = useState(false);
  const showHidePopup4 = () => {
        setIsPopupShown4(!isPopupShown4);
    };

    

    function popupdel() {
      return <>
          <div id={styles.loginModal}>
              <div className={styles.modal2}>
                <div className={styles.message}>
                  <h2 className={styles.H3}>Are You Sure ?</h2>
                  <h3 className={styles.H6}>Do You Want to delete this job ?</h3>
                </div>
                <div className={styles.buttons}>
                <img src={deletere} onClick={showHidePopup} className={styles.deleter}></img>
                <img src={cancel} onClick={showHidePopup} className={styles.cancel}></img>
                </div>
              </div>
          </div>
      </>
  }

    function popupdel2() {
      return <>
          <div id={styles.loginModal}>
              <div className={styles.modal2}>
                <div className={styles.message}>
                  <h2 className={styles.H3}>Are You Sure ?</h2>
                  <h3 className={styles.H6}>Do You Want to delete this user ?</h3>
                </div>
                <div className={styles.buttons}>
                <img src={deletere} onClick={showHidePopup4} className={styles.deleter}></img>
                <img src={cancel} onClick={showHidePopup4} className={styles.cancel}></img>
                </div>
              </div>
          </div>
      </>
  }

    function popupmeet() {
      return <>
          <div id={styles.loginModal}>
              <div className={styles.modal3}>
              <div onClick={showHidePopup2} className={styles.close}>X</div>
              <label className={styles.meetlbl} for="start">Choose Meeting Day</label>

              <input className={styles.calendar} type="date" id="start" name="trip-start"
               ></input>
               <button onClick={showHidePopup3} className={styles.time}>Choose Time</button>
              </div>
          </div>
      </>
  }
    function popupclock() {
      return <>
          <div id={styles.loginModal}>
              <div className={styles.modal3}>
              <div onClick={showHidePopup3} className={styles.close}>X</div>
              <label className={styles.meetlbl} for="start">Choose Meeting Time</label>

              <input className={styles.calendar} type="time" id="start" name="appt"
               ></input>
               <button onClick={showHidePopup3}  className={styles.time}>Done</button>
              </div>
          </div>
      </>
  }

    return (
      <div className={styles.body}>
        < NavbarHome />
        <div className={styles.applyline}>
        <h2 className={styles.H2}> Apply Jobs </h2>
        <img src={line} className={styles.line} />
        </div>
        <img src={logo} className={styles.logo} />
        <h4 className={styles.H4}>Microsoft</h4>
        <img src={deleter} onClick={showHidePopup} className={styles.delete} />
        <h4 className={styles.h4}>Egypt</h4>
        <img src={egypt2} className={styles.egypt2} />

        <div className={styles.boxes}>
          <div className={styles.greybox}>
            <img onClick={showHidePopup2} src={meet} className={styles.meet} />
            <img onClick={showHidePopup4} src={delete2} className={styles.delete2} />
          </div>
          <div className={styles.greybox}>
            <img onClick={showHidePopup2} src={meet} className={styles.meet} />
            <img onClick={showHidePopup4} src={delete2} className={styles.delete2} />
          </div>
          <div className={styles.greybox}>
            <img onClick={showHidePopup2} src={meet} className={styles.meet} />
            <img onClick={showHidePopup4} src={delete2} className={styles.delete2} />
          </div>
          <div className={styles.greybox}>
            <img onClick={showHidePopup2} src={meet} className={styles.meet} />
            <img onClick={showHidePopup4} src={delete2} className={styles.delete2} />
          </div>
          <div className={styles.greybox}>
            <img onClick={showHidePopup2} src={meet} className={styles.meet} />
            <img onClick={showHidePopup4} src={delete2} className={styles.delete2} />
          </div>
          <div className={styles.greybox}>
            <img onClick={showHidePopup2} src={meet} className={styles.meet} />
            <img onClick={showHidePopup4} src={delete2} className={styles.delete2} />
          </div>
          <div className={styles.greybox}>
            <img onClick={showHidePopup2} src={meet} className={styles.meet} />
            <img onClick={showHidePopup4} src={delete2} className={styles.delete2} />
          </div>
          <div className={styles.greybox}>
            <img onClick={showHidePopup2} src={meet} className={styles.meet} />
            <img onClick={showHidePopup4} src={delete2} className={styles.delete2} />
          </div>
          <div className={styles.greybox}>
            <img onClick={showHidePopup2} src={meet} className={styles.meet} />
            <img onClick={showHidePopup4} src={delete2} className={styles.delete2} />
          </div>
          <div className={styles.greybox}>
            <img onClick={showHidePopup2} src={meet} className={styles.meet} />
            <img onClick={showHidePopup4} src={delete2} className={styles.delete2} />
          </div>
          <div className={styles.greybox}>
            <img onClick={showHidePopup2} src={meet} className={styles.meet} />
            <img onClick={showHidePopup4} src={delete2} className={styles.delete2} />
          </div>
          <div className={styles.greybox}>
            <img onClick={showHidePopup2} src={meet} className={styles.meet} />
            <img onClick={showHidePopup4} src={delete2} className={styles.delete2} />
          </div>
          
        </div>
        
      {isPopupShown && popupdel()}
      {isPopupShown2 && popupmeet()}
      {isPopupShown3 && popupclock()}
      {isPopupShown4 && popupdel2()}

      </div>
    );
  };
  
  export default Meetings;