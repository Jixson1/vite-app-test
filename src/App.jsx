import React from 'react';
import HelloWorld from './Components/HelloWorld';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <HelloWorld name="Jackson" />
        <Routes>
          <Route exact path="/"></Route>
          <Route exact path="/about"></Route>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
