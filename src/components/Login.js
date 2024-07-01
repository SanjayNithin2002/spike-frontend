import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import LoadingIndicator from './LoadingIndicator';
import InfoPanel from './InfoPanel';
import { FaApple, FaGoogle, FaGithub, FaTwitter, FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loginError, setLoginError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async ({ name, email, password }) => {
    try {
      setIsLoading(true);
      setLoginError(null);
      const response = await fetch('https://spike-backend.vercel.app/users/login', {
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
      console.error(err);
      setLoginError('An unexpected error occurred. Please try again.');
    }
    finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="container flex h-screen font-poppins w-full bg-neutral-950 text-neutral-400">
      <InfoPanel/>
      <div className="w-7/12 p-16 flex flex-col justify-center items-center h-full">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex flex-col items-center w-full mb-8">
          <h3 className="text-3xl font-medium mb-6 text-center">log into your account</h3>
          <input
            type="email"
            placeholder="email*"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email address'
              }
            })}
            className="w-1/2 p-3 font-normal text-sm bg-neutral-800 rounded-full focus:outline-none focus:ring-0"
            autoFocus
          />
          <div className="w-1/2 relative">
            <input
              type={passwordVisible ? 'text' : 'password'}
              placeholder="password*"
              {...register('password', { required: 'Password is required' })}
              className="w-full p-3 font-normal text-sm bg-neutral-800 rounded-full focus:outline-none focus:ring-0"
            />
            <button type="button" onClick={togglePasswordVisibility} className="absolute inset-y-0 right-4 flex items-center text-neutral-400">
              {passwordVisible ? <FaEye/> : <FaEyeSlash/>}
            </button>
          </div>
          <p className="text-sm w-1/2 p-2 text-left">
            {loginError || (errors.email && errors.email.message) || (errors.password && errors.password.message) || '*required fields'}
          </p>
          <button type="submit" className="w-2/12 p-2 text-neutral-900 bg-neutral-100 rounded-full font-medium">
            {isLoading ? <LoadingIndicator color='neutral-900' /> : 'log in'}
          </button>
          <p>or continue with</p>
          <div className='flex flex-row justify-between w-1/3 text-neutral-300 mb-8'>
            <FaGoogle className='h-8 w-8' aria-label="Sign up with Google" />
            <FaApple className='h-8 w-8' aria-label="Sign up with Apple" />
            <FaGithub className='h-8 w-8' aria-label="Sign up with GitHub" />
            <FaTwitter className='h-8 w-8' aria-label="Sign up with Twitter" />
          </div>
        </form>
        <p className="mt-4 text-center">Don't have an account? <Link to="/signup" className="text-neutral-100">sign up</Link></p>
      </div>
    </div>
  );
}

export default Signup;