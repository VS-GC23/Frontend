import React from 'react';
import { Link } from 'react-router-dom';
import "./BankStatement.css"

function BStatements() {
  return (
    <div>
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

        <div className="BankStatementWrapper">
            <div className='banksts'>Check Bank Statements History</div>
            <div className="Statementbox">
                <div className="allStat">All Bank Statements</div>
                <div className="editedStat">Edited Bank Statements</div>
            </div>
            <div className="uploadstat">
                <div className='upStat'>Upload Statement</div>
                <div>Accepted formats are PDF/CSV</div>
            </div>

            <div className="userinsightbox">
                <div className="userinsight"><Link to="/userInsights">User Insights</Link></div>
                <div className="Download">Download</div>
            </div>
                
        </div>


    </div>
  )
}

export default BStatements
