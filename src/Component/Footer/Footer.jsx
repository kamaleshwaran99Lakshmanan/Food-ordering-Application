import React from 'react'
import {Row,Col,Navbar,Nav} from 'react-bootstrap'
const Footer = () => {
  return (
    <>
    <div className="container-fluid position-relative bottom-0 start-0">   
        <Row className='justify-content-center'>
        <Col md={3} className="d-flex justify-content-center">
            <Navbar variant="light" expand="lg">
            <Nav className='d-flex flex-column'>
               <Nav.Link>home</Nav.Link>
               <Nav.Link>home</Nav.Link>
               <Nav.Link>home</Nav.Link>
               <Nav.Link>home</Nav.Link>
             </Nav>
             </Navbar>
            </Col>
            <Col md={3} className="d-flex justify-content-center">
            <Navbar variant="light" expand="lg">
            <Nav className='d-flex flex-column'>
               <Nav.Link>home</Nav.Link>
               <Nav.Link>home</Nav.Link>
               <Nav.Link>home</Nav.Link>
               <Nav.Link>home</Nav.Link>
             </Nav>
             </Navbar>
            </Col>
            <Col md={3} className="d-flex justify-content-center">
            <Navbar variant="light" expand="lg">
            <Nav className='d-flex flex-column'>
               <Nav.Link>home</Nav.Link>
               <Nav.Link>home</Nav.Link>
               <Nav.Link>home</Nav.Link>
               <Nav.Link>home</Nav.Link>
             </Nav>
             </Navbar>
            </Col>
        </Row>
    </div>
    </>
  )
}

export default Footer