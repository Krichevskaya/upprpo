import React, { Component } from 'react'

import 'rsuite/dist/rsuite.min.css';
import {
    Sidenav, Container, Divider, FlexboxGrid, Input, Checkbox, Form,
    Radio, Panel, CheckboxGroup, TagPicker, RadioGroup, InputGroup
} from 'rsuite';

import allTags from './../json/tags.json';
import allIngredients from './../json/ingredients.json';

import recipes from './../json/recipes.json';

import './../css/index.css';

import * as components from './../components/Navbar'

function transformData(data) {
    const array = [];

    data.sort();

    data.forEach(item => array.push({
        "label": item,
        "value": item,
        "role": "Ingredient"
    }));

    return array;
}

const PrintTags = ({ tags }) => {
    const array = [];

    tags.forEach(item => array.push(
        <Checkbox value={item}>{item}</Checkbox>
    ));

    return <Form.Control name="checkbox" accepter={CheckboxGroup} inline>{array}</Form.Control>
}

export default class Home extends Component {

    render() {
        return (

            <Container>

                <div className="show-grid">
                    <FlexboxGrid justify="center">
                        <FlexboxGrid.Item colspan={16} align='left'>

                            <div style={{ padding: '48px 0 48px' }}>

                                <Panel header="Search" collapsible bordered >
                                    <Form>
                                        <Form.Group controlId="search">
                                            <Form.ControlLabel>Search:</Form.ControlLabel>
                                            <Form.Control name="search" placeholder="Search by name" style={{ width: '100%' }} />
                                        </Form.Group>

                                        <Form.Group controlId="tagPicker">
                                            <Form.ControlLabel>Ingredients:</Form.ControlLabel>
                                            <Form.Control name="tagPicker" placeholder="Search by ingredients" style={{ width: '100%' }} accepter={TagPicker}
                                                data={transformData(allIngredients.ingredients)} />
                                        </Form.Group>

                                        <Form.Group controlId="radio">
                                            <Form.ControlLabel>Rating:</Form.ControlLabel>
                                            <Form.Control name="radio" accepter={RadioGroup} inline>
                                                <Radio value="3+">3 and higher</Radio>
                                                <Radio value="4+">4 and higher</Radio>
                                                <Radio value="5">5</Radio>
                                            </Form.Control>
                                        </Form.Group>

                                        <Form.Group controlId="checkbox">
                                            <Form.ControlLabel>Tags:</Form.ControlLabel>
                                            <PrintTags tags={allTags.tags} />
                                        </Form.Group>

                                    </Form>
                                </Panel>
                            </div>

                            <a href='/recipe'>Mojito</a>

                            {/* <components.Card data={recipes.recipes[0]}/> */}

                            {/* <components.CardGroup data={recipes.recipes}/> */}


                        </FlexboxGrid.Item>
                    </FlexboxGrid>
                </div>
            </Container>
        )
    }
}
