import React , {useState,useEffect} from "react";
import cover from "../../../images/default_cover.jpg";
import logo from "../../../images/default_company_logo.png";  
import arrows from "../../../images/arrows.png";  
import styles from "../companyProfile/company.module.css";
import Input from "../../Authentication/components/input/input";
import pen from "../../../images/pen.png"; 
import Drop from "../comapnySignup/components/drop edit/drop";
import { COMPANY_PROFILE_URL } from "../../../constants";

const Company = () => {

  
//*****************************************************************************
const [viewsCount, setViewsCount] = useState();
const [industry, setIndustry] = useState("");
const [companyData, setCompanyData] = useState({
  backgroundImage: cover,
  image:logo,
  name:"",
  aboutme:"",
});

const [companyDetails, setCompanyDetails] = useState({
  marketingValue: "",
  history:"",
  websiteUrl:""
});

const [locations, setCompanyLocations] = useState([]);

useEffect(() => {
  getCompanyData("937b884a-b9f5-11ed-87cc-448a5b2c2d83");      // should be changed later 
}, [])


//*****************************************************************************


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
        <img src={companyData.backgroundImage} title="Company Cover" className={styles.coverimg} />
        <div className={styles.container}>
        <img src={companyData.image} title="Company logo" className={styles.logoimg} />
        <h4 className={styles.H4}> {companyData.name} </h4>
        <h6 className={styles.H6}> {industry} </h6>
        <img src={pen} title="edit" onClick={showHidePopup} className={styles.penimg} />
        <div className={styles.followers}>
            {viewsCount}  <br></br> <h6 className={styles.h6}>Views</h6>
        </div>

        </div>
        </div>
        <br></br>
        <img src={arrows} title="Career arrows" className={styles.arrowsimg} />
        <br></br><br></br>
        
        <div className={styles.container2}>
          <h5>About</h5>
          <p> {companyData.aboutme} </p>
        </div>

        <br></br>

        <div className={styles.container3}>
          <div>
            <p>Marketing value <br></br> <span className={styles.Span}>$ {companyDetails.marketingValue}  </span></p>
            </div>
          <div><p>History<br></br> <span className={styles.Span}> {companyDetails.history} </span></p></div>
          <div><p>Website<br></br><a href={companyDetails.websiteUrl} >URL</a></p></div>
        </div>

        <br></br><br></br>

        <div className={styles.container4}>
        <h5>Location</h5>
        {/* <h6>• Nasr City</h6>
        <h6>• New Cairo City</h6>
        <h6>• 6th October City</h6> */}
        {locations.map((location) => {
          return <h6> {location.name} </h6>;
        })}

        <div className={styles.viewmap}>
        {/* <h6 ><a href="view in maps">View In Maps</a></h6>
        <h6 ><a href="view in maps">View In Maps</a></h6>
        <h6 ><a href="view in maps">View In Maps</a></h6> */}
        </div>

        </div>

        <br></br><br></br><br></br>
        {isPopupShown && popup()}
      </div>
    );
//===============================================================================================================================
function getCompanyData(companyId){
    var token = localStorage.getItem("Access Token");
    var url = COMPANY_PROFILE_URL + companyId;

    fetch(url, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          "Authorization": "Bearer " + token
        },
    })
      .then((response) => response.json())
      .then((json) => onGetCompanyData(json));
}

function onGetCompanyData(json){
    // window.alert(json.data.user.name);
    setViewsCount(json.data.view);
    setIndustry(json.data.user.job.title)
    setCompanyData(json.data.user);
    setCompanyDetails(json.data.user.companyDetails);
    setCompanyLocations(json.data.user.companyLocation);
}






//===============================================================================================================================


};
  
  export default Company;