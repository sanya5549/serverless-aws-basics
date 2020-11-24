import React from 'react';

import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import './navbar.css';

class NavbarComponent extends React.Component{
    render(){
        return(
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/" style={{color:'green'}}>ATLIQ</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Link1</Nav.Link>
                    <Nav.Link href="/">Link2</Nav.Link>
                    <NavDropdown title="Features" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">Feature 1</NavDropdown.Item>
                        <NavDropdown.Item href="#">Feature 1</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav.Link className="navRight" href="/signup">Sign Up</Nav.Link>
                <Nav.Link className="navRight" href="/login">Login</Nav.Link>
            </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavbarComponent;