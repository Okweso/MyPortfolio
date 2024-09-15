import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <div>
    <Navbar />
    <Home />
    <About />
    <Projects />
    <Contacts />
    <Footer />
    {/* Other sections (About, Projects, Contact) will go here */}
  </div>
  );
}

export default App;
