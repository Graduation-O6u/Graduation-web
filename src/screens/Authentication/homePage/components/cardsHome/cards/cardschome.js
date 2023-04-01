import React, { useState } from "react";
import OR from "../../../../components/or/or"
import styles from "./cardshome.module.css"
import "../sectionCards.css"
import { Icon } from '@iconify/react';
// import "./cardshome.css"
const joblist = [{"price":"$1000K / Year"}, {"price":"$500K / Year"} , {"price":"$5000K / Year"} ]
const Luxury = () => {
    const [isActive1, setIsActive1] = useState(false);
return (
    <div className={styles.luxury}>
        <div className={styles.container}>
            { joblist.map(( x )=>{
                return(
                    <div className={styles.card} >
            <div style={{ position:"relative" , width:"100%", }}>
                <div className="title-box">Senior Product Designer</div>
                {isActive1? <Icon icon="ic:baseline-bookmark" className="icon-mark"  onClick={()=>{
                setIsActive1(!isActive1)}}/>:
                <Icon icon="ri:bookmark-line" className="icon-mark"  onClick={()=>{
                    setIsActive1(!isActive1)}} />
            }
            </div>
        <div className="butt-box">
            <button>Hybrid</button>
            <button>Part-time</button>
        </div>
        <div className="butt-box" >
            <button >{x.price}</button>
        </div>
        <OR title="1 hour ago" job="true" />
        <div className="company-box">
            <Icon icon="logos:microsoft-icon" className="mic" />
            <p className="micro">Microsoft</p>
        </div>
        </div> 
            )} ) }
    
        </div>
    </div>
)
}

export default Luxury