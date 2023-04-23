import React, { useState } from "react";
import OR from "../../../../components/or/or";
import { useNavigate } from "react-router-dom";
import styles from "./cardshome.module.css";
import "../sectionCards.css";
import { Icon } from '@iconify/react';
const Luxury = () => {
  const [isActive1, setIsActive1] = useState(false);
  const navigate = useNavigate();
    const [ joblist , setjoblist] = useState([]);
    const myHeaders = new Headers({
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("Access Token")}`,
    });
    Card();
    const handleNextClick = () => {
        const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementById('formList').scrollLeft += widthItem;
  };
  const handlePrevClick = () => {
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementById('formList').scrollLeft -= widthItem;
  };
  return (
    <>
      <div id="formList">
        <div id="list">
            { joblist.map(( x )=>{
                return(
          <div class="item">
              <div  className= "totitle" >
                <div className="title-box">{x["jobTitle"]["title"]}</div>
                {isActive1? <Icon icon="ic:baseline-bookmark" className="icon-mark"  onClick={()=>{
                setIsActive1(!isActive1)}}/>:
                <Icon icon="ri:bookmark-line" className="icon-mark"  onClick={()=>{
                    setIsActive1(!isActive1)}} />}
              </div>
              <div className="butt-box">
                <button>{x["jobLocationType"]}</button>
                <button>{x["jobType"]}</button>
              </div>
              <div className="butt-box" >
                <button >{x["salary"]}/{x["salaryPer"]}</button>
              </div>
              <OR title="1 hour ago" job="true" />
              <div className="company-box">
                <Icon icon="logos:microsoft-icon" className="mic" />
                <p className="micro">{x["company"]["name"]}</p>
              </div>
          </div>
            )} ) }
        </div>
      </div>
        <div className="arrow">
        <button onClick={handlePrevClick}><Icon icon="material-symbols:arrow-circle-left-sharp" className="ar" /></button>
        <button onClick={handleNextClick}><Icon icon="material-symbols:arrow-circle-right" className="ar" /></button>
    </div>
    </>
  );
    function  getcard(e) {
    if (e["message"]=== "Unauthorized" ) {
        navigate("/login");
    }
    console.log(e);
    setjoblist(e["data"]["FeaturedJobs"] )
}
function Card () {
    fetch( 
        "https://graduation-backend-production.up.railway.app/job/all?type=FeaturedJobs" ,
        { 
            method: "GET" ,
            headers:myHeaders
        } 
    )
    .then((response) => response.json()) 
    .then((json) =>  getcard(json)) ;
}
};
export default Luxury;
