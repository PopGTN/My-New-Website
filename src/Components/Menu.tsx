import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, {useState} from "react";
import '../styles/custom.scss';

function Menu() {
    const image = require('../icon.png')
    const [show, setShow] = useState(false);
    const hideDropdown = (e: any) => {
        setShow(false);
    }
    const showDropdown = (e: any) => {
        setShow(!show);
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="p-3" sticky="top">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={image}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{''}
                    Joshua Mckenna
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <NavDropdown title="My Other Websites" id="basic-nav-dropdown"
                                     show={show}
                                     onMouseEnter={showDropdown}
                                     onMouseLeave={hideDropdown}
                                     renderMenuOnMount={true}

                        >
                            <NavDropdown.Item href="https://about.joshuamc.ca"
                                              target="_blank">Socials</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.linkedin.com/in/joshua-mckenna-a123a2258/"
                                              target="_blank">Linkedin</NavDropdown.Item>
                            <NavDropdown.Item href="https://github.com/PopGTN" target="_blank">My
                                Github</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item>
                                My Website
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;



