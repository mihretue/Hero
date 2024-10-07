import React, { useState } from 'react';
import './App.css'
const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the toggle

  const toggleMenu = () => {
    setIsOpen((prev) => !prev); // Toggle the state
  };

  return (
    <header className="flex header justify-between items-center p-5 bg-black text-white fixed top-0 left-0 right-0 z-10">
    <div className="flex space-x-4">
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4">
            <a href="#" className="block">What we believe</a>
            <a href="#" className="block">Our features</a>
        </div>
    </div>

    {/* Mobile Links */}
    <div className={`md:hidden flex flex-col space-y-2 ${isOpen ? 'block' : 'hidden'}`}>
        <button onClick={toggleMenu} className="mb-2">
            {/* Close Icon */}
            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L17 15M1 15L17 1" stroke="white" strokeWidth="2" />
            </svg>
        </button>
        <a href="#" className="block">What we believe</a>
        <a href="#" className="block">Our features</a>
        <a href="#" className="block">Our story</a>
        <a href="#" className="block">The waitlist</a>
    </div>

    {/* Desktop Links - the rest on the right */}
    <div className="hidden md:flex space-x-4">
        <a href="#" className="block">Our story</a>
        <a href="#" className="block">The waitlist</a>
    </div>

    {/* Toggle Button for Mobile */}
    {!isOpen && (
        <button className="md:hidden" onClick={toggleMenu}>
            {/* Mobile Toggle Icon */}
            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0H18V2H0V0ZM0 7H12V9H0V7ZM0 14H18V16H0V14Z" fill="white" />
            </svg>
        </button>
    )}
</header>

  );
};

export default Header;
