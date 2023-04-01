import axios from 'axios';
import React from 'react';
import { useState, useContext } from 'react';
import UserContext from '../../Context/UserContext';
import { AiOutlineLoading } from 'react-icons/ai';


function Payins() {

    const usercontext = useContext(UserContext);
    const { accessToken,userBank } = usercontext;
    const [insurancetId, setInsuranceId] = useState("");
    const [description, setDescription] = useState("");
    const [errmssg, setErrmssg] = useState();
    const [selectedBank, setSelectedBank] = useState("select-account");
    const [ isSubmitLoading, setIsSubmitLoading] = useState(false);

    const handleSubmit = () => {
      axios.post("http://localhost:8080/payments/insurance",{
        AccountNumber:"",
        IFSCCode:"",
        CustomerName:"",
        InsuranceID:insurancetId,
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
          <div className='PayIndHeading'>Payments in Insurance</div>
        <form onSubmit={handleSubmit}>

          <div className="item-group">
            <div className="form-item form-item-long required">
              <div className="label">Insurance ID</div>
              <input id="insuranceid" type="text" placeholder='Insurance ID' value={insurancetId} required onChange={(e)=>{setInsuranceId(e.target.value)}} />
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

export default Payins
