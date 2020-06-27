import React, {Component} from 'react';
import { Nav, Navbar} from 'react-bootstrap';

class Header extends Component{
    render(){
        return(
            <div>
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">CSVApp</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">About</Nav.Link>
              <Nav.Link href="#pricing">Upload</Nav.Link>
            </Nav>
          </Navbar>
          </div>
        )
    }
}

export default Header;