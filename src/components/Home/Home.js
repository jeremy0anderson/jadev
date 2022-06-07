import './Home.css';
import 'animate.css';
import {About, Skills, Projects} from '../index';
import JeremyAnderson from '../../assets/images/Jeremy_Anderson_Resume (1).pdf';
import {useState} from "react";
const bioComponents = [
    "Hardworking, passionate, and personable full stack web developer with strong communication, interpersonal, organizational, and time management skills.",
    "Recently decided to undergo a drastic change in career paths from social work to developer,",
    "Both driven and committed to becoming part of a team of like-minded individuals",
    "Pursuing a position in back end, front end, or full stack web development."
];
export function Header(){
    const [boi, setBio] = useState(<div/>);

    return (
        <section className="hero sectionOverride">
            <section className="home-header animate__animated animate__fadeInLeftBig">
                <header className="card field is-grouped">
                    <div className="field is-grouped section">
                        <div className="header-section" id="main-h1-container">
                            <h1 id="mainh1">Jeremy Anderson</h1>
                        </div>
                        <div className="header-section" id="main-h2-container">
                            <h2>Full-stack web developer, Salt Lake City, UT</h2>
                        </div>
                    </div>
                    <div className="bio">
                        {bioComponents.map((value, index) => {
                            return(
                                <div key={index}>
                                    <h2 key={`${index}-${index}`}>{value}</h2>
                                </div>
                            );
                        })}
                    </div>
                <div className="field is-grouped" id="links">
                    <a className="button" href="#Projects" style={{ marginRight: '0.5rem' }}>
                        Projects
                    </a>
                    <a className="button" target="_self" rel="noopener noreferrer" id="resume" href={JeremyAnderson}>
                        Resume
                    </a>
                </div>
                </header>
            </section>
        </section>
    )
}
export function Home() {
    return (
      <div id="Home">
          <Header/>
          <About/>
          <Projects/>
          <Skills/>
      </div>
    );
}

export default Home;
