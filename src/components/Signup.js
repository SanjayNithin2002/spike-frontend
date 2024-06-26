import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="flex h-screen font-redHat w-full">
      <div className="w-5/12 bg-redSpike text-whiteSpike p-8 flex flex-col justify-center items-center h-full">
        <h1 className="text-8xl font-bold mb-20">spike</h1>
        <ul className="space-y-4 text-lg">
          <li>meet spike, a productivity tool that has <span className="font-semibold italic">consequences.</span></li>
          <li>spike focuses on monitoring your individual metrics and goal enforcement</li>
          <li>think of spike as your annoying mom who kicks your rear every time you fall behind on your home work</li>
          <li>so just sign up and get to work bro</li>
        </ul>
      </div>

      <div className="w-7/12 bg-whiterSpike p-16 flex flex-col justify-center items-center h-full">
        <h2 className="text-4xl font-semibold mb-2 text-redSpike text-center">new here?</h2>
        <h2 className="text-4xl font-semibold mb-8 text-redSpike text-center">well, let’s get to work.</h2>
        <h3 className="text-xl font-semibold mb-6 text-redSpike text-center">create an account</h3>
        <form className="space-y-4 flex flex-col items-center w-full">
          <input type="text" placeholder="name" className="w-1/2 p-3 border font-semibold border-gray-300 rounded-lg" required />
          <input type="email" placeholder="email" className="w-1/2 p-3 border font-semibold border-gray-300 rounded-lg" required />
          <input type="password" placeholder="password" className="w-1/2 p-3 border font-semibold border-gray-300 rounded-lg mb-4" required />
          <p className="text-sm text-left text-redSpike">This sucks.</p>
          <button type="submit" className="w-1/2 p-3 bg-redSpike text-white rounded-lg mt-4">sign up</button>
          <br/>
        </form>
        <p className="w-1/2 text-sm mt-4 text-center">By clicking continue, you agree to our <a href="#" className="text-redSpike">Terms of Service</a> and <a href="#" className="text-redSpike">Privacy Policy</a></p>

        <p className="mt-4 text-center">already have an account? <Link to="/login" className="text-redSpike">log in</Link></p>
      </div>
    </div>
  );
}

export default Signup;
