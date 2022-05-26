import './Home.css';
import {About, Skills, Projects} from '../index';

export function Home() {
    return (
      <div id="Home">
          <section className="hero is-large is-fullheight">
              <section className="home-header">
                  <header className="card">
                      <h1>Jeremy Anderson</h1>
                      <h2>Hi, I'm a junior full-stack web developer in Salt Lake City, UT</h2>
                      <div className="field is-grouped">
                          <a className="button" href="#Projects" style={{ marginRight: '0.5rem' }}>
                              Projects
                          </a>
                          <a className="button" target="_blank" rel="noopener noreferrer">
                              Resume
                          </a>
                      </div>
                  </header>
              </section>
              <About/>
              <Projects/>
              <Skills/>
          </section>
      </div>
    );
}

export default Home;
