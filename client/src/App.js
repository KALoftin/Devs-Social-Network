import React, { Component } from 'react';
import { BrowserRouter as Route, Router } from 'react-router-dom';

import Navbar from '../src/components/layout/Navbar';
import Footer from '../src/components/layout/Footer';
import Landing from '../src/components/layout/Landing';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
