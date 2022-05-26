import React from 'react';
import {About, Navbar, Projects, Skills, Home} from './components'
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
      <div className="App">
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/projects" element={<Projects/>}/>
      </Routes>
      </div>
  );
}

export default App;
