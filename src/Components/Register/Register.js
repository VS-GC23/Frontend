import React from 'react';
import { useState } from 'react';
import loginlogo from "../../Images/Logo1.png";
import axios from 'axios';
import { AiOutlineLoading } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import "./Register.css"

function Register() {

    const [ heading, setHeading] = useState("Register");
    const [ buttonText, setButtonText] = useState("Next");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [aadhaarNo, setAadhaarNo] = useState("");
    const [accountNo, setAccountNo] = useState("");
    const [ifscCode, setIfscCode] = useState("");
    const [irisScan, setIrisScan] = useState("");
    const [errmssg, setErrmssg] = useState();
    const [thumbPrintScan, setThumbPrintScan] = useState("")
    const [ isSubmitLoading, setIsSubmitLoading] = useState(false);
    const [aadhaarVerified, setAadhaarVerified] = useState(true);
    const [display1, setDisplay1] = useState("show");
    const [display2, setDisplay2] = useState("dontshow");
    const [display3, setDisplay3] = useState("dontshow");
    const [display4, setDisplay4] = useState("dontshow");
    const [display5, setDisplay5] = useState("dontshow");

    const validateAadhar = ()=>{
        axios.post("http://52.66.244.109:3001/aadhaar/authenticate",{
            AadhaarNumber:aadhaarNo,
            IrisScanCode:irisScan,
            FingerPrintCode:thumbPrintScan
        })
        .then(res => {
            setAadhaarVerified(true);
        })
        .catch(err=>{
            setErrmssg(err.response.data.message)
            // console.log(err);
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(heading === "Register"){
            setHeading("Add Bank Details");
            setDisplay1("dontshow");
            setDisplay2("show");
            setDisplay4("show");
            document.getElementById("RegisterHeading").classList.add("RegisterHeadingNext");
        }
        else if(heading === "Add Bank Details"){
            setHeading("Add Aadhar Details");
            setDisplay2("dontshow");
            setDisplay3("show");
            setButtonText("Submit");
            setAadhaarVerified(false);
        }
        else if(heading === "Add Aadhar Details"){
            setIsSubmitLoading(true);
            axios.post("http://localhost:8080/user/sign-up",{
                Name:name,
                Email:email,
                Address: address,
                ContactNumber: phoneNo,
                AccountNumber: accountNo,
                IFSCCode: ifscCode,
                Password: password,
                AadharNumber: aadhaarNo,
                IrisCode: irisScan,
                FingerPrintCode: thumbPrintScan
            })
            .then(res => {
                console.log(res);
                setIsSubmitLoading(false);
                document.getElementById("RegisterHeading").classList.remove("RegisterHeadingNext");
                document.getElementById("RegisterHeading").classList.add("dontshow");
                document.getElementById("submit").classList.add("dontshow");
                setDisplay3("dontshow");
                setDisplay5("show");

            })
            .catch(err => {
                console.log(err);
                setIsSubmitLoading(false);
            })
        }
    }

    const backClick = ()=>{
        if(heading === "Add Bank Details"){
            setHeading("Register");
            setDisplay1("show");
            setDisplay2("dontshow");
            setDisplay4("dontshow");
            document.getElementById("RegisterHeading").classList.remove("RegisterHeadingNext");
        }
        else if(heading === "Add Aadhar Details"){
            setHeading("Add Bank Details");
            setDisplay1("dontshow");
            setDisplay2("show");
            setDisplay3("dontshow");
            setDisplay4("show");
            setAadhaarVerified(true);
            setButtonText("Next");
        }
    }


  return (
    <div>
        <div className="navbarHome">
            <div className="Homeheading">FinTech</div>
            <div className="Homehome"><Link to="/">Home</Link></div>
            <div className="Homeregister"><Link to="/register">Register</Link></div>
            <div className="HomeLogin"><Link to="/login">Login</Link></div>
        </div>
      <div className="LoginPageWrapper">
        <div className="LoginLogo">
            <img src={loginlogo} alt="logo" />
        </div>
        <div className="LoginForm RegisterForm">
            <div className="login">
                <div className='LoginHeading RegisterHeading' id='RegisterHeading'>
                    <div onClick={()=>{backClick()}} className={`RegBackBtn ${display4}`}>&larr; </div>
                    <div className='RegisterHeadingText'>{heading}</div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={`item-group ${display1}`}>
                        <div className="form-item form-item-long required">
                            <div className="label">Full Name</div>
                            <input id="name" type="text" placeholder='Full Name' value={name} onChange={(e)=>{setName(e.target.value)}} />
                        </div>
                    </div>
                    <div className={`item-group ${display1}`}>
                        <div className="form-item form-item-long required">
                            <div className="label">Email</div>
                            <input id="email" type="email" placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                        </div>
                    </div>
                <div className={`item-group ${display1}`}>
                    <div className="form-item form-item-long required">
                        <div className="label">Password</div>
                        <input id="password" type="password" placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                    </div>
                </div>
                <div className={`item-group ${display1}`}>
                    <div className="form-item form-item-long required">
                        <div className="label">Address</div>
                        <input id="Address" type="text" placeholder='Address' value={address} onChange={(e)=>{setAddress(e.target.value)}} />
                    </div>
                </div>
                <div className={`item-group ${display1}`}>
                    <div className="form-item form-item-long required">
                        <div className="label">Phone Number</div>
                        <input id="phoneNo" type="text" placeholder='Phone No.' value={phoneNo} onChange={(e)=>{setPhoneNo(e.target.value)}} />
                    </div>
                </div>
                <div className={`item-group ${display2}`}>
                    <div className="form-item form-item-long required">
                        <div className="label">Account No.</div>
                        <input id="accountNo" type="text" placeholder='Account No.' value={accountNo} onChange={(e)=>{setAccountNo(e.target.value)}} />
                    </div>
                </div>
                <div className={`item-group ${display2}`}>
                    <div className="form-item form-item-long required">
                        <div className="label">IFSC Code</div>
                        <input id="ifscCode" type="text" placeholder='IFSC Code' value={ifscCode} onChange={(e)=>{setIfscCode(e.target.value)}} />
                    </div>
                </div>
                <div className={`item-group ${display3}`}>
                    <div className="form-item form-item-long required">
                        <div className="label">Aadhaar No.</div>
                        <input id="aadhaarNo" type="text" placeholder='Aadhaar No.' value={aadhaarNo} onChange={(e)=>{setAadhaarNo(e.target.value)}} />
                    </div>
                </div>
                <div className={`item-group ${display3}`}>
                    <div className="form-item form-item-long required">
                        <div className="label">Iris Scan</div>
                        <input id="irisScan" type="text" placeholder='Upload Iris Scan' value={irisScan} onChange={(e)=>{setIrisScan(e.target.value)}} />
                    </div>
                </div>
                <div className={`item-group ${display3}`}>
                    <div className="form-item form-item-long required">
                        <div className="label">Thumbprint Scan</div>
                        <input id="thumbPrintScan" type="text" placeholder='Upload Thumbprint Scan' value={thumbPrintScan} onChange={(e)=>{setThumbPrintScan(e.target.value)}} />
                    </div>
                </div>

                <div className={`item-group ${display3}`}>
                    <div className="form-item form-item-long required">
                        {/* <div className="label">Thumbprint Scan</div>
                        <input id="thumbPrintScan" type="text" placeholder='Upload Thumbprint Scan' value={thumbPrintScan} onChange={(e)=>{setThumbPrintScan(e.target.value)}} /> */}
                        <div onClick={()=>{validateAadhar()}} className='AadhaarValidateBtn'>Validate Aadhaar</div>
                    </div>
                </div>
                {
                    aadhaarVerified && 
                    <button id="submit" className="submit" disabled={isSubmitLoading} type="submit">
                    {buttonText} {isSubmitLoading && <AiOutlineLoading size={15} />}
                </button>
                }

            <div className={`item-group ${display3}`}>
                <div className="form-item form-item-long errmsg">
                    {errmssg}
                </div>
            </div>
                

                <div className={`item-group ${display5}`}>
                    <div className="form-item form-item-long">
                        <div className="successmsg">
                            <div className="successMessage">
                                Successfully Registered
                            </div>
                            <div className="logintocont">
                                Please Log-in to continue.
                            </div>
                            <div class="Checkwrapper">
                                <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                    <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/> <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Register
