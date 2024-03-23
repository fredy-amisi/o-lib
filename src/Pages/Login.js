import React from "react";
import "../Css/login.css"; // Note the change in the CSS file name
import Scrollbutton from "../Components/Scrollbutton";

const Login = () => {
  return (
    <div>
      <div className="login-section">
        <h3>Online Library</h3>
        <p>Sign in to your account</p>
        <form action="services.html" method="post">
          <label htmlFor="username">Username :
            <input type="text" name="username" id="username" placeholder="Write Your Username Here" required/>

          </label>
          <label htmlFor="password">Password  :<br/>
            <input type="password" name="password" id="password" placeholder="Write Your Password Here" required/>

          </label>
          <div className="div-remember">
            <label htmlFor="checkbox"><span>Remember Me</span>
            <input type="checkbox" name="checkbox" id="checkbox" />
            
            </label>  
            <p>Forgot Your Password ?</p>
          </div>
          <button className="login-button"><span>Login</span></button>

          <p className="dont-p">Dont Have An Account ? Sign Up</p>
        </form>
      </div>
      <Scrollbutton/>
    </div>
  );
};

export default Login;
