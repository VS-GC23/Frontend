import React from 'react'

function Payinv() {

    const handleSubmit = () => {
        console.log('f')
    }

  return (
    <div>
      <div className="login">
          <div className='PayIndHeading'>Payments in Investment</div>
        <form onSubmit={handleSubmit}>
        <div className="item-group">
            <div className="form-item form-item-long required">
              <div className="label">Account No.</div>
              <input id="email" type="text" placeholder='Account No.' value={accountNo} required onChange={(e)=>{setAccountNo(e.target.value)}} />
            </div>
          </div>
          <div className="item-group">
            <div className="form-item form-item-long required">
              <div className="label">IFSC Code</div>
              <input id="password" type="text" placeholder='IFSc Code' value={ifscCode} required onChange={(e)=>{setIfscCode(e.target.value)}} />
            </div>
          </div>
          <div className="item-group">
            <div className="form-item form-item-long required">
              <div className="label">Payment Amount</div>
              <input id="password" type="text" placeholder='Amount' value={amount} required onChange={(e)=>{setAmount(e.target.value)}} />
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

export default Payinv
