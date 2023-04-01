import React from 'react';
import "./Home.css";
import AboutImg from '../../Images/HomeAbout.jpg';
// import UserContext from '../../Context/UserContext';
// import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Home() {

    // const usercontext = useContext(UserContext);
    // const { isLoggedIn } = usercontext;

  return (
    <div className='HomeWrapprer'>

        <div className="navbarHome">
            <div className="Homeheading">FinTech</div>
            <div className="Homehome"><Link to="/">Home</Link></div>
            <div className="Homeregister"><Link to="/register">Register</Link></div>
            <div className="HomeLogin"><Link to="/login">Login</Link></div>
        </div>
      
      <div className='Homeabout'>
            <div className="HomeAbout">
                <div className='AboutLine1'>Welcome to FinTech</div>
                <div className='AboutLine2'>We at FinTech enable enterprises to deliver world class financial
                    products at a fraction of the cost of building it from scratch.
                </div>
            </div>
            <div className="HomeAboutImg">
                <img src={AboutImg} alt="About" />
            </div>
      </div>

        <div className="HowItWorksWrapper">
            <div className='HIWheading'>How it Works</div>

            <div className="Howitworks">
                <div className="setUpAccount">
                    <div className='Cardheading'>SetUp Account</div>
                    <div className='CardBody'>Set up your account at FinTech Services in a seamless process and get ready to user our services in-hand. 
                    </div>
                </div>
                <div className="UsePaySer">
                    <div className='Cardheading'>Use Payment Services</div>
                    <div className='CardBody'>Use our payment services, which use state-of-the-art security for secure payment processing.
                    </div>
                </div>
                <div className="SecureAccess">
                    <div className='Cardheading'>Secure Access</div>
                    <div className='CardBody'>All processes - payment, bank statement processing, etc. are happening with utmost security and with full user's consent.
                    </div>
                </div>
                <div className="UsefulIns">
                    <div className='Cardheading'>Useful Insights</div>
                    <div className='CardBody'>Get useful insights from your bank statements, track financial status and invest accordingly!</div>
                </div>
            </div>
        </div>
        
      
    </div>
  )
}

export default Home
