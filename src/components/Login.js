import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className="container">
      <div className="right">
        <h2>welcome back! let’s get started, yeah?</h2>
        <form>
          <div className="input-group">
            <input type="email" placeholder="email" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="password" required />
          </div>
          <button type="submit">log in</button>
        </form>
        <p>or continue with</p>
        <button className="google">Google</button>
        <p>By clicking continue, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></p>
        <p>don’t have an account? <a href="/signup">sign up</a></p>
      </div>
      <div className="left">
        <h1>spike</h1>
        <ul>
          <li>meet spike, a productivity tool that has <span>consequences.</span></li>
          <li>spike focuses on monitoring your individual metrics and goal enforcement</li>
          <li>think of spike as your annoying mom who kicks your rear every time you fall behind on your home work</li>
          <li>so just log in and get to work bro</li>
        </ul>
      </div>
    </div>
  );
}

export default Login;
