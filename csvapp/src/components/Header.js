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
          showHomeBody: false,
          showAboutBody: false,
          showUploadBody: false
        };
        this.hideComponent = this.hideComponent.bind(this);
      }

      hideComponent(name) {
        console.log(name)
        switch (name) {
          case "showHomeBody":
            this.setState({ showHomeBody: !this.state.showHomeBody, showAboutBody: false, showUploadBody: false });
            break;
          case "showAboutBody":
            this.setState({ showAboutBody: !this.state.showAboutBody });
            break;
          case "showUploadBody":
            this.setState({ showUploadBody: !this.state.showUploadBody });
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