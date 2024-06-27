import React from 'react';

const NavBar = () => {
    return (
        <nav className="bg-redSpike flex justify-between items-center p-2">
            <div className="text-graySpike font-bold text-6xl mb-2 pl-8">
                spike
            </div>
            <div className="pr-9">
            <div className="bg-whitestSpike text-redSpike flex items-center justify-center rounded-full h-16 w-16 font-bold">
                user
            </div>
            </div>
        </nav>
    );
};

export default NavBar;