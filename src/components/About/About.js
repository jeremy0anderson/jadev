import React from "react";
import './About.css';
import pfp from '../../assets/images/pfp.jpg';
export const about = {
    firstName: 'Jeremy',
    lastName: 'Anderson',
    shortDesc: `Hi! I'm a junior full-stack web developer from Salt Lake City, UT.`,
    longDesc: `Here is a description and short bio of myself`,
    email: 'jeremy@jadev.one',
    github: 'https://github.com/jeremy0anderson or https://github.com/jeremy0anderson-dev for larger projects',
    linkedIn: 'https://www.linkedin.com/in/jeremyanderson-dev/',
};


export function About(){
    return (
        <div id="About">
            <section className="hero">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">{`About ${about.firstName}`}<hr className="divider"/></h1>

                        <div className="content columns">
                            <div className="column">
                                <img src={pfp} alt="Profile" className="aboutImage shadow"
                                />
                            </div>
                            <div className="column longDescription">
                                <p key={about.longDesc.length}>{about.longDesc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}