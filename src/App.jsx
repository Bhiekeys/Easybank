/** @format */

import React from 'react';
import Navbar from './components/navbar';
import Page from './components/landing';
import Secondp from './components/secondP';
import Thirdp from './components/thirdP';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
       <Page />
      <Secondp />
      <Thirdp />
      <Footer /> 
    </div>
  );
}

export default App;
