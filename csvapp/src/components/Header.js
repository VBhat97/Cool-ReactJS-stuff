import React, {Component} from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import HomeBody from './HomeBody.js';
import AboutBody from './AboutBody.js';
import UploadBody from './UploadBody.js';

class Header extends Component{

    constructor() {
        super();
        this.state = {
          showHomeBody: true,
          showAboutBody: false,
          showUploadBody: false
        };
        this.hideComponent = this.hideComponent.bind(this);
      }

      hideComponent(name) {
        switch (name) {
          case "showHomeBody":
            this.setState({ showHomeBody: true, showAboutBody: false, showUploadBody: false });
            break;
          case "showAboutBody":
            this.setState({ showAboutBody: true, showHomeBody: false, showUploadBody: false });
            break;
          case "showUploadBody":
            this.setState({ showUploadBody: true, showAboutBody: false, showHomeBody: false });
            break;
          default :
            console.log("Default")
        }
      }
    render(){
        const { showHomeBody, showAboutBody, showUploadBody } = this.state;
        return(
            <div>
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">CSVApp</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link onClick={() => this.hideComponent("showHomeBody")}>Home</Nav.Link>
              <Nav.Link onClick={() => this.hideComponent("showAboutBody")}>About</Nav.Link>
              <Nav.Link onClick={() => this.hideComponent("showUploadBody")}>Upload</Nav.Link>
            </Nav>
            </Navbar>
            {/* TODO: Add Proper function calls for calling proper body content */}
            {showHomeBody && <HomeBody />}
            {showAboutBody && <AboutBody />}
            {showUploadBody && <UploadBody />}
            </div>
        )
    }
}

export default Header;