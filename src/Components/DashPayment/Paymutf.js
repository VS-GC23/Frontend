import React from 'react';
import axios from 'axios';
import UserContext from '../../Context/UserContext';
import { useState, useContext } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';

function Paymutf() {

    const usercontext = useContext(UserContext);
    const { accessToken,userBank } = usercontext;
    const [amount, setAmount] = useState("");
    const [mutualFundId, setMutualFundId] = useState("");
    const [description, setDescription] = useState("");
    const [errmssg, setErrmssg] = useState();
    const [selectedBank, setSelectedBank] = useState("select-account");
    const [ isSubmitLoading, setIsSubmitLoading] = useState(false);

    const handleSubmit = () => {
      axios.post("http://localhost:8080/payments/mutual-funds",{
        AccountNumber:"",
        IFSCCode:"",
        CustomerName:"",
        paymentAmount:amount,
        MutualFundsID:mutualFundId,
        Description:description

      },{
        headers:{
          "authorization":`Bearer ${accessToken}`
        }
      })
      .then(res =>{
        setIsSubmitLoading(false);
        setErrmssg("");
      })
      .catch(err => {
        setErrmssg(err.response.data.message);
        console.log(err);
        setIsSubmitLoading(false);
      })
    }

  return (
    <div>

<div className="login">
          <div className='PayIndHeading'>Payments in Mutual Fund</div>
        <form onSubmit={handleSubmit}>

          <div className="item-group">
            <div className="form-item form-item-long required">
              <div className="label">Payment Amount</div>
              <input id="amount" type="text" placeholder='Amount' value={amount} required onChange={(e)=>{setAmount(e.target.value)}} />
            </div>
          </div>

          <div className="item-group">
            <div className="form-item form-item-long required">
              <div className="label">Mutual Fund ID</div>
              <input id="mutualFundId" type="text" placeholder='Mutual Fund ID' value={mutualFundId} required onChange={(e)=>{setMutualFundId(e.target.value)}} />
            </div>
          </div>

          <div className="item-group">
            <div className="form-item form-item-long required">
              <div className="label">Description</div>
              <input id="description" type="text" placeholder='Description' value={description} required onChange={(e)=>{setDescription(e.target.value)}} />
            </div>
          </div>

          <button className="submit" disabled={isSubmitLoading} type="submit">
            Pay {isSubmitLoading && <AiOutlineLoading size={15} />}
          </button>

          <div className="item-group">
            <div className="form-item form-item-long errmsg">
              {errmssg}
            </div>
          </div>

        </form>
      </div>
      
    </div>
  )
}

export default Paymutf
