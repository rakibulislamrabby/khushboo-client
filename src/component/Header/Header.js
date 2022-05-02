import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="white" sticky="top">
                <Container>
                    <Navbar.Brand className='fw-bold text-danger' as={Link} to="/">KHUSHBOO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto ">

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="blog">Blogs</Nav.Link>

                            <Nav.Link as={Link} to="login">
                                Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;