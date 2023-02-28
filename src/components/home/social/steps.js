import React from "react";
import "./css/socail.css"
import "./css/all.min.css"
import { Icon } from '@iconify/react';
import textBulletListSquareEdit20Regular from '@iconify/icons-fluent/text-bullet-list-square-edit-20-regular';
import textBulletListSquare24Regular from '@iconify/icons-fluent/text-bullet-list-square-24-regular';
import baselineUploadFile from '@iconify/icons-ic/baseline-upload-file';
const Steps = ()=> {
    return (
        <div className="box-socail">
            <div className="box2">
                <div className="top-steps" >
                    <Icon icon={textBulletListSquareEdit20Regular} className="icon" />
                    <h1>01</h1>
                </div>
                <p>Register Your<br></br> Account </p>
            </div>
            <div className="box2">
                <div className="top-steps">
                    <Icon icon="material-symbols:screen-search-desktop-outline" className="icon"/>
                    <h1>02</h1>
                </div>
                <p> Search Your <br></br>Job  </p>
            </div>
            <div className="box2">
                <div className="top-steps">
                    <Icon icon={textBulletListSquare24Regular} className="icon"/>
                    <h1>03</h1>
                </div>
                <p>Apply For <br></br>Dream Job </p>
            </div>
            <div className="box2">
                <div className="top-steps">
                    <Icon icon={baselineUploadFile} className="icon"/>
                    <h1>04</h1>
                </div>
                <p>Upload Your<br></br> CV</p>
            </div>
        </div>
    )
}
export default Steps ;