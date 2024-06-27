import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import LoadingIndicator from './LoadingIndicator';
import InfoPanel from './InfoPanel';

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
        localStorage.setItem('token', results.token)
        navigate('/home');
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
      <InfoPanel/>

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
