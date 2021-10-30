import React from 'react';
import { Container, Nav, Navbar, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'
import Banner from '../banner/Banner';
import logo from './../../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="pb-5">
        <Navbar bg="info" variant="light" fixed="top" collapseOnSelect expand="lg">
<Container>
<img src={logo} alt="" />
<Navbar.Toggle />
<Navbar.Collapse className="justify-content-end ">
<Nav.Link as={HashLink} className="text-dark" to="/home#home">Home</Nav.Link>
  <Nav.Link as={HashLink} className="text-dark" to="/home#services">Packages</Nav.Link>
  <Nav.Link as={HashLink} className="text-dark" to="/home#helpline">Helpline</Nav.Link>
  <Nav.Link as={HashLink} className="text-dark" to="/home#about">About Us</Nav.Link>
    <Nav.Link className="text-dark" as={Link} to="/signUp">SignUp</Nav.Link>
    <Nav.Link className="text-dark" as={Link} to="/cart"><i style={{fontSize:'20px' }} className="fas fa-shopping-cart"></i><Badge>0</Badge></Nav.Link>
    <Nav.Link className="text-dark" as={Link} to="/login">Login</Nav.Link>
 
</Navbar.Collapse>

</Container>
</Navbar>
    </div>
    );
};

export default Header;