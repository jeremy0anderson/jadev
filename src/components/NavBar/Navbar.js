import React, { useState } from 'react';
import {Link} from "react-router-dom";

export function Navbar () {
    const [burger, setBurger] = useState(false)
    const [color, setColor] = useState(false);
    return (
        <nav
            className="navbar is-link is-fixed-top"
            role="navigation"
            aria-label="main navigation"
        >
            <div className='navbar-brand'>
                <button
                    className={`navbar-burger ${burger ? 'is-active' : ''}`}
                    aria-label="menu"
                    aria-expanded="false"
                    onClick={() => {
                        setBurger(!burger);
                        setColor(!color);
                    }}>
                    <span aria-hidden="true"/>
                    <span aria-hidden="true"/>
                    <span aria-hidden="true"/>
                </button>
            </div>

            <div className={`navbar-menu ${burger ? 'is-active' : ''}`}>
                <div className="navbar-end">
                    <ul style={{display: "flex", margin: "0 10px"}}>
                        <li className="navbar-item" onClick={() => setBurger(!burger)}><Link className={`${burger ? 'black': 'white'}`} to="/">Home</Link></li>
                        <hr/>
                        <li className="navbar-item" onClick={() => setBurger(!burger)}><Link className={`${burger ? 'black': 'white'}`} to="/about">About</Link></li>
                        <hr/>
                        <li className="navbar-item" onClick={() => setBurger(!burger)}><Link className={`${burger ? 'black': 'white'}`} to="/projects">Projects</Link></li>
                        <hr/>
                        <li className="navbar-item" onClick={() => setBurger(!burger)}><Link className={`${burger ? 'black': 'white'}`} to="/skills">Skills</Link></li>
                        <hr/>
                       <li className="navbar-item" onClick={() => setBurger(!burger)}> <Link className={`${burger ? 'black': 'white'}`} to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

