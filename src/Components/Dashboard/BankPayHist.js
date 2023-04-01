import axios from 'axios'
import React, { useEffect, useContext, useState } from 'react';
import UserContext from '../../Context/UserContext';

function BankPayHist() {

    const usercontext = useContext(UserContext);
    const { accessToken,userBank } = usercontext;
    const [histinds, setHistinds] = useState([]);

    useEffect(()=>{
        axios.get("",{
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
                    <div className='histindpay'>Amount: {histind.Amount}</div>
                    <div className='histindpay'>Description: {histind.Description}</div>
                    <div className='histindpay'>Recipient Account Number: {histind.RecipientAccountNumber}</div>
                    <div className='histindpay'>Sender Account Number: {histind.senderAccountNumber}</div>
                </div>
            ))
        }
      
    </div>
  )
}

export default BankPayHist
