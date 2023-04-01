import React from 'react';
import UserContext from '../../Context/UserContext';
import { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

function Logout() {

    const usercontext = useContext(UserContext);
    const { isLoggedIn, setIsLoggedIn } = usercontext;

    useEffect(() => {  
      if(isLoggedIn){
        setIsLoggedIn(false);
        localStorage.setItem("isLoggedIn", false);
      }
    }, [])
    


  return (
    <div>
     { isLoggedIn ? (
          <div><Navigate to="/login" /></div>
          ) :
           ""
          }
    </div>
  )
}

export default Logout
