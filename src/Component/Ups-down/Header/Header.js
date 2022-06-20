import { signOut } from 'firebase/auth';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    // console.log(user)

    const handleSignOut = () =>{
        signOut(auth);
    }

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
                    <Nav.Link as={Link} to='/equipments'>Equipments</Nav.Link>
                    <Nav.Link as={Link} to='/manage'>Manage</Nav.Link>
                    <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
                    
                </Nav></div>
                <div className="col-md-2">
                {user? <Nav.Link as={Link} to='/additem'>Add Item</Nav.Link>:''}
                </div>
                <div className="col-md-4">
                <Nav>
                    {/* <Nav.Link as={Link} to='/registration'>Registration</Nav.Link> */}
                    {
                        user?<Nav>
                        <NavDropdown title={user.displayName ? user.displayName : "Admin"} id="collasible-nav-dropdown">
                            <NavDropdown.Item as={Link} to='/adminuser'>Dashboard</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/myItem'>
                                My Items
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={handleSignOut}>SignOut</NavDropdown.Item>
                            
                            </NavDropdown>
                            </Nav>:
                        <Nav.Link as={Link} to='/login'>
                    Login
                    </Nav.Link>
                    }
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