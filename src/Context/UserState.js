import UserContext from './UserContext'
import { useState } from 'react'


const UserState = (props) => {
    const [accessToken, setAccessToken] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <UserContext.Provider value={{accessToken, setAccessToken, isLoggedIn, setIsLoggedIn}}>
        {props.children}
    </UserContext.Provider>
  )
}

export default UserState