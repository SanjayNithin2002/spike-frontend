import React from 'react';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';

const App = () => {
    const navigate = useNavigate();
    const gotToCreateSpike = () =>{
        navigate("/createSpike");
    }
    return (
    <div className='font-poppins h-screen w-full bg-neutral-950 text-neutral-400'>
        <NavBar />
        <div className="bg-graySpike bg-opacity-50 flex flex-col items-left w-full p-20 pl-8">
            <div className="text-blackSpike font-bold text-5xl pl-2 pb-3 pt-5">
                welcome back, <span className="text-redSpike">sanjay nithin!</span>
            </div>
            <div className="font-bold text-grayestSpike text-opacity-90 text-xl pl-3 pb-6">
                    sup? you ready to take on the day?
            </div>
        </div>
        <div className="bg-whitestSpike h-full">
            <div className="flex flex-col items-left text-blackSpike font-bold text-xl pt-10 pl-12">
                get started by creating a spike -
            </div>
            <div className="flex flex-col items-center text-redSpike font-bold text-xl pt-5 pl-10 pb-10">
                <ol type="1">
                    <li>1. choose your mode of productivity</li>  
                    <li>2. select  / create the respective metric</li>
                    <li>3. choose / create a consequence that would nag you into doing your job</li>
                    <li>4. do your job / face your consequence</li>
                </ol>
            </div>
            <div className="mt-6 text-center pb-20">
                <button onClick={() => gotToCreateSpike()} className="bg-redSpike text-whitestSpike font-bold text-3xl py-6 px-8 rounded shadow hover:bg-redSpike bg-opacity-90 transition duration-300">
                    create your spike
                </button>
            </div>
        </div>
    </div>
  );
};

export default App;
