import axios from 'axios'
import React, { useEffect, useContext, useState } from 'react';
import UserContext from '../../Context/UserContext';


function HistoryInv() {

    const usercontext = useContext(UserContext);
    const { accessToken,userBank } = usercontext;
    const [histinds, setHistinds] = useState([]);

    useEffect(()=>{
        axios.get("https://payment-service-fintech-23.apps.fintech-os23.s2yb.p1.openshiftapps.com/payments/get-investments",{
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

        <div className="IndTransac">Payments in Investments</div>
        {
            histinds.map( (histind,index) => (
                <div className="HistoryPayment" key={index}>
                    <div className='histindpay'>Amount: {histind.paymentAmount}</div>
                    <div className='histindpay'>Description: {histind.Description}</div>
                    <div className='histindpay'>Account Number: {histind.AccountNumber}</div>
                </div>
            ))
        }
    </div>
  )
}

export default HistoryInv
