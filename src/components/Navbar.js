import React from 'react'

import { Navbar, Nav, Dropdown, Row, Col } from 'rsuite';
import { Breadcrumb } from 'rsuite';
import { Container, Header, Content, Footer, Sidebar } from 'rsuite';
import { Tag, TagGroup } from 'rsuite';
import { FlexboxGrid } from 'rsuite';
import {
    List, Steps, Rate, Grid, Checkbox, Form,
    Radio, Panel, CheckboxGroup
} from 'rsuite';

import 'rsuite/dist/rsuite.min.css';

export const NavBar = () => {
    return (
        <Navbar>
            <Nav>
                <Nav.Item href="/home">COCKTAIL WEBSITE</Nav.Item>
                <Nav.Item href="/home">Home</Nav.Item>
            </Nav>
            {/* window.location.pathname выведет /home или /signup */}
            <Nav pullRight>
                <Nav.Item href="/login">Log in</Nav.Item>
                <Nav.Item href="/signup">Sign up</Nav.Item>
            </Nav>
        </Navbar>
    )
}

/*
Breadcrumb.
Home > {cocktail name}
TODO исправить ссылки
*/
export const MyBreadcrumb = ({ separator, title }) => {
    return (
        <Breadcrumb separator={separator}>
            <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>{title}</Breadcrumb.Item>
        </Breadcrumb>
    )
}

/*
tags from json
for DOM use:

<Tags />

*/
export const Tags = ({ recipe_tags, size }) => {
    const tags = [];

    recipe_tags.forEach(item => tags.push(
        <Tag size={size}>{item}</Tag>
    ))

    return (
        <TagGroup>{tags}</TagGroup>
    )
};


/*
ingredients from json
for DOM use:

<Ingredients />

*/
export const Ingredients = ({ ingr }) => {
    return (
        <List>
            {ingr.map((item, index) => (
                <List.Item key={index} index={index}>
                    {item.value}
                </List.Item>
            ))}
        </List>
    );
};

const styles = {
    display: 'inline-table',
    verticalAlign: 'top'
};


export const MySteps = ({ steps }) => {
    return (
        <Steps current={-1} vertical style={styles}>
            {steps.map((step, index) => (
                <Steps.Item title={'Step ' + (index + 1)} description={step} />
            ))}
        </Steps>
    );
}

function ingrToString(data) {
    var str = '';

    data.forEach((item, i) => (i == data.length - 1) ? str += item.label + ' ' : str += item.label + ', ');

    return str;
}


export const Card = ({ data }) => {
    return (
        <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 360 }}>
            <img src="https://via.placeholder.com/240x240" height="240" width="360" />
            <Panel header={data.title}>
                {/* <p>
                    <small>
                        A suite of React components, sensible UI design, and a friendly development experience.
                    </small>
                </p> */}

                
                <Tags recipe_tags={data.tags} size="sm" />
                
                <p style={{ padding: '12px 0px 0px' }}>Ingredients: {ingrToString(data.ingredients)}</p>

                <p style={{ padding: '4px 0px 0px' }}>Rating: {data.rating}, {data.ratingNums} ratings</p>

            </Panel>
        </Panel>
    )
}

export const CardGroup = ({ data }) => {

    const cards = [];

    data.forEach(item => cards.push(
        <Card data={item} />
    ))

    return (
        <div>{cards}</div>
    )
}

