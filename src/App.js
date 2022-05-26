import React from 'react';
import {About, Navbar, Header, Projects, Skills, Home, Contact, ContactForm} from './components'
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
    return (
        <div>
            <Header/>
            <Contact/>
            <ContactForm/>
        </div>
    )
}
function App() {


    return(
      <div className="App">
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<AboutComponent/>}/>
          <Route path="/skills" element={<SkillsComponent/>}/>
          <Route path="/projects" element={<ProjectsComponent/>}/>
          <Route path="/contact" element={<ContactComponent/>}/>
      </Routes>
      </div>
  );
}

export default App;
