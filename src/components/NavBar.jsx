import React, { useState } from 'react';

const NavBar = ({homeRef}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavBar = () => {
        setIsOpen(!isOpen);
    };
    
    return(
        <nav className="fixed w-screen pb-8">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-16 items-center">

                <div className="flex-shrink-0 flex items-center">
                    <span className="text-4xl mt-8 text-header font-bold">dp.</span>
                </div>

                <div className="hidden md:block">
                    <div className="ml-10 mt-8 flex items-baseline space-x-8">
                    <button className="text-subtitles hover:border-b-2 hover:border-header text-md font-medium" 
                        onClick={() => {homeRef.current?.scrollIntoView()}}
                    >Home</button>
                    {/* <a href="#home" className="text-subtitles hover:border-b-2 hover:border-header text-md font-medium">Home</a> */}
                    <a href="#work" className="text-subtitles hover:border-b-2 hover:border-header text-md font-medium">Work</a>
                    <a href="#about" className="text-subtitles hover:border-b-2 hover:border-header text-md font-medium">About</a>
                    <a href="#contact" className="text-subtitles hover:border-b-2 hover:border-header text-md font-medium">Contact</a>
                    </div>
                </div>

                <div className="-mr-2 mt-8 flex md:hidden">
                    <button onClick={toggleNavBar} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out">
                    <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                    <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6 text-header`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    </button>
                </div>
                </div>
            </div>

            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className="bg-button flex flex-col items-center w-screen mt-6 py-8">
                    <a href="#home" className="block text-subtitles hover:text-header px-3 py-2 rounded-md text-base font-medium">Home</a>
                    <a href="#work" className="block text-subtitles hover:text-header px-3 py-2 rounded-md text-base font-medium">Work</a>
                    <a href="#about" className="block text-subtitles hover:text-header px-3 py-2 rounded-md text-base font-medium">About</a>
                    <a href="#contact" className="block text-subtitles hover:text-header px-3 py-2 rounded-md text-base font-medium">Contact</a>
                </div>
            </div>

        </nav>
    );
};

export default NavBar;