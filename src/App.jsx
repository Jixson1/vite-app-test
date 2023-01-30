import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Views/Home';
import About from './Views/About';

function App() {
  return (
    <div className="App">
      <Router>

        <Header />

        <div className="p-3">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
          </Routes>
        </div>
        
        <Footer />

      </Router>
    </div>
  );
}

export default App;
