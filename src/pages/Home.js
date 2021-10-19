import React, { Component } from 'react'

import * as components from './../components/Navbar'

import 'rsuite/dist/rsuite.min.css';

export default class Home extends Component {

    render () {
        return (
            <div>
                <components.NavBar />
                <a href="/receipe">Бомжатский просмотр рецепта</a>
            </div>
        )
    }
}