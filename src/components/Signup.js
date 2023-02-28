import '../components/Signup.css';
import Logo from '../images #/Jobber.png';
import Google from '../images #/Google.png'
import Apple from '../images #/Apple.png'
import Facebook from '../images #/facebook.png'

const Signup = () => {
    return (
        <div>
            <img src={Logo} title="Logo Image" className='logoimg' />
            <h1 className='welcome'>Welcome to <span className='jobber'>Jobber</span></h1>
            <h3>Take the first step toward your new career</h3>
            <button id='joinus'>Join us</button>
            <button id='learnmore'>Learn more</button>
            <form>

                <div className='inputbox'>
                    <input type="text" required="required" />
                    <span>Name</span>
                </div>
                <div className='inputbox' id='email'>
                    <input type="email" required="required" />
                    <span>Email</span>
                </div>
                <div className='inputbox' id='pass'>
                    <input type="password" required="required" maxLength={12} />
                    <span>Password</span>
                </div>
                <div className='inputbox' id='pass2'>
                    <input type="password" required="required" maxLength={12} />
                    <span>Confirm Password</span>
                </div>
                <div class="select">
                    <select name="format" id="format">
                        <option selected >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;City</option>
                        <option value="cairo">Cairo</option>
                        <option value="giza">Giza</option>
                        <option value="alex">Alexandria</option>
                        <option value="aswan">Aswan</option>
                        <option value="Behiera">El-Behiera</option>
                    </select>
                </div>
                <div class="select2">
                    <select name="format" id="format">
                        <option selected >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Job Title</option>
                        <option value="cairo">Computer Engineer</option>
                        <option value="giza">Dentist</option>
                        <option value="alex">Front-End Developer</option>
                        <option value="aswan">Flutter Developer</option>
                        <option value="Behiera">Back-End Developer</option>
                    </select>
                </div>
                <div className='file'>
                    <input type='file' id='file' />
                    <label for='file'>Upload Your CV</label>
                </div>
                <button id='signup-button'>Sign Up</button>
                <h6 className='terms'>By clicking Sign Up , you agree to our <span id='terms'> Terms</span> ,<span id='terms'> Privacy Policy</span > and<span id='terms'> Cookies Policy</span> </h6>
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
                <h5 id='login'>Already have an account ? <a href="#login" title="Login">Login</a></h5>
            </form>
        </div>
    );
}

export default Signup;
