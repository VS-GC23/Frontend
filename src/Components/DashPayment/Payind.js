import axios from 'axios';
import React from 'react';
import { useState, useContext } from 'react';
import Select from 'react-select';
import { AiOutlineLoading } from 'react-icons/ai';
import UserContext from '../../Context/UserContext';

function Payind() {

  const usercontext = useContext(UserContext);
  const { accessToken,userBank } = usercontext;

    const [accountNo, setAccountNo] = useState("");
    const [ifscCode, setIfscCode] = useState("");
    const [amount, setAmount] = useState("");
    const [name, setName] = useState("");
    const [selectedBank, setSelectedBank] = useState("select-account");
    const [description, setDescription] = useState("");
    const [errmssg, setErrmssg] = useState();
    const [ isSubmitLoading, setIsSubmitLoading] = useState(false);
    let sender ={
      AccountNumber:"",
      IFSCCode:"",
      CustomerName:""
    };
    let receiver = {
      AccountNumber:accountNo,
      IFSCCode:ifscCode,
      CustomerName:name
    };

    const handleSubmit = (e) => {

      userBank.map(userbank =>{
        if(selectedBank == userbank.AccountNumber){
          sender = {
            AccountNumber:userbank.AccountNumber,
            IFSCCode:userbank.IFSCCode,
            CustomerName:userbank.Name
          }
        }
      })

      e.preventDefault();

      // alert(selectedBank);
      axios.post("",{
        sender:sender,
        receiver:receiver,
        paymentAmount:amount,
        Description:description
      },{
        headers:{
          "authorization":`Bearer ${accessToken}`
        }
      })
      .then(res => {
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
    <div id="Payindlogin">
      <div className="login">
          <div className='PayIndHeading'>Payments to Individual</div>
        <form onSubmit={handleSubmit}>
        <div className="item-group">
            <div className="form-item form-item-long required">
              <div className="label">Account No.</div>
              <input id="email" type="text" placeholder='Recipient Account No.' value={accountNo} required onChange={(e)=>{setAccountNo(e.target.value)}} />
            </div>
          </div>
          <div className="item-group">
            <div className="form-item form-item-long required">
              <div className="label">IFSC Code</div>
              <input id="ifscCode" type="text" placeholder='Recipient IFSC Code' value={ifscCode} required onChange={(e)=>{setIfscCode(e.target.value)}} />
            </div>
          </div>
          <div className="item-group">
            <div className="form-item form-item-long required">
              <div className="label">Name</div>
              <input id="name" type="text" placeholder='Recipient Name' value={name} required onChange={(e)=>{setName(e.target.value)}} />
            </div>
          </div>
          <div className="item-group">
            <div className="form-item form-item-long required">
              <div className="label">Payment Amount</div>
              <input id="amount" type="text" placeholder='Amount' value={amount} required onChange={(e)=>{setAmount(e.target.value)}} />
            </div>
          </div>
          <div className="item-group">
            <div className="form-item form-item-long required">
              <div className="label">Description</div>
              <input id="description" type="text" placeholder='Description' value={description} required onChange={(e)=>{setDescription(e.target.value)}} />
            </div>
          </div>

          
            <select name="" id="" value={selectedBank} onChange={(e)=>{setSelectedBank(e.target.value)}}>
              <option value="select-bank">Choose an Account</option>
              {
                userBank.map(userbank => (
                  <option key={userbank.AccountNumber} value={userbank}>{userbank.AccountNumber}</option>
                 
                ))
              }
            </select>
         

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

export default Payind
