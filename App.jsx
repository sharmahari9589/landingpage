import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Services from './pages/sevices';
import About from './pages/about';
import Pricing from './pages/pricing';
import Newsletter from './pages/nesLetter';
import Header from './components/header';
import StickyHeader from './components/stickyHeader';
import MainComponent from './components/mainComponent';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<MainComponent/>} />
      </Routes>
    </Router>
  );
};

export default App;
