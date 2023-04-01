import './App.css';
import Home from './Components/Home/Home';
import { Routes, Route, Link } from "react-router-dom";
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import UserContext from './Context/UserContext';
import { useContext, useEffect } from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Logout from './Components/Logout/Logout';
import DashPayment from './Components/DashPayment/DashPayment';
import BStatements from './Components/BankStatements/BStatements';
import DataViz from './Components/DataViz/DataViz';

function App() {
  
  const usercontext = useContext(UserContext);
  const { isLoggedIn, setIsLoggedIn } = usercontext;

  useEffect(() => {
    if(localStorage.getItem(isLoggedIn) == true){
      setIsLoggedIn(true);
    }
    else if(localStorage.getItem(isLoggedIn) == false){
      setIsLoggedIn(false);
    }
  }, [])
  

  return (
    <div className="App">
      {/* <div className="navbarHome">
        <div className="Homeheading">FinTech</div>
        
        { !isLoggedIn ? (
          <div className="Homehome"><Link to="/">Home</Link></div>
          ) :
           ""
        }
        { !isLoggedIn ? (
          <div className="Homeregister"><Link to="/register">Register</Link></div>
          ) :
           ""
        }
        { !isLoggedIn ? (
          <div className="HomeLogin"><Link to="/login">Login</Link></div>
          ) :
           ""
        }
        { isLoggedIn ? (
          <div className="Logout"><Link to="/Logout">Logout</Link></div>
          ) :
           ""
        }
      </div> */}

      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/dashboard" element={<Dashboard/>} />
        <Route exact path="/payment" element={<DashPayment/>}/>
        <Route exact path="/statements" element={<BStatements/>}/>
        <Route exact path="/logout" element={<Logout/>} />
        <Route exact path="/userInsights" element={<DataViz/>} />
      </Routes>
      
    </div>
  );
}

export default App;
