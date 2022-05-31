import './Home.css';
import {About, Skills, Projects} from '../index';
import JeremyAnderson from '../../assets/images/Jeremy-Anderson.pdf';
import {jsFileDownloader} from 'js-client-file-downloader';
const bioComponents = [
    "Hardworking, passionate, and personable full stack web developer with strong communication, interpersonal, organizational, and time management skills.",
    "Recently decided to undergo a drastic change in career paths from social work to developer,",
    "Both driven and committed to becoming part of a team of like-minded individuals",
    "Pursuing a position in back end, front end, or full stack web development."
];
export function Header(){
    return (
        <section className="hero sectionOverride">
            <section className="home-header">
                <header className="card field is-grouped">
                    <div className="field is-grouped">
                    <h1>Jeremy Anderson</h1>
                    <h2>Hi, I'm a junior full-stack web developer in Salt Lake City, UT</h2>
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
