import styles from '../Signup/Signup.module.css';
import Logo from '../../images #/Jobber.png';
import Google from '../../images #/Google.png'
import Apple from '../../images #/Apple.png'
import Facebook from '../../images #/facebook.png'

const Signup = () => {
    return (
        <div className={styles.body}>
            <img src={Logo} title="Logo Image" className={styles.logoimg} />
            <h1 className={styles.welcome}>Welcome to <span className={styles.jobber}>Jobber</span></h1>
            <h3>Take the first step toward your new career</h3>
            <button id={styles.joinus}>Join us</button>
            <button id={styles.learnmore}>Learn more</button>
            <form>

                <div className={styles.inputbox}>
                    <input type="text" required="required" />
                    <span>Name</span>
                </div>
                <div className={styles.inputbox} id='email'>
                    <input type="email" required="required" />
                    <span>Email</span>
                </div>
                <div className={styles.inputbox} id={styles.pass}>
                    <input type="password" required="required" maxLength={12} />
                    <span>Password</span>
                </div>
                <div className={styles.inputbox} id={styles.pass2}>
                    <input type="password" required="required" maxLength={12} />
                    <span>Confirm Password</span>
                </div>
                <div className={styles.select}>
                    <select name="format" id="format">
                        <option selected >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;City</option>
                        <option value="cairo">Cairo</option>
                        <option value="giza">Giza</option>
                        <option value="alex">Alexandria</option>
                        <option value="aswan">Aswan</option>
                        <option value="Behiera">El-Behiera</option>
                    </select>
                </div>
                <div className={styles.select2}>
                    <select name="format" id="format">
                        <option selected >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Job Title</option>
                        <option value="cairo">Computer Engineer</option>
                        <option value="giza">Dentist</option>
                        <option value="alex">Front-End Developer</option>
                        <option value="aswan">Flutter Developer</option>
                        <option value="Behiera">Back-End Developer</option>
                    </select>
                </div>
                <div className={styles.file}>
                    <input type='file' id={styles.file} />
                    <label className={styles.label} for='file'>Upload Your CV</label>
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
}

export default Signup;
