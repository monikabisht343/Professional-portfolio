import React, { useState } from "react";
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import "../App.css";
import logo from '../assets/logo.png';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => setToggle(!toggle);

    return (
        <header className="flex justify-between px-5 py-2 bg-primary text-white fixed w-full z-10">
            <a href="/" className="logo text-2xl font-bold text-accent">
                <img src={logo} alt="Your logo description" className="logo-img" style={{ width: '100px', height: '100px' }} />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:block">
                <ul className="flex">
                    <li> 
                        <a href="/#about">About</a>
                    </li>
                    <li>
                        <a href="/#projects">Projects</a>
                    </li>
                    <li>
                        <a href="/#blog">Blog</a>
                    </li>
                    <li>
                        <a href="/#contact">Contact</a>
                    </li>
                    <li>
                        <Link to="/resume-standalone" target="_blank" rel="noopener noreferrer">Resume</Link>
                    </li>
                </ul>
            </nav>

            {/* Mobile Nav */}
            <nav className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}>
                <ul className="flex flex-col">
                    <li>
                        <a href="/#about">About</a>
                    </li>
                    <li>
                        <a href="/#projects">Projects</a>
                    </li>
                    <li>
                        <a href="/#blog">Blog</a>
                    </li>
                    <li>
                        <a href="/#contact">Contact</a>
                    </li>
                    <li>
                        <a href="/resume-standalone" target="_blank" rel="noopener noreferrer">Resume</a>
                    </li>
                </ul>
            </nav>

            {/* Toggle button */}
            <button onClick={handleToggle} className="block md:hidden">
                <AiOutlineMenu size={30} />
                <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
            </button>
        </header>
    );
};

export default Header;
