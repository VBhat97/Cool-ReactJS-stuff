import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header'
import HomeBody from './HomeBody'
import AboutBody from './AboutBody'
import UploadBody from './UploadBody';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      showHideDemo1: false,
      showHideDemo2: false,
      showHideDemo3: false
    };
  }
  render(){
    const { showHideDemo1, showHideDemo2, showHideDemo3 } = this.state;
    return (
      <div>
        <Header />
        {showHideDemo1 && <HomeBody />}
        {showHideDemo2 && <AboutBody />}
        {showHideDemo3 && <UploadBody />}
        {/* TODO: Add Conditional Rendering based on the header data.*/}
        {/* TODO: Add Form content by reading the csv and other parameters whichever needed */}
        {/* TODO: Add Footer with Copyright Components */}
      </div>
    );
  }
}

export default App;
