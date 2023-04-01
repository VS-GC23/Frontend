import React from 'react';
import { useState } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';

function Payind() {

    const [accountNo, setAccountNo] = useState("");
    const [ifscCode, setIfscCode] = useState("");
    const [amount, setAmount] = useState("");
    const [name, setName] = useState("");
    const [ isSubmitLoading, setIsSubmitLoading] = useState(false);

    const handleSubmit = () => {
        console.log('f')
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
          <button className="submit" disabled={isSubmitLoading} type="submit">
            Pay {isSubmitLoading && <AiOutlineLoading size={15} />}
          </button>

        </form>
      </div>
    </div>
  )
}

export default Payind
