import React, { Component } from 'react'
import { Navbar, Nav, Dropdown, Row, Col} from 'rsuite';

import * as components from './../components/Navbar'

import 'rsuite/dist/rsuite.min.css';

export default class Home extends Component {

    render () {
        return (
            <div>
                <components.NavBar />
            </div>
        )
    }
}