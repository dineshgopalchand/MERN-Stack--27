import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import HeaderLogin from "./HeaderLogin";

const TopNavbar = (props) => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">SDLC Training</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#">Home</Nav.Link>

                        <NavDropdown title="Services" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#">
                                Classroom Training
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                Online Training
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">
                                Corporate training
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#">About us</Nav.Link>
                    </Nav>
                    <HeaderLogin {...props} />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopNavbar;