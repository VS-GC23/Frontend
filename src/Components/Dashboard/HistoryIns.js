import axios from 'axios'
import React, { useEffect, useContext, useState } from 'react';
import UserContext from '../../Context/UserContext';

function HistoryIns() {


    const usercontext = useContext(UserContext);
    const { accessToken,userBank } = usercontext;
    const [histinds, setHistinds] = useState([]);

    useEffect(()=>{
        axios.get("https://payment-service-fintech-23.apps.fintech-os23.s2yb.p1.openshiftapps.com/payments/get-insurance",{
            headers:{
                "authorization":`Bearer ${accessToken}`
            }
        })
        .then(res => {
            setHistinds(res.data);
            console.log(res.data);
        })
    },[])

  return (
    <div className='HistIndWrapper'>

        <div className="IndTransac">Payments in Insurances</div>
        {
            histinds.map( (histind,index) => (
                <div className="HistoryPayment" key={index}>
                    <div className='histindpay'>Name: {histind.CustomerName}</div>
                    <div className='histindpay'>Account Number: {histind.AccountNumber}</div>
                    <div className='histindpay'>Insurance ID: {histind.InsuranceID}</div>
                    <div className='histindpay'>Description: {histind.Description}</div>
                </div>
            ))
        }
    </div>
  )
}

export default HistoryIns
