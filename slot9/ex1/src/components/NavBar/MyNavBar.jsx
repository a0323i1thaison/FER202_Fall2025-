// src/components/NavBar/MyNavBar.jsx
import React from 'react';
import { Navbar, Container, Nav, Form, Button, InputGroup, Dropdown } from 'react-bootstrap';
// Sử dụng Bootstrap Icons với class name: bi bi-ten-icon-name

const MyNavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand href="/">MovieApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
          {/* Thẻ Link: Home, About, Contact */}
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>

          {/* Form tìm kiếm và Icons */}
          <div className="d-flex align-items-center">
            {/* Form: Quick search và button Search */}
            <Form className="d-flex me-3">
              <InputGroup>
                <Form.Control
                  type="search"
                  placeholder="Quick search..."
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-info">Search</Button>
              </InputGroup>
            </Form>

            <Nav>
              {/* Accounts: Dropdown list */}
              <Dropdown as={Nav.Item} align="end">
                <Dropdown.Toggle as={Nav.Link} variant="dark" className="text-white">
                  <i className="bi bi-person-circle me-1"></i> Accounts
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#manage">Manage Your Profiles</Dropdown.Item>
                  <Dropdown.Item href="/account">Build your Account</Dropdown.Item>
                  <Dropdown.Item href="#change-password">Change Password</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              {/* Login Icon */}
              <Nav.Link href="#login" className="text-white">
                <i className="bi bi-box-arrow-in-right"></i> Login
              </Nav.Link>

              {/* Favourites Icon */}
              <Nav.Link href="#favourites" className="text-white">
                <i className="bi bi-heart"></i> Favourites
              </Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavBar;