import React, { useState } from "react";
import Register from "./Register";
import Orders from "./Orders";
import { Router,Link,Routes,Route } from "react-router-dom";

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const[isNewUser,setIsNewUser] = useState(false);

  // User Login info
  const database = [
    {
      username: "Pragnya",
      password: "prajju"
    },
    {
      username: "Siri",
      password: "siri"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if
     (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
    
    function register(){
      setIsNewUser(true);
    }

  // JSX code for login form
  const renderForm = (
    <div className="container">
    <div>
        {isNewUser?<Register/>: <div>
        <form className="form">
          <h1>Sign In</h1>
          <input type="text" name="uname" placeholder="Username"required />
          {renderErrorMessage("uname")}
          <input type="password" name="pass" placeholder="Password"required />
          {renderErrorMessage("pass")}
        <button type="submit" onClick={handleSubmit}>Login</button>
      </form>
      <span >
        New User?
          <Link onClick={register}>Register</Link>
      </span>
        </div>}
      </div>
    </div>
  );

  return (
      <div>
        {isSubmitted ? 
            <div><Orders/></div>
         : renderForm}
      </div>
  );
}

export default Login;