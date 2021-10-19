import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
// import useAuth from '../../../hooks/useAuth';

const Header = () => {
    // const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="success" variant="success" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home" className="white-color">Your Favourite Dentists</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home" className="white-color">Home</Nav.Link>
                        <Nav.Link as={Link} to="/services" className="white-color">Services</Nav.Link>
                        <Nav.Link as={Link} to="/subscription" className="white-color">Subscription</Nav.Link>
                        <Nav.Link as={Link} to="/booking" className="white-color">Booking</Nav.Link>
                        <Nav.Link as={Link} to="/login" className="white-color">Login</Nav.Link>

                        {/* {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;