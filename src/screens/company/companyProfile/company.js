import React , {useState,useEffect} from "react";
import cover from "../../../images/default_cover.jpg";
import logo from "../../../images/default_company_logo.png";  
import arrows from "../../../images/arrows.png";  
import connection from "../../../images/connection.png";
import styles from "../companyProfile/company.module.css";
import { COMPANY_PROFILE_URL } from "../../../constants";

const Company = () => {

//*****************************************************************************
  const [companyData, setCompanyData] = useState({
    backgroundImage: cover,
    image:logo,
    name:"",
    // industry:"",
    // followersNumber:"",
    // employeesNumber:"",
    // employeesPhotos:"",
    about:"",                      // rename to about
  });

  const [companyDetails, setCompanyDetails] = useState({
    marketingValue:"",
    history:"",
    websiteUrl:"",
  });

  const [companyLocations, setCompanyLocations] = useState([{
    // id:"",
    // history:"",
    // websiteUrl:"",
  }]);


  useEffect(() => {
    getCompanyData("937b884a-b9f5-11ed-87cc-448a5b2c2d83");      // should be changed later 
  }, [])


//*****************************************************************************

    return (
      <div className={styles.body}>
        <div className={styles.allcontainer}>
        <img src={companyData.backgroundImage} title="Company Cover" className={styles.coverimg} />
        <div className={styles.container}>
        <img src={companyData.image} title="Company logo" className={styles.logoimg} />
        <h4 className={styles.H4}> {companyData.name} </h4>
        <h6 className={styles.H6}>Software Development</h6>
        <div className={styles.followers}>
            100<br></br> <h6 className={styles.h6}>Followers</h6>
        </div>

        <div className={styles.connections}>
        <img src={connection} title="Connections" className={styles.connectionimg} />
        <img src={connection} title="Connections" className={styles.connectionimg} />
        <img src={connection} title="Connections" className={styles.connectionimg} />
        <h5 className={styles.H5} >10 Connections work here</h5>
        <button className={styles.follow}>Follow</button>
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
      setCompanyData(json.data.user);
      // setJob(json.data.user.job)
  }






  //===============================================================================================================================


  };
  
  export default Company;