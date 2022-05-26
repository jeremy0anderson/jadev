import './Home.css';
import {About, Skills, Projects} from '../index';
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
                    <a className="button" target="_blank" rel="noopener noreferrer" download="" href="https://google.com">
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
