import React, { Component } from 'react'
import { Navbar, Nav, Dropdown, Row, Col} from 'rsuite';

export default class Home extends Component {

    render () {
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
                    <Nav.Item href="/notfound">Not found</Nav.Item>
                </Nav>
            </Navbar>
        )
    }
}