import React, { Component } from 'react'

import 'rsuite/dist/rsuite.min.css';
import {
    Sidenav, Container, Divider, FlexboxGrid, Input, Checkbox, Form,
    Radio, Panel, CheckboxGroup, TagPicker, RadioGroup
} from 'rsuite';

import allTags from './../json/tags.json';
import allIngredients from './../json/ingredients.json';

function transformData(data) {
    const array = [];

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

                <br /> <br /> <br />

                <div className="show-grid">
                    <FlexboxGrid justify="center">
                        <FlexboxGrid.Item colspan={16} align='left'>

                            <Panel>
                                <Form>

                                    <Input placeholder="Default Input" />

                                    <Form.Group controlId="radio">
                                        <Form.ControlLabel>Rating:</Form.ControlLabel>
                                        <Form.Control name="radio" accepter={RadioGroup}>
                                            <Radio value="3+">3 and higher</Radio>
                                            <Radio value="4+">4 and higher</Radio>
                                            <Radio value="5">5</Radio>
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId="checkbox">
                                        <Form.ControlLabel>Tags:</Form.ControlLabel>
                                        <PrintTags tags={allTags.tags} />
                                    </Form.Group>

                                    <Form.Group controlId="tagPicker">
                                        <Form.ControlLabel>Ingredients:</Form.ControlLabel>
                                        <Form.Control name="tagPicker" accepter={TagPicker} data={transformData(allIngredients.ingredients)} />
                                    </Form.Group>

                                </Form>
                            </Panel>

                        </FlexboxGrid.Item>
                    </FlexboxGrid>
                </div>

                <Divider />

                <div>
                    <a href="/receipe">Бомжатский просмотр рецепта</a>
                </div>

                <Divider />

                <div>
                    <p>haha</p>
                </div>

            </Container>
        )
    }
}
