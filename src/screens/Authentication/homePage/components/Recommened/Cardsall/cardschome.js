import React, { useState } from "react";
import styles from "./cardshome.module.css"
import { Icon } from '@iconify/react';
const Luxury = () => {
    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
return (
    <div className={styles.luxury}>
        <div className={styles.container}>
        <div className={styles.card}>
            <div className="title-box">Senior Product Designer</div>
        <div className="butt-box">
            <button>Hybrid</button>
            <button>Part-time</button>
        </div>
        <div className="butt-box">
            <h4>$5000K / Year</h4>
            {isActive2? <Icon icon="ic:baseline-bookmark" className="icon-mark"  onClick={()=>{
                setIsActive2(!isActive2)}}/>:
                <Icon icon="ri:bookmark-line" className="icon-mark"  onClick={()=>{
                    setIsActive2(!isActive2)}} />
            }
        </div>
        <div className="butt-box" >
            <hr className="line"></hr>
            <Icon icon="ic:round-arrow-right-alt" className="icon-arrow"/>
            <p className="hour">1 Hour ago</p>
        </div>
        <div className="company-box">
            <Icon icon="logos:microsoft-icon" className="mic" />
            <p className="micro">Microsoft</p>
        </div>
        </div>
        <div className={styles.card}>
            <div className="title-box">Senior Product Designer</div>
            <div className="butt-box">
                <button>Hybrid</button>
                <button>Part-time</button>
            </div>
        <div className="butt-box">
            <h4>$5000K / Year</h4>
            {isActive3? <Icon icon="ic:baseline-bookmark" className="icon-mark"  onClick={()=>{
                setIsActive3(!isActive3)}}/>:
                <Icon icon="ri:bookmark-line" className="icon-mark"  onClick={()=>{
                    setIsActive3(!isActive3)}} />
            }
        </div>
        <div className="butt-box" >
            <hr className="line"></hr>
            <Icon icon="ic:round-arrow-right-alt" className="icon-arrow"/>
            <p className="hour">1 Hour ago</p>
        </div>
        <div className="company-box">
            <Icon icon="logos:microsoft-icon" className="mic" />
            <p className="micro">Microsoft</p>
        </div>
        </div>
        
        </div>
    </div>
)
}

export default Luxury