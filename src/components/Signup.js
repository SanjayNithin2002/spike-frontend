import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const Signup = () => {
  return (
    <div className="flex h-screen font-redHat">
      <div className="w-5/12 bg-redSpike text-whiteSpike p-8 flex flex-col justify-center items-center">
        <h1 className="text-8xl font-bold mb-20">spike</h1>
        <ul className="space-y-4 text-lg">
          <li>meet spike, a productivity tool that has <span className="font-semibold italic">consequences.</span></li>
          <li>spike focuses on monitoring your individual metrics and goal enforcement</li>
          <li>think of spike as your annoying mom who kicks your rear every time you fall behind on your home work</li>
          <li>so just sign up and get to work bro</li>
        </ul>
      </div>
      <div className="w-7/12 bg-whiterSpike p-16 flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-2 text-redSpike">new here?</h2>
        <p className="text-4xl font-bold mb-2 text-redSpike">well, let’s get to work.</p>
        <h3 className="text-xl font-semibold mb-4 text-redSpike">create an account</h3>
        <form className="space-y-4 justify-center items-center">
          <input type="email" placeholder="email" className="w-2/3 p-3 border border-gray-300 rounded justify-center" required />
          <input type="password" placeholder="password" className="w-2/3 p-3 border border-gray-300 rounded" required />
          <input type="password" placeholder="confirm password" className="w-2/3 p-3 border border-gray-300 rounded" required />
          <button type="submit" className="w-full p-3 bg-redSpike text-white rounded">sign up</button>
        </form>
        <div className="my-4 text-center text-gray-600">or continue with</div>
        <button className="w-full p-3 bg-white border border-gray-300 rounded flex items-center justify-center">
          <img src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" alt="Google" className="w-6 h-6 mr-2" />
          Google
        </button>
        <p className="text-sm mt-4 text-center">By clicking continue, you agree to our <a href="#" className="text-redSpike">Terms of Service</a> and <a href="#" className="text-redSpike">Privacy Policy</a></p>
        <p className="mt-4 text-center">already have an account? <Link to="/login" className="text-redSpike">log in</Link></p>
      </div>
    </div>
  );
}

export default Signup;
