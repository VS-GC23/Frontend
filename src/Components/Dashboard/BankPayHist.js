import axios from 'axios'
import React, { useEffect, useContext, useState } from 'react';
import UserContext from '../../Context/UserContext';

function BankPayHist() {

    const usercontext = useContext(UserContext);
    const { accessToken,userBank } = usercontext;
    const [histinds, setHistinds] = useState([]);

    useEffect(()=>{
        axios.get("https://data-service-microservice-fintech-23.apps.fintech-os23.s2yb.p1.openshiftapps.com/uploadCsv/get-bankstatement",{
            headers:{
                "authorization":`Bearer ${accessToken}`
            }
        })
        .then(res => {
            setHistinds(res.data)
            console.log(res.data);
        })
    },[])

  return (
    <div className='HistIndWrapper'>

        <div className="IndTransac">Edited Bank Statements</div>
        {
            histinds.map( (histind,index) => (
                <div className="HistoryPayment" key={index}>
                    <div className='histindpay'>Date: {histind.date}</div>
                    <div className='histindpay'>Time: {histind.time}</div>
                    <div className='histindpay'>Type: {histind.type}</div>
                    <div className='histindpay'>Description: {histind.description}</div>
                    <div className='histindpay'>Debit: {histind.debit}</div>
                    <div className='histindpay'>Credit: {histind.credit}</div>
                    <div className='histindpay'>Balance: {histind.balance}</div>
                </div>
            ))
        }
      
    </div>
  )
}

export default BankPayHist
