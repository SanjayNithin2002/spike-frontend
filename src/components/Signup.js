import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  return (
    <div className="container">
      <div className="left">
        <h1>spike</h1>
        <ul>
          <li>meet spike, a productivity tool that has <span>consequences.</span></li>
          <li>spike focuses on monitoring your individual metrics and goal enforcement</li>
          <li>think of spike as your annoying mom who kicks your rear every time you fall behind on your home work</li>
          <li>so just sign up and get to work bro</li>
        </ul>
      </div>
      <div className="right">
        <h2>new here? well, let’s get to work.</h2>
        <form>
          <div className="input-group">
            <input type="email" placeholder="email" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="password" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="confirm password" required />
          </div>
          <button type="submit">sign up</button>
        </form>
        <p>or continue with</p>
        <button className="google">Google</button>
        <p>By clicking continue, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></p>
        <p>already have an account? <a href="/login">log in</a></p>
      </div>
    </div>
  );
}

export default Signup;
