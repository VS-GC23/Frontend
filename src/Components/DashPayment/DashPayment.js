import React from 'react';
import { useState } from 'react';
import Payind from './Payind';
import "./DashPayment.css";
import { Link } from 'react-router-dom';

function DashPayment() {

  const [options, setOptions] = useState(1);
  // document.getElementById(`payboxele${options}`).style.backgroundColor = "#96b2ce";

  return (
    <div className='DashPaywrapper'>

        <div className="navbarHome">
            <div className="Homeheading">FinTech</div>
            <div className="Logout"><Link to="/Logout">Logout</Link></div>
        </div>

        <div className='DashboardNav'>
          <div>User Settings</div>
          <div><Link to="/dashboard">Dashboard</Link></div>
          <div><Link to="/payment">Payments</Link></div>
          <div><Link to="/statements">Bank Statements</Link></div>
        </div>

      <div className="paymentbox">
        <div id="payboxele1" onClick={()=>{setOptions(1)}} className="payind">Payments to Individual</div>
        <div id="payboxele2" onClick={()=>{setOptions(2)}} className="payinv">Payments in Investment</div>
        <div id="payboxele3" onClick={()=>{setOptions(3)}} className="paymutf">Payments in Mutual Fund</div>
        <div id="payboxele4" onClick={()=>{setOptions(4)}} className="payins">Payments in Insurance</div>
      </div>
      <div className="Payform">
        {options == 1 && <Payind/>}
        {/* {options == 2 && <Payind/>}
        {options == 3 && <Payind/>}
        {options == 4 && <Payind/>} */}

      </div>
    </div>
  )
}

export default DashPayment
