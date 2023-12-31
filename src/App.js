import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Welcome from './components/Welcome'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={ <Welcome/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;