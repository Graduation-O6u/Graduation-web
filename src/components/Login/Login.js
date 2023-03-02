import styles from '../Login/Login.module.css';
import Logo from '../../images #/Jobber.png';
import Google from '../../images #/Google.png'
import Apple from '../../images #/Apple.png'
import Facebook from '../../images #/facebook.png'
import { useState } from 'react'
const Login = () => {
    const [isPopupShown, setIsPopupShown] = useState(false);
    const showHidePopup = () => {
        setIsPopupShown(!isPopupShown);
    };

    const [isPopupShown2, setIsPopupShown2] = useState(false);
    const showHidePopup2 = () => {
        setIsPopupShown2(!isPopupShown2);
    };

    const [isPopupShown3, setIsPopupShown3] = useState(false);
    const showHidePopup3 = () => {
        setIsPopupShown3(!isPopupShown3);
    };

    function popup() {
        return <>
            <div id={styles.loginModel}>
                <div className={styles.model}>
                    <div className={styles.topForm}>
                        <div onClick={showHidePopup} className={styles.closeModal}>&#10006;</div>
                    </div>
                    <div className={styles.loginForm}>
                        <h2>Please enter your email address to recieve a verification code</h2>
                        <form action=''>
                            <input type='email' placeholder='Email' required='required' />
                            <button onClick={showHidePopup2} type='button' className={styles.submitBtn}>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    }

    function popup2() {
        return <>
            <div id={styles.loginModel}>
                <div className={styles.model}>
                    <div className={styles.topForm}>
                        <div onClick={showHidePopup2} className={styles.closeModal}>&#10006;</div>
                    </div>
                    <div className={styles.loginForm}>
                        <h2>Please enter the code sent to 123@gmail.com</h2>
                        <form action=''>
                            <div className={styles.numbers}>
                                <input type='text' placeholder='0' required />
                                <input type='text' placeholder='0' required />
                                <input type='text' placeholder='0' required />
                                <input type='text' placeholder='0' required />
                            </div>
                            <button onClick={showHidePopup3} type='button' className={styles.submitBtn}>Verify</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    }

    function popup3() {
        return <>
            <div id={styles.loginModel}>
                <div className={styles.model}>
                    <div className={styles.topForm}>
                        <div onClick={showHidePopup3} className={styles.closeModal}>&#10006;</div>
                    </div>
                    <div className={styles.loginForm}>
                        <h2>Change Password</h2>
                        <form action=''>
                            <input type='password' placeholder='Password' required='required' />
                            <input type='password' placeholder='Confirm Password' required='required' />
                            <button type='button' className={styles.submitBtn}>Change</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    }

    return (
        <div className={styles.body}>
            <img src={Logo} title="Logo Image" className={styles.logoimg} />
            <h1 className={styles.welcome}>Welcome to <span className={styles.jobber}>Jobber</span></h1>
            <h3>Take the first step toward your new career</h3>
            <button id={styles.joinus}>Join us</button>
            <button id={styles.learnmore}>Learn more</button>
            <form className={styles.form}>

                <div className={styles.inputbox} id='email'>
                    <input type="email" required="required" />
                    <span>Email</span>
                </div>
                <div className={styles.inputbox} id={styles.pass}>
                    <input type="password" required="required" maxLength={12} minLength={6} />
                    <span>Password</span>
                </div>
                <div className={styles.rememberme}>
                    <input id="mac1" type="checkbox" name="os" value="Mac" />
                    <label for="mac1"> Remember me</label>
                </div>
                <a onClick={showHidePopup} href="#forgetpass" title="Forgot Password ?" id={styles.forgot} >Forgot Password ?</a>
                <button id={styles.signInButton}>Sign in</button>
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
                <h5 id={styles.signup}>Don't have an account ? <a href="#signup" title="Signup">Sign up</a></h5>
            </form>
            {isPopupShown && popup()}
            {isPopupShown2 && popup2()}
            {isPopupShown3 && popup3()}
        </div>

    );
}

export default Login;
