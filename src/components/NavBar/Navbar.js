import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import "./Navbar.css"
export function Navbar () {
    const [burger, setBurger] = useState(false)
    const [color, setColor] = useState(false);
    const [activeTab, setActiveTab] = useState('');
    const navbarItems = ["nHome", "nAbout", "nProjects", "nSkills", "nContact"]

    return (
        <nav
            className="navbar is-link is-fixed-top"
            role="navigation"
            aria-label="main navigation">
            <div className='navbar-brand'>
                <a onMouseOver={(e)=>{
                }} className="navbar-item" href="/jadev">
                Jeremy Anderson
                </a>
                <button
                    className={`navbar-burger ${burger ? 'is-active' : ''}`}
                    aria-label="menu"
                    aria-expanded="false"
                    onClick={() => {
                        setBurger(!burger);
                    }}>
                    <span aria-hidden="true"/>
                    <span aria-hidden="true"/>
                    <span aria-hidden="true"/>
                </button>
            </div>

            <div className={`navbar-menu ${burger ? 'is-active' : ''}`}>
                <div className="navbar-end">
                    <ul id="nMenu" className="navigation" style={ burger ? {color: "black", display: "flex", margin: "0 10px"}: {display: "flex", margin: "0 10px"}}>
                        <li id="nHome" className='navbar-item'><Link style={ burger ? {color: "black"}:{color: "white"}}  to="/">Home</Link></li>
                        <li id="nABout" className="navbar-item"><Link style={ burger ? {color: "black"}:{color: "white"}} to="/about">About</Link></li>
                        <li id="nProjects" className="navbar-item"><Link style={ burger ? {color: "black"}:{color: "white"}} to="/projects">Projects</Link></li>
                        <li id="nSkills" className="navbar-item"><Link style={ burger ? {color: "black"}:{color: "white"}} to="/skills">Skills</Link></li>
                       <li  id="nAbout" className="navbar-item"><Link style={ burger ? {color: "black"}:{color: "white"}} to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

