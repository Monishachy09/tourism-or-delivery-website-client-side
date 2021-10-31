import React from 'react';
import { Container, Nav, Navbar, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'
import useAuth from '../../hooks/useAuth';
import logo from './../../../images/logo.png'
import './Header.css'

const Header = () => {
    const {allContext, selectedCourse} = useAuth();
    const { user, logOut } = allContext;
    return (
        <div className="pb-5">
        <Navbar bg="info" variant="light" fixed="top" collapseOnSelect expand="lg">
<Container>
<img src={logo} alt="" />
<Navbar.Toggle />
<Navbar.Collapse className="justify-content-end ">
<Nav.Link as={HashLink} className="text-dark" to="/home#home">Home</Nav.Link>
  <Nav.Link as={HashLink} className="text-dark" to="/courses#courses">Courses</Nav.Link>
  <Nav.Link as={HashLink} className="text-dark" to="/home#helpline">Helpline</Nav.Link>
  <Nav.Link as={HashLink} className="text-dark" to="/aboutus">About Us</Nav.Link>
  <Nav.Link as={HashLink} className="text-dark" to="/contactSection">Contact Us</Nav.Link>
  <Nav.Link className="text-dark" as={Link} to="/cart"><i style={{fontSize:'20px' }} className="fas fa-shopping-cart"></i><Badge>{selectedCourse.length}</Badge></Nav.Link>
  {user?.email ?
      <Button onClick={logOut} variant="primary">Logout</Button> :
        <Nav.Link className="text-dark" as={Link} to="/login">Login</Nav.Link>}
      <Navbar.Text className=" ps-3">
        Signed in as: <a href="#login">{user?.displayName}</a>
      </Navbar.Text>
 
</Navbar.Collapse>

</Container>
</Navbar>
    </div>
    );
};

export default Header;