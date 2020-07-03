import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  render(){
    return (
      <div>
        <Header />
        {/* TODO: Add Form content by reading the csv and other parameters whichever needed */}
        {/* TODO: Add Footer with Copyright Components */}
        <Footer />
      </div>
    );
  }
}

export default App;
