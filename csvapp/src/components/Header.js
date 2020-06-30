import React, {Component} from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import HomeBody from './HomeBody.js';
import AboutBody from './AboutBody.js';
import UploadBody from './UploadBody.js';

class Header extends Component{

    constructor() {
        super();
        this.state = {
          name: "React",
          showHideDemo1: false,
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
        const { showHideDemo1, showHideDemo2, showHideDemo3 } = this.state;
        return(
            <div>
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">CSVApp</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link onClick={() => this.hideComponent("showHideDemo1")}>Home</Nav.Link>
              <Nav.Link onClick={() => this.hideComponent("showHideDemo2")}>About</Nav.Link>
              <Nav.Link onClick={() => this.hideComponent("showHideDemo3")}>Upload</Nav.Link>
            </Nav>
            </Navbar>
            {/* TODO: Add Proper function calls for calling proper body content */}
            {showHideDemo1 && <HomeBody />}
            {showHideDemo2 && <AboutBody />}
            {showHideDemo3 && <UploadBody />}
            </div>
        )
    }
}

export default Header;