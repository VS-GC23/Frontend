import React from 'react';
import UserContext from '../../Context/UserContext';
import { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import "./Dashboard.css"

function Dasboard() {

  const usercontext = useContext(UserContext);
  const { isLoggedIn } = usercontext;

  if(!isLoggedIn){
    return <Navigate to="/"/>
  }
  return (
    <div>
      { !isLoggedIn ? (
          <div><Navigate to="/login" /></div>
          ) :
          ""
      }

        <div className="navbarHome">
            <div className="Homeheading">FinTech</div>
            <div className="Logout"><Link to="/Logout">Logout</Link></div>
        </div>


      <div className='DashboardNav'>
        <div><Link to="/userInsights">User Settings</Link></div>
        <div><Link to="/dashboard">Dashboard</Link></div>
        <div><Link to="/payment">Payments</Link></div>
        <div><Link to="/statements">Bank Statements</Link></div>
      </div>

      <div className="paymentHistory">
        <div className="payhis">Check Payment History</div>
        <div className="payhistbox">
          <div className="payind">Payments to Individual</div>
          <div className="payinv">Payments in Investment</div>
          <div className="paymutf">Payments in Mutual Fund</div>
          <div className="payins">Payments in Insurance</div>
        </div>
      </div>

      <div className='statementHistory'>
        <div className="statementhist">Check Bank Statements History</div>
        <div className="stathistbox">
          <div className="allstatement">All Bank Statements</div>
          <div className="editedstatement">Edited Bank Statements</div>
        </div>
      </div>
    </div>
  )
}

export default Dasboard
