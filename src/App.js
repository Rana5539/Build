import React from 'react';

import Navbar from './Components/Navbar/Navbar';
import Responsive from './Components/Navbar/Responsive';
import Jumbotron from './Components/Jumbotron/Jumbotron';
import Projects from './Components/Projects/Projects';
import Sells from './Components/We deal in/Sells'
function App() {
  return (
    <>
    <Responsive/>
    <Navbar/>
    <Jumbotron/>
    <Projects/>
    <Sells/>
    </>
  );
}
export default App;
