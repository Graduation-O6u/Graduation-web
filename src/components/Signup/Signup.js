import styles from '../Signup/Signup.module.css';
import Logo from '../../images #/Jobber.png';
import Google from '../../images #/Google.png'
import Apple from '../../images #/Apple.png'
import Facebook from '../../images #/facebook.png'
import React, { useState, useEffect } from 'react';

const Signup = () => {

    const [jobs, setJobs] = useState([""]);
    const [cities, setCities] = useState([""]);

    useEffect(() => {
        loadJobs();
        loadCities();
    }, [])


    return (
        <div className={styles.body}>
            <img src={Logo} title="Logo Image" className={styles.logoimg} />
            <h1 className={styles.welcome}>Welcome to <span className={styles.jobber}>Jobber</span></h1>
            <h3>Take the first step toward your new career</h3>
            <button id={styles.joinus}>Join us</button>
            <button id={styles.learnmore}>Learn more</button>
            <form className={styles.form}>

                <div className={styles.inputbox1}>
                    <input type="text" required="required" />
                    <span>Name</span>
                </div>
                <div className={styles.inputbox1} id='email'>
                    <input type="email" required="required" />
                    <span>Email</span>
                </div>
                <div className={styles.inputbox1} id={styles.pass}>
                    <input type="password" required="required" maxLength={12} />
                    <span>Password</span>
                </div>
                <div className={styles.inputbox1} id={styles.pass2}>
                    <input type="password" required="required" maxLength={12} />
                    <span>Confirm Password</span>
                </div>
                <div className={styles.select}>
                    <select name="format" id="format">
                        <option selected >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;City</option>
                        {/* <option value="cairo">Cairo</option>
                        <option value="giza">Giza</option>
                        <option value="alex">Alexandria</option>
                        <option value="aswan">Aswan</option>
                        <option value="Behiera">El-Behiera</option> */}

                        {
                            cities.map(city => {
                                return (
                                    <option value={city.code}> {city.name} </option>
                                );
                            })
                        }

                    </select>
                </div>
                <div className={styles.select2}>
                    <select name="format" id="format">
                        <option selected >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Job Title</option>
                        {/* <option value="cairo">Computer Engineer</option>
                        <option value="giza">Dentist</option>
                        <option value="alex">Front-End Developer</option>
                        <option value="aswan">Flutter Developer</option>
                        <option value="Behiera">Back-End Developer</option> */}

                        {
                            jobs.map(job => {
                                return (
                                    <option value={job.id}> {job.title} </option>
                                );
                            })
                        }

                    </select>
                </div>
                <div className={styles.file}>
                    <input type='file' id={styles.file} />
                    <label className={styles.label} for={styles.file}>Upload Your CV</label>
                </div>
                <button id={styles.signupButton}>Sign Up</button>
                <h6 className={styles.terms}>By clicking Sign Up , you agree to our <span id={styles.terms}> Terms</span> ,<span id={styles.terms}> Privacy Policy</span > and<span id={styles.terms}> Cookies Policy</span> </h6>
                <svg height="80" width="150" className={styles.leftsvg}>
                    <g fill="none">
                        <path stroke="black" d="M5 40 l215 0" />
                    </g>
                </svg>
                <h6 className={styles.continue}>or continue with</h6>
                <svg height="80" width="150" className={styles.rightsvg}>
                    <g fill="none">
                        <path stroke="black" d="M5 40 l215 0" />
                    </g>
                </svg>
                <div className={styles.photos}>
                    <img src={Google} title="Google Login" id={styles.pic} />
                    <img src={Apple} title="Apple Login" id={styles.pic} />
                    <img src={Facebook} title="Facebook Login" id={styles.pic} />
                </div>
                <h5 id={styles.login}>Already have an account ? <a href="#login" title="Login">Login</a></h5>
            </form>
        </div>
    );


    //===============================================================================================================================
    function loadJobs() {
        const JOBS_URL = "https://graduation-backend-production.up.railway.app/auth/jobs";
        fetch(JOBS_URL)
            .then((response) => response.json())
            .then((json) => onGetJobsData(json));
    }

    function onGetJobsData(json) {
        setJobs(json.data);
    }

    function loadCities() {
        const CITIES_URL = "https://graduation-backend-production.up.railway.app/auth/cities";
        fetch(CITIES_URL)
            .then((response) => response.json())
            .then((json) => onGetCitiesData(json));
    }

    function onGetCitiesData(json) {
        setCities(json.data);
    }


    function getDataAndSignUp() {

        const person = {
            name: "",
            email: "",
            password: "",
            jobId: "",
            cityId: ""
        };


        const SIGN_UP_URL = "https://graduation-backend-production.up.railway.app/auth/signup";
        fetch(SIGN_UP_URL, {
            method: "POST",
            body: JSON.stringify(person)
        })
            .then((response) => response.json())
            .then((json) => onGetSignUpResponse(json));
    }

    function onGetSignUpResponse(json) {
        let status = json.type;
        if (status == "Success") {
            window.alert("success signup");
        } else {
            window.alert("Error Happened");
        }
    }





}

export default Signup;
