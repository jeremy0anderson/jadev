import React from 'react';
import {About, Navbar, Header, Projects, Skills, Home, Contact, ContactForm, Footer} from './components'
import {Routes, Route} from 'react-router-dom';
function AboutComponent() {
    return (
        <div>
            <Header/>
            <About/>
        </div>
    )
}
function ProjectsComponent(){
    return (
        <div>
            <Header/>
            <Projects/>
        </div>
    )
}
function SkillsComponent(){
    return(
        <div>
            <Header/>
            <Skills/>
        </div>
    )
}
function ContactComponent(){
    return(
        <div>
            <Contact/>
            <ContactForm/>
        </div>)
}
function App() {
    return(
      <div className="App">
          <Navbar/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/jadev" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/skills" element={<Skills/>}/>
              <Route path="/projects" element={<Projects/>}/>
              <Route path="/contact" element={<ContactComponent/>}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
