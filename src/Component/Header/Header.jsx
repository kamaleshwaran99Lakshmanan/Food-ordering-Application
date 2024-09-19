import React from 'react'
import {Navbar,Nav} from "react-bootstrap"
const Header = () => {
  return (
 <>
 <div className="container-xxl shadow rounded-3 p-2 px-3">
 <Navbar expand="lg" variant='light'>
    <Navbar.Brand><b>Swiggy</b></Navbar.Brand>
   <Navbar.Toggle aria-controls='navmenu'/>
   <Navbar.Collapse>
   <Nav id="navmenu"  className='ms-auto text-center '>
    <Nav.Link active>Home</Nav.Link>
    <Nav.Link >product</Nav.Link>
    <Nav.Link >contact</Nav.Link>
   </Nav>
   </Navbar.Collapse>
 </Navbar>
 </div>
 </>
  )
}

export default Header