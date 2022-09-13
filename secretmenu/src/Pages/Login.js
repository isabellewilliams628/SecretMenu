import './Login.css';
import React, { useState } from 'react';
import NavBar from '../Components/NavBar.js'


function Login() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
 
  const renderErrorMessage = name =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    )

    const errors = {
      uname: "invalid username",
      pass: "invalid password"
    };

    const handleSubmit = (event) =>{
      event.preventDefault();

      setIsSubmitted(true);
    };

   
  const renderLoginForm = (
    <form onSubmit={handleSubmit}>
        <div className="input">
          <label>Username</label>
          <input type="text" name="uname" required />
             {renderErrorMessage("uname")}
        </div>
        <div className="input">
          <label>Password</label>
          <input type="password" name="pass" required />
              {renderErrorMessage("pass")}
        </div>
        <div className="button">
          <input type="submit" />
        </div>
    </form>
  );

  const renderRegisterForm = (
    <form onSubmit={handleSubmit}>
       <div className="input">
          <label>Email</label>
          <input type="email" name="email" required />
              {renderErrorMessage("email")}
        </div>
        <div className="input">
          <label>Username</label>
          <input type="text" name="uname" required />
             {renderErrorMessage("uname")}
        </div>
        <div className="input">
          <label>Password</label>
          <input type="password" name="pass" required />
              {renderErrorMessage("pass")}
        </div>
        <div className="button">
          <input type="submit" />
        </div>
    </form>
  );
 
  return (
    <div className="Log">
        <NavBar />
        <div className="boxContainer">
            <div className="loginBox">
                <div className="logText">Login Now!</div>
                {isSubmitted ? <div>User is successfully logged in</div> : renderLoginForm}
            </div>
            <div className="registerBox">
                <div className="logText">Register Now!</div>
                {isSubmitted ? <div>User is successfully logged in</div> : renderRegisterForm}
            </div>
        </div>
    </div>
  );
}

export default Login;