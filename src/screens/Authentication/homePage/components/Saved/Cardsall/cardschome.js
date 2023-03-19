import React, { useState } from "react";
import styles from "./cardshome.module.css"
import { Icon } from '@iconify/react';
const Luxury = () => {
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
            <Icon icon="ic:baseline-bookmark" className="icon-mark" />
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
            <Icon icon="ic:baseline-bookmark" className="icon-mark" />
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