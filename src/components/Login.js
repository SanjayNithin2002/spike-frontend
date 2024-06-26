import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import LoadingIndicator from './LoadingIndicator';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loginError, setLoginError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async ({ name, email, password }) => {
    try {
      setIsLoading(true);
      setLoginError(null);
      const response = await fetch('https://spike-backend-yxt7.onrender.com/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password })
      });
      const results = await response.json();
      if (!response.ok) {
        setLoginError(results.error);
      }
      else {
        navigate('/create');
      }
    }
    catch (err) {
      console.log(err);
      setLoginError(err.message);
    }
    finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen font-redHat w-full">
      <div className="w-4/12 bg-redSpike text-whiteSpike p-8 flex flex-col justify-center items-center h-full">
        <h1 className="text-8xl font-bold mb-20">spike</h1>
        <ul className="space-y-4 text-lg">
          <li>meet spike, a productivity tool that has <span className="font-semibold italic">consequences.</span></li>
          <li>spike focuses on monitoring your individual metrics and goal enforcement</li>
          <li>think of spike as your annoying mom who kicks your rear every time you fall behind on your home work</li>
          <li>so just sign up and get to work bro</li>
        </ul>
      </div>

      <div className="w-8/12 bg-whiterSpike p-16 flex flex-col justify-center items-center h-full">
        <h2 className="text-4xl font-semibold mb-2 text-redSpike text-center">welcome back!</h2>
        <h2 className="text-4xl font-semibold mb-8 text-redSpike text-center">let's get started, yeah?</h2>
        <h3 className="text-xl font-semibold mb-8 text-redSpike text-center">log back in</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex flex-col items-center w-full">
          <input
            type="email"
            placeholder="email"
            {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
            className="w-1/2 p-3 border font-semibold border-gray-300 rounded-lg"
          />
          {errors.email && <p className="text-sm text-redSpike w-1/2">{errors.email.message}</p>}

          <input
            type="password"
            placeholder="password"
            {...register('password', { required: 'Password is required' })}
            className="w-1/2 p-3 border font-semibold border-gray-300 rounded-lg mb-4"
          />
          {errors.password && <p className="text-sm text-redSpike w-1/2">{errors.password.message}</p>}

          {loginError && <p className="text-sm w-1/2 p-2 text-left text-redSpike">{loginError}</p>}
          <br/>
          <button type="submit" className="w-1/2 p-2 bg-redSpike text-white rounded-lg mt-4">
            {isLoading ? <LoadingIndicator/> : 'log in'}
          </button>
        </form>
        <p className="mt-4 text-center">don't have an account? <Link to="/signup" className="text-redSpike">sign up</Link></p>
      </div>
    </div>
  );
}

export default Login;
