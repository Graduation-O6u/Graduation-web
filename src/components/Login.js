import '../components/Login.css';
import Logo from '../images #/Jobber.png';
import Google from '../images #/Google.png'
import Apple from '../images #/Apple.png'
import Facebook from '../images #/facebook.png'
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
            <div id="login-model">
                <div className="model">
                    <div className="top-form">
                        <div onClick={showHidePopup} className="close-model">&#10006;</div>
                    </div>
                    <div className="login-form">
                        <h2>Please enter your email address to recieve a verification code</h2>
                        <form action=''>
                            <input type='email' placeholder='Email' required='required' />
                            <button onClick={showHidePopup2} type='button' className='submit-btn'>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    }

    function popup2() {
        return <>
            <div id="login-model">
                <div className="model">
                    <div className="top-form">
                        <div onClick={showHidePopup2} className="close-model">&#10006;</div>
                    </div>
                    <div className="login-form">
                        <h2>Please enter the code sent to 123@gmail.com</h2>
                        <form action=''>
                            <div className='numbers'>
                                <input type='text' placeholder='0' required />
                                <input type='text' placeholder='0' required />
                                <input type='text' placeholder='0' required />
                                <input type='text' placeholder='0' required />
                            </div>
                            <button onClick={showHidePopup3} type='button' className='submit-btn'>Verify</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    }

    function popup3() {
        return <>
            <div id="login-model">
                <div className="model">
                    <div className="top-form">
                        <div onClick={showHidePopup3} className="close-model">&#10006;</div>
                    </div>
                    <div className="login-form">
                        <h2>Change Password</h2>
                        <form action=''>
                            <input type='password' placeholder='Password' required='required' />
                            <input type='password' placeholder='Confirm Password' required='required' />
                            <button type='button' className='submit-btn'>Change</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    }

    return (
        <div>
            <img src={Logo} title="Logo Image" className='logoimg' />
            <h1 className='welcome'>Welcome to <span className='jobber'>Jobber</span></h1>
            <h3>Take the first step toward your new career</h3>
            <button id='joinus'>Join us</button>
            <button id='learnmore'>Learn more</button>
            <form className='form'>

                <div className='inputbox' id='email'>
                    <input type="email" required="required" />
                    <span>Email</span>
                </div>
                <div className='inputbox' id='pass'>
                    <input type="password" required="required" maxLength={12} minLength={6} />
                    <span>Password</span>
                </div>
                <div className='rememberme'>
                    <input id="mac1" type="checkbox" name="os" value="Mac" />
                    <label for="mac1"> Remember me</label>
                </div>
                <a onClick={showHidePopup} href="#forgetpass" title="Forgot Password ?" id='forgot' >Forgot Password ?</a>
                <button id='signin-button'>Sign in</button>
                <svg height="80" width="150" className='leftsvg'>
                    <g fill="none">
                        <path stroke="black" d="M5 40 l215 0" />
                    </g>
                </svg>
                <h6 className='continue'>or continue with</h6>
                <svg height="80" width="150" className='rightsvg'>
                    <g fill="none">
                        <path stroke="black" d="M5 40 l215 0" />
                    </g>
                </svg>
                <div className='photos'>
                    <img src={Google} title="Google Login" id='pic' />
                    <img src={Apple} title="Apple Login" id='pic' />
                    <img src={Facebook} title="Facebook Login" id='pic' />
                </div>
                <h5 id='signup'>Don't have an account ? <a href="#signup" title="Signup">Sign up</a></h5>
            </form>
            {isPopupShown && popup()}
            {isPopupShown2 && popup2()}
            {isPopupShown3 && popup3()}
        </div>

    );
}

export default Login;
