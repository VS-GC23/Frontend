import React from 'react';
import UserContext from '../../Context/UserContext';
import { useContext,useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import "./Dashboard.css"
import HistoryInd from './HistoryInd';
import HistoryInv from './HistoryInv';
import HistoryMutf from './HistoryMutf';
import HistoryIns from './HistoryIns';
import BankPayHist from './BankPayHist';

function Dasboard() {

  const usercontext = useContext(UserContext);
  const { isLoggedIn } = usercontext;
  const [options, setOptions] = useState(0);

  
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
        <div><Link to="/userInsights">User Insights</Link></div>
        <div><Link to="/dashboard">Dashboard</Link></div>
        <div><Link to="/payment">Payments</Link></div>
        <div><Link to="/statements">Bank Statements</Link></div>
      </div>

      <div className="paymentHistory">
        <div className="payhis">Check Payment History</div>
        <div className="payhistbox">

          <div onClick={()=>{setOptions(1)}} className="payind">Payments to Individual</div>
          <div onClick={()=>{setOptions(2)}} className="payinv">Payments in Investment</div>
          <div onClick={()=>{setOptions(3)}} className="paymutf">Payments in Mutual Fund</div>
          <div onClick={()=>{setOptions(4)}} className="payins">Payments in Insurance</div>

        </div>
      </div>

      <div className="PaymentHistWrapper">
        {options == 1 && <HistoryInd/>}
        {options == 2 && <HistoryInv/>}
        {options == 3 && <HistoryMutf/>}
        {options == 4 && <HistoryIns/>}
      </div>

      <div className='statementHistory'>
        <div className="statementhist">Check Bank Statements History</div>
        <div className="stathistbox">
          <div onClick={()=>{setOptions(5)}} className="allstatement">Edited Bank Statements</div>
        </div>
      </div>

      <div className="PaymentHistWrapper">
        {options == 5 && <BankPayHist/>}
      </div>

    </div>
  )
}

export default Dasboard
