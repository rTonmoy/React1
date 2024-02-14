import React from 'react'
import {Navbar,Container,Nav,NavDropdown} from "react-bootstrap"
import { FaCloudDownloadAlt } from "react-icons/fa";
import logo from "../../assets/logo.png"
import "./menubar.css"

const Menubar = () => {
  return (
    <Navbar expand="lg" className='menu_bg'>
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Service</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="btn">
       <a href="#"> <FaCloudDownloadAlt className='icon' />  Download</a>
        </div>
      </Container>
    </Navbar>
  )
}

export default Menubar