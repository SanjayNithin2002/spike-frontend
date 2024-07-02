import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="container flex flex-col h-screen justify-center items-center font-poppins w-full bg-neutral-950 text-neutral-400">
            <div className="text-center">
                <h1 className="text-5xl font-semibold">404 - Not Found</h1>
                <p className="text-lg mt-4">Oops! The page you are looking for doesn't exist.</p>
                <p className="text-lg mt-4">Let's get you back <Link to="/home" className="text-neutral-100 hover:text-neutral-300">Home</Link>.</p>
            </div>
        </div>
    );
}

export default NotFound;
