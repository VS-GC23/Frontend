import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import loginlogo from "../../Images/Logo1.png";
import axios from 'axios';
import UserContext from '../../Context/UserContext';
import "./Login.css";
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Login() {

  const usercontext = useContext(UserContext);
  const { userBank, setUserBank, accessToken, setAccessToken, setIsLoggedIn, isLoggedIn,user, setUser } = usercontext;
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const [errmssg, setErrmssg] = useState();
    

    const handleSubmit = (e)=>{
      e.preventDefault();
      setIsSubmitLoading(true);
      axios.post("http://localhost:8080/user/sign-in",{
        Email: email,
        Password: password
      })
      .then(res => {
        console.log(res.data.accessToken);

        setAccessToken(res.data.accessToken);
        setIsSubmitLoading(false);
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", true);
        setErrmssg("");
        if(accessToken){
          axios.get("http://localhost:8080/user/details",{
            headers:{
              "authorization":`Bearer ${accessToken}`
            }
          })
          .then(res => {
            setUser(res.data);
            console.log(res);
            axios.get("http://localhost:8080/user/get-bank-details",{
              headers:{
                "authorization":`Bearer ${accessToken}`
              }
            })
            .then( res2 => {
              setUserBank(res2.data);
              console.log(userBank);
            })
          })
          .catch(err => {
            console.log(err)
          })

        }

        
      })
      .catch(err => {
        setErrmssg(err.response.data.message);
        console.log(err.response.data.message);
        setIsSubmitLoading(false);
      })
    }

  return (
    <div>
      <div className="navbarHome">
            <div className="Homeheading">FinTech</div>
            <div className="Homehome"><Link to="/">Home</Link></div>
            <div className="Homeregister"><Link to="/register">Register</Link></div>
            <div className="HomeLogin"><Link to="/login">Login</Link></div>
        </div>
    <div className='LoginPageWrapper'>

        <div className="LoginLogo">
            <img src={loginlogo} alt="logo" />
        </div>
        <div className="LoginForm">
        <div className="login">
          <div className='LoginHeading'>Login</div>
        <form onSubmit={handleSubmit}>
        <div className="item-group">
            <div className="form-item form-item-long required">
              <div className="label">Email</div>
              <input id="email" type="email" placeholder='your_email@example.com' value={email} required onChange={(e)=>{setEmail(e.target.value)}} />
            </div>
          </div>
          <div className="item-group">
            <div className="form-item form-item-long required">
              <div className="label">Password</div>
              <input id="password" type="password" placeholder='password' value={password} required onChange={(e)=>{setPassword(e.target.value)}} />
            </div>
          </div>
          <button className="submit" disabled={isSubmitLoading} type="submit">
            Submit {isSubmitLoading && <AiOutlineLoading size={15} />}
          </button>

          { isLoggedIn ? (
          <div className="Dashboard"><Navigate to="/dashboard" /></div>
          ) :
           ""
          }
          
          
          <div className="item-group">
            <div className="form-item form-item-long errmsg">
              {errmssg}
            </div>
          </div>

        </form>
      </div>
        </div>
      
    </div>
    </div>
  )
}

export default Login
