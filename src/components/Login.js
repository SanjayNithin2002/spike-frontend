import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-red-500 text-white p-8 flex flex-col justify-center">
        <h1 className="text-6xl font-bold mb-8">spike</h1>
        <ul className="space-y-4">
          <li>meet spike, a productivity tool that has <span className="font-semibold">consequences.</span></li>
          <li>spike focuses on monitoring your individual metrics and goal enforcement</li>
          <li>think of spike as your annoying mom who kicks your rear every time you fall behind on your home work</li>
          <li>so just log in and get to work bro</li>
        </ul>
      </div>
      <div className="w-1/2 bg-gray-100 p-8 flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-8">welcome back! let’s get started, yeah?</h2>
        <form className="space-y-4">
          <input type="email" placeholder="email" className="w-full p-3 border border-gray-300 rounded" required />
          <input type="password" placeholder="password" className="w-full p-3 border border-gray-300 rounded" required />
          <button type="submit" className="w-full p-3 bg-red-500 text-white rounded">log in</button>
        </form>
        <p className="my-4">or continue with</p>
        <button className="w-full p-3 bg-white border border-gray-300 rounded">Google</button>
        <p className="text-sm mt-4">By clicking continue, you agree to our <a href="#" className="text-red-500">Terms of Service</a> and <a href="#" className="text-red-500">Privacy Policy</a></p>
        <p className="mt-4">don’t have an account? <Link to="/signup" className="text-red-500">sign up</Link></p>
      </div>
    </div>
  );
}

export default Login;
