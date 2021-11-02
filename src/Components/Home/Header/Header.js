import React from 'react';
import { Container, Nav, Navbar, Button, Badge, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'
import useAuth from '../../hooks/useAuth';
import logo from './../../../images/logo.png'
import './Header.css'

const Header = () => {
    const {allContext, selectedCourse} = useAuth();
    // const [loginUser, setLoginUser] = allContext;
    const { user, logOut } = allContext;
    return (
        <div className="pb-5">
        <Navbar bg="info" variant="light" fixed="top" collapseOnSelect expand="lg">
{/* <Container> */}
<img className="ps-3" src={logo} alt="" />
<Navbar.Toggle />
<Navbar.Collapse className="justify-content-end pe-3 ">
<Nav.Link as={HashLink} className="text-dark" to="/home#home">Home</Nav.Link>
  <Nav.Link as={HashLink} className="text-dark" to="/courses#courses">Courses</Nav.Link>
  <Nav.Link as={HashLink} className="text-dark" to="/home#helpline">Helpline</Nav.Link>
  <Nav.Link as={HashLink} className="text-dark" to="/aboutUs">About Us</Nav.Link>
  <Nav.Link as={HashLink} className="text-dark" to="/Admin">Admin</Nav.Link> 
  <Nav.Link as={HashLink} className="text-dark" to="/contactSection">Contact Us</Nav.Link>

  <Nav.Link className="text-dark" as={Link} to="/cart"><i style={{fontSize:'20px' }} className="fas fa-shopping-cart"></i><Badge>{selectedCourse.length}</Badge></Nav.Link>
  { user?.email ?
  <NavDropdown title={<Link style={{ textDecoration: 'none', color:'black' }} to="/login" >{user?.displayName}</Link>} id="basic-nav-dropdown">
  <NavDropdown.Item href="#action/3.1">Add Section</NavDropdown.Item>
  <NavDropdown.Item href="#action/3.2">Edit Package</NavDropdown.Item>
  <NavDropdown.Item href="/manageProduct">ManageProduct</NavDropdown.Item>
  <NavDropdown.Divider />  
  <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
</NavDropdown>
       :
        <Nav.Link className="text-dark" as={Link} to="/login">Login</Nav.Link>} 
</Navbar.Collapse>

{/* </Container> */}
</Navbar>
    </div>
    );
};

export default Header;