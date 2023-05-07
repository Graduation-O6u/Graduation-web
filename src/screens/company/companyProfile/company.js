import React , {useState,useEffect} from "react";
import cover from "../../../images/default_cover.jpg";
import logo from "../../../images/default_company_logo.png";  
import arrows from "../../../images/arrows.png";  
import styles from "../companyProfile/company.module.css";
import Input from "../../Authentication/components/input/input";
import pen from "../../../images/pen.png"; 
import Drop from "../comapnySignup/components/drop edit/drop";
import { COMPANY_PROFILE_URL, UPDATE_COMPANY_PROFILE_URL } from "../../../constants";

const Company = () => {
  
//*****************************************************************************
useEffect(() => {
  getCompanyData("937b884a-b9f5-11ed-87cc-448a5b2c2d83");      // should be changed later 
}, [])

//-----------
const [marketingValue, setMarketingValue] = useState("");
const [history, setHistory] = useState("");
const [websiteUrl, setWebsiteUrl] = useState("");

const [name, setName] = useState("");
const [about, setAbout] = useState("");
const [companyData, setCompanyData] = useState({
  backgroundImage: cover,
  image:logo,
});
//-----------

const [viewsCount, setViewsCount] = useState();
const [industry, setIndustry] = useState("");
const [locations, setCompanyLocations] = useState([]);


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
                <form className={styles.edit} onSubmit={handleUpdateFormSubmit}>
                  <div className={styles.small}>
                    <Input
                      label={"Name"}
                      small={true}
                      name={"name"}
                      type={"text"}
                      value={name}
                    />
                    <br></br>
                    <Drop/>
                    </div>
                    <br></br>
                    <div className={styles.small}>
                    <Input
                      label={"Website Url"}
                      small={true}
                      name={"url"}
                      type={"text"}
                      value={websiteUrl}
                    />
                    <br></br>
                    <Input
                      label={"Marketing Value"}
                      small={true}
                      name={"marketing_value"}
                      type={"text"}
                      value={marketingValue}
                    />
                    </div>
                    <br></br>
                      <Input
                      label={"History"}
                      small={false}
                      name={"history"}
                      type={"text"}
                      value={history}
                    />
                    <br></br>
                    <Input
                      label={"About"}
                      small={false}
                      name={"about"}
                      type={"text"}
                      id={styles.about}
                      value={about}
                    />
                    <br></br>
                    


                  <button type='submit' className={styles.save}>Save</button>
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
        <h4 className={styles.H4}> {name} </h4>
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
          <p> {about} </p>
        </div>

        <br></br>

        <div className={styles.container3}>
          <div>
            <p>Marketing value <br></br> <span className={styles.Span}>$ {marketingValue}  </span></p>
            </div>
          <div><p>History<br></br> <span className={styles.Span}> {history} </span></p></div>
          <div><p>Website<br></br><a href={websiteUrl} >URL</a></p></div>
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
    setCompanyLocations(json.data.user.companyLocation);


    let companyData = json.data.user;
    setCompanyData(companyData);
    setName(companyData.name);
    setAbout(companyData.aboutme);


    let companyDetails = json.data.user.companyDetails;
    setMarketingValue(companyDetails.marketingValue);
    setHistory(companyDetails.history);
    setWebsiteUrl(companyDetails.websiteUrl);
}

//=============================================

function handleUpdateFormSubmit(e) {
  e.preventDefault(); 
  let nameValue = e.target.name.value;
  let websiteUrlValue = e.target.url.value;
  let marketingValue = e.target.marketing_value.value;
  let historyValue = e.target.history.value;
  let aboutValue = e.target.about.value;
  let jobId = e.target.jobs.value;;
 
  const companyData = {
    name: nameValue,
    about: aboutValue,
    Url: websiteUrlValue,
    history: historyValue,
    marketingValue: marketingValue,
    jobId: jobId
  };

  let requestJson = JSON.stringify(companyData);
  console.log("zzzzzz" + requestJson);
  // updateCompanyProfileData(requestJson);
}

function updateCompanyProfileData(requestJson) {
    var token = localStorage.getItem("Access Token");

    fetch(UPDATE_COMPANY_PROFILE_URL, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          "Authorization": "Bearer " + token
        },
    })
      .then((response) => response.json())
      .then((json) => onGetUpdateResponse(json));
}

function onGetUpdateResponse(json) {
  // let status = json.type;
  // if (status === "Success") {
  //   // window.alert("success");
  //   let secret = json.data.secret;
  //   navigateToVerifyEmail(secret);
  // } else {
  //   window.alert("Error Happened");
  // }
}

function navigateToVerifyEmail(secretId) {
  // // console.log(secretId);
  // navigate("/login");
}








//===============================================================================================================================


};
  
  export default Company;