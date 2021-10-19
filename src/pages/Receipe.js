import React, { Component } from 'react'
import { Container, Footer, Row, Col, Rate, Grid, FlexboxGrid} from 'rsuite';

import recipeData from './../json/recipe.json';
import picmojito from './../icons/mojito-1.jpg';

import * as components from './../components/Navbar'

import 'rsuite/dist/rsuite.min.css';

export default class Home extends Component {
    render () {
        return (
            <Container>

                <div className="show-grid">
                    <FlexboxGrid justify="center">
                        <FlexboxGrid.Item colspan={16} align='left'>
                            <div>
                                <components.MyBreadcrumb separator={'>'} title={recipeData.title} />
                            </div>

                            <div>
                                <components.Tags recipe_tags={recipeData.tags}/>
                            </div>
                            
                            <div>
                                <h2>{recipeData.title}</h2>
                                                       
                                <Grid fluid>
                                    <Row className="show-grid">
                                        <Col>
                                            <Rate readOnly size="xs" defaultValue={2.5} allowHalf />
                                        </Col>
                                        <Col>
                                            <p>{recipeData.rating}, {recipeData.ratingNums} ratings</p>
                                        </Col>
                                    </Row>
                                </Grid>

                                <p>By {recipeData.author} | Updated {(new Date(recipeData.updated)).toUTCString()}</p>
                            </div>

                        </FlexboxGrid.Item>
                    </FlexboxGrid>
                </div>

                <div className="show-grid">
                    <FlexboxGrid justify="center">
                        <FlexboxGrid.Item colspan={5} align='left'>
                            <h4>Ingredients</h4>
                            <components.Ingredients ingr={recipeData.ingredients}/>
                        </FlexboxGrid.Item>

                        <FlexboxGrid.Item colspan={6}>
                            <img src={picmojito} alt="mojito" />
                        </FlexboxGrid.Item>

                        <FlexboxGrid.Item colspan={5} align='left'>
                            <components.MySteps steps={recipeData.steps}/>
                        </FlexboxGrid.Item>

                    </FlexboxGrid>
                </div>

            </Container>
        )
    }
}