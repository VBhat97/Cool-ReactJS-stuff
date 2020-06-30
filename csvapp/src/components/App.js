import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      showHideDemo1: true,
      showHideDemo2: false,
      showHideDemo3: false
    };
    this.hideComponent = this.hideComponent.bind(this);
  }


  hideComponent(name) {
    console.log(name)
    switch (name) {
      case "showHideDemo1":
        this.setState({ showHideDemo1: !this.state.showHideDemo1 });
        break;
      case "showHideDemo2":
        this.setState({ showHideDemo2: !this.state.showHideDemo2 });
        break;
      case "showHideDemo3":
        this.setState({ showHideDemo3: !this.state.showHideDemo3 });
        break;
      default :
        console.log("Default")
    }
  }
  render(){
    return (
      <div>
        <Header />
        {/* TODO: Add Conditional Rendering based on the header data.*/}
        {/* TODO: Add Form content by reading the csv and other parameters whichever needed */}
        {/* TODO: Add Footer with Copyright Components */}
      </div>
    );
  }
}

export default App;
