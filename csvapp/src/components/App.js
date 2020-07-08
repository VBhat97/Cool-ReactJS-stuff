import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  render(){
    return (
      <div>
        <div id="Mainbody">
        <Header />
        {/* TODO: Add Form content by reading the csv and other parameters whichever needed */}
        <div id="main_footer">
        <Footer />
        </div>
        </div>
      </div>
    );
  }
}

export default App;
