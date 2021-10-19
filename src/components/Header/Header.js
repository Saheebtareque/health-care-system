import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Header.css';
import useAuth from '../../hooks/useAuth'

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <>
            <Navbar bg="success" variant="success" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home" className="white-color">Your Favourite Dentists</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home" className="white-color">Home</Nav.Link>

                        <Nav.Link as={HashLink} to="/home#services"className="white-color">Services</Nav.Link>
                        <Nav.Link as={Link} to="/subscription" className="white-color">Subscription</Nav.Link>
                        <Nav.Link as={Link} to="/booking" className="white-color">Booking</Nav.Link>
                        <span className="white-color">{user.displayName} </span>



                        {user?.email ? <button type="button" class="btn btn-warning" onClick={logout}>Log out</button> : <Nav.Link as={Link} to="/login" className="white-color">Login</Nav.Link>}

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;