import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="nav-area">
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="light">
            <Container>
                <Navbar.Brand as={Link} to='/'><img className='logo-img' src='https://i.ibb.co/4gnXMYf/Pngtree-fitness-equipment-treadmill-7526204.png' alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <div className="col-md-6"><Nav>
                    <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                    <Nav.Link as={Link} to='/product'>Manage</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav></div>
                <div className="col-md-2">
                    <Nav>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </div>
                <div className="col-md-4">
                <Nav>
                    <Nav.Link as={Link} to='/registration'>Registration</Nav.Link>
                    <Nav.Link as={Link} to='/login'>
                    Login
                    </Nav.Link>
                </Nav>
                </div>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            </div>
            
        </div>
    );
};

export default Header;