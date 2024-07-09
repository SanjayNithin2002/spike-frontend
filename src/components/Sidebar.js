import React, { useState, useEffect } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineCreate, MdOutlineHome, MdGridView } from "react-icons/md";
import { IoAnalytics } from "react-icons/io5";
import { RiToolsFill, RiSettings3Line } from "react-icons/ri";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const user = JSON.parse(localStorage.getItem('user'));
    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                setSidebarVisible(true);
            }, 300);
            return () => clearTimeout(timer);
        } else {
            setSidebarVisible(false);
        }
    }, [isOpen]);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex z-30">
            <button
                onClick={toggleSidebar}
                className={`p-2 bg-neutral-950 text-neutral-400 font-poppins fixed top-2 z-20 transition-all duration-300 ${sidebarVisible ? 'left-[14%]' : 'left-2'
                    }`}
            >
                <RxHamburgerMenu className='h-6 w-6' />
            </button>
            <div
                className={`fixed bg-neutral-950 text-neutral-400 font-poppins top-0 left-0 h-full transition-transform duration-300 transform ${sidebarVisible ? 'translate-x-0 shadow-sm shadow-neutral-800' : '-translate-x-full'
                    }`}
                style={{ width: '17%' }}
            >
                <div className="p-4">
                    <h1 className="text-5xl font-semibold mb-28 mt-4 text-center">spike.</h1>
                    <nav className="mb-8">
                        <ul>
                            <li className="mb-6 ml-3 flex items-center">
                                <MdOutlineHome className='h-5 w-5 mr-1' />
                                <a href="/home" className="pt-1">Home</a>
                            </li>
                            <li className="mb-6 ml-3 flex items-center">
                                <MdOutlineCreate className='h-5 w-5 mr-1' />
                                <a href="/createspike" className="pt-1">Create</a>
                            </li>
                            <li className="mb-6 ml-3 flex items-center">
                                <MdGridView className='h-5 w-5 mr-1' />
                                <a href="#" className="pt-1">View</a>
                            </li>
                            <li className="mb-6 ml-3 flex items-center">
                                <IoAnalytics className='h-5 w-5 mr-1' />
                                <a href="#" className="pt-1">Analytics</a>
                            </li>
                            <li className="mb-6 ml-3 flex items-center">
                                <RiToolsFill className='h-5 w-5 mr-1' />
                                <a href="/integrations" className="pt-1">Integrations</a>
                            </li>
                            <li className="mb-6 ml-3 flex items-center">
                                <RiSettings3Line className='h-5 w-5 mr-1' />
                                <a href="#" className="pt-1">Settings</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="absolute bottom-4 left-4 flex items-center mb-4 ml-3">
                        <img
                            src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNmaqLm5vJYuiKz3F1bPpEd6NULN5GgBBbeg&s'}
                            alt='User Pic'
                            className="w-10 h-10 object-cover rounded-full mr-2"
                        />
                        <div>
                            <p className="font-bold">{(user) ? user.name : 'username'}</p>
                            <p className="text-sm">View Profile</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
