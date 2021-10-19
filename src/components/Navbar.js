import React from 'react'
import { Navbar, Nav } from 'rsuite';

import 'rsuite/dist/rsuite.min.css';

export const NavBar = () => {
    return (
        <Navbar>
            <Navbar.Brand>
                COCKTAIL WEBSITE
            </Navbar.Brand>
            <Nav>
                <Nav.Item>Home</Nav.Item>
            </Nav>
            <Nav pullRight>
                <Nav.Item href="/login">Log in</Nav.Item>
            </Nav>
        </Navbar>
    )
}