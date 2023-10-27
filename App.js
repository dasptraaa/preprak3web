import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from 'src/components/Hero';
import Footer from 'src/components/Footer';


function App() {
  return (
      <div>
        <Navbar />
        <div>INI HLAMAN HOME</div>
      </div>
  
  );
}

export default App;
