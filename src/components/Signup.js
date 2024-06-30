import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import LoadingIndicator from './LoadingIndicator';
import { FaApple, FaGoogle, FaGithub, FaTwitter } from "react-icons/fa";

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [signupError, setSignupError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async ({ name, email, password }) => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 5000);
    navigate('/home');
  };

  return (
    <div className="container flex h-screen font-poppins w-full bg-neutral-950 text-neutral-400">
      <div className='w-1/12'></div>
      <div className="w-5/12  text-neutral-400 flex flex-col justify-evenly items-center h-full">

        <h1 className="text-9xl font-semibold">{'>'}conseq.</h1>
        <ul className="space-y-4 text-lg w-full">
          <li>{`> meet spike, a productivity tool that has consequences.`} </li>
          <li>{`> spike focuses on monitoring your individual metrics and goal enforcement.`}</li>
          <li>{`> think of spike as your annoying mom who kicks your rear every time you fall behind on your home work.`}</li>
          <li>{`> think of spike as your annoying mom who kicks your rear every time you fall behind on your home work.`}</li>
          <li>{`> so just sign up and get to work bro.`}</li>
        </ul>
      </div>

      <div className="w-7/12 bg-neutral-950 p-16 flex flex-col justify-center items-center h-full shadow-lg">

        <h2 className="text-4xl font-medium mb-2 text-center">new here?</h2>
        <h2 className="text-4xl font-medium mb-6 text-center">well, let's get to work.</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex flex-col items-center w-full">
        <h3 className="text-xl font-medium mb-4 text-center">create an account</h3>
          <input
            type="text"
            placeholder="name"
            {...register('name', { required: 'Name is required' })}
            className="w-1/2 p-3 font-normal text-sm bg-neutral-800 rounded-full focus:outline-none focus:ring-0"
            autoFocus
          />
          {errors.name && <p className="text-sm w-1/2">{errors.name.message}</p>}

          <input
            type="email"
            placeholder="email"
            {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
            className="w-1/2 p-3 font-normal text-sm bg-neutral-800 rounded-full focus:outline-none focus:ring-0"
          />
          {errors.email && <p className="text-sm  w-1/2">{errors.email.message}</p>}

          <input
            type="password"
            placeholder="password"
            {...register('password', { required: 'Password is required' })}
            className="w-1/2 p-3 font-normal text-sm bg-neutral-800 rounded-full focus:outline-none focus:ring-0"
          />
          {errors.password && <p className="text-sm text-redSpike w-1/2">{errors.password.message}</p>}

          {signupError && <p className="text-sm w-1/2 p-2 text-left">{signupError}</p>}

          <button type="submit" className="w-2/12 p-2  text-neutral-900 bg-neutral-100 rounded-full mt-4">
            {isLoading ? <LoadingIndicator /> : 'sign up'}
          </button>
          <div>or sign up with</div>
          <div className='flex flex-row justify-between w-1/3 text-neutral-300'>
            <FaGoogle className='h-8 w-8' />
            <FaApple className='h-8 w-8' />
            <FaGithub className='h-8 w-8' />
            <FaTwitter className='h-8 w-8' />
          </div>
          
        </form>

        <p className="w-1/2 text-sm mt-4 text-center">By clicking continue, you agree to our <span className="text-neutral-100">Terms of Service</span> and <span className="text-redSpike">Privacy Policy</span></p>
        <p className="mt-4 text-center">already have an account? <Link to="/login" className="text-neutral-100">log in</Link></p>
      </div>
    </div>
  );
}

export default Signup;
