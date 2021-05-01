import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar { 
        margin: auto; 
        border-radius: 5rem; 
        width: 30rem; 
        top: -3rem; 
        padding-top: 3.15rem; 
        background-color: rgba(0, 0, 0, 0.4); 
    }

    a, .navbar-nav, .navbar-light .nav-link {
        font-family: 'Raleway', sans-serif;
        font-weight: 100;
        font-size: 30px;
        color: #9FFFCB;

        &:hover { color: white; }
        &.active { color: white; }
    }

    .navbar-brand {
        position: absolute;
        margin-left: 1em;
        padding-top: 0.15em;
        font-family: 'Raleway', sans-serif;
        font-weight: 400;
        font-size: 30px;
        color: #9FFFCB;
        
        &.active { color: #9FFFCB; }
        &:hover { color: white; }
    }
`;

export const NavigationBar = () => (
    <Styles>
        <Nav>
        <Navbar.Brand as={NavLink} to="/">Austin Hu</Navbar.Brand>
        </Nav>
        <Navbar fixed="top" expand="lg">
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto"> 
                    <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                    <Nav.Link as={NavLink} to="/experience">Experience</Nav.Link>
                    <Nav.Link as={NavLink} to="/projects">Projects</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)