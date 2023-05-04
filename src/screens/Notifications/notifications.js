import React from 'react';
import Nav from "./components/navbar" ;
import Notification from "./components/notfiications"
import styles from "./notfications.module.css"
function Navbarr() {
  return (
 <div>
    <Nav />
     <div className={styles.body_notif}>
    <Notification/>
  </div>
  </div>
  )
}
 export default Navbarr;