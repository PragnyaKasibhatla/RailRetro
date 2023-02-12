import * as React from "react";
import {BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom';
import Login from "./Login1";
import CustomerDashboard from "./Customer";
import RestoDashboard from "./RestoDashboard";
import Register from "./Register";
// import Orders from "./Orders";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
function NavBar(){
    return(
        <Router>
        <div className="header">
            <h1 style={{position:"absolute",top:"10px"}}>Rail Retro</h1>
            <Link to="./Login">Login</Link>
            <Link to="./CustomerDashboard">Customer</Link>
            <Link to="./RestoDashboard">Restaurant</Link>
        </div>
        <div>
            <Routes>
                <Route path="/Login" element={<Login history={history}/>}/>
                <Route path="/Register" element={<Register/>}/>
            </Routes>
        </div>
        <div>
            <Routes>
            <Route path="/CustomerDashboard" element={<CustomerDashboard/>}/>
            </Routes>
        </div>
        <div>
            <Routes>
            <Route path="/RestoDashboard" element={<RestoDashboard/>}/>
            </Routes>
        </div>
        </Router>)
}

export default NavBar;