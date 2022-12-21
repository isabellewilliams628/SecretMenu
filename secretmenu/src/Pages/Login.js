import './Login.css';
import React, { useState } from 'react';
import NavBar from '../Components/NavBar.js'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";


function Login({auth}) {
  console.log(auth)
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const renderErrorMessage = name =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    )

    const errors = {
      uname: "invalid username",
      pass: "invalid password"
    };

    const handleSubmitLogin = (event) =>{
      event.preventDefault();
      signInWithEmailAndPassword(auth, email, password).then((user) => {
        console.log(user.user)
      })
      setIsSubmitted(true);
    };

    const handleSubmitRegister = (event) =>{
      event.preventDefault();
      createUserWithEmailAndPassword(auth, email, password)
      setIsSubmitted(true);
    };


   
  const renderLoginForm = (
    <form onSubmit={handleSubmitLogin}>
        <div className="input">
          <label>Email</label>
          <input type="text" name="uname" required value={email} onChange={e => setEmail(e.target.value)}/>
             {renderErrorMessage("uname")}
        </div>
        <div className="input">
          <label>Password</label>
          <input type="password" name="pass" required value={password} onChange={e => setPassword(e.target.value)}/>
              {renderErrorMessage("pass")}
        </div>
        <div className="button">
          <input type="submit" />
        </div>
    </form>
  );

  const renderRegisterForm = (
    <form onSubmit={handleSubmitRegister}>
       <div className="input">
          <label>Email</label>
          <input type="email" name="email" required value={email} onChange={e => setEmail(e.target.value)}/>
              {renderErrorMessage("email")}
        </div>
        <div className="input">
          <label>Password</label>
          <input type="password" name="pass" required value={password} onChange={e => setPassword(e.target.value)}/>
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
            <div onClick={() => {signOut(auth)}}>Log out</div>
        </div>
    </div>
  );
}

export default Login;