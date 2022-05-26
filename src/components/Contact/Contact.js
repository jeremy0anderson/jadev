import './Contact.css';
import {about} from "../About/About";
export function Contact(){
    return (
      <div id="Contact">
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">{`Contact ${about.firstName}`} </h1>
              <div className="content">
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

