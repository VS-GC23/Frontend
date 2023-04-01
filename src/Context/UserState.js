import UserContext from './UserContext'
import { useState } from 'react'


const UserState = (props) => {
    const [accessToken, setAccessToken] = useState("");
    const [user, setUser] = useState();
    const [userBank, setUserBank] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <UserContext.Provider value={{userBank, setUserBank, user, setUser, accessToken, setAccessToken, isLoggedIn, setIsLoggedIn}}>
        {props.children}
    </UserContext.Provider>
  )
}

export default UserState