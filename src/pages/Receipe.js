import React, { Component } from 'react'
import { Container, Rate, FlexboxGrid} from 'rsuite';

import recipeData from './../json/recipe.json';
import picmojito from './../icons/mojito-1.jpg';

import * as components from './../components/Navbar'

import 'rsuite/dist/rsuite.min.css';

export default class Home extends Component {
    render () {
        return (
            <Container>
                <FlexboxGrid justify="space-around">
                    <FlexboxGrid.Item colspan={20} align='left'>
                        <div style={{ padding: '24px 0 48px' }}>
                            <components.MyBreadcrumb separator={'>'} title={recipeData.title} />
                            <components.Tags recipe_tags={recipeData.tags}/>

                            <div style={{ display: 'flex', flexFlow: 'column', gap: '8px' }}>
                                <h2>{recipeData.title}</h2>

                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Rate readOnly size="xs" defaultValue={2.5} allowHalf />
                                    <p>{recipeData.rating}, {recipeData.ratingNums} ratings</p>
                                </div>

                                <p>By {recipeData.author} | Updated {(new Date(recipeData.updated)).toUTCString()}</p>
                            </div>
                        </div>
                        <FlexboxGrid justify="space-between">
                            <FlexboxGrid.Item colspan={5} align='left'>
                                <h4>Ingredients</h4>
                                <components.Ingredients ingr={recipeData.ingredients}/>
                            </FlexboxGrid.Item>

                            <FlexboxGrid.Item colspan={8}>
                                <img src={picmojito} alt="mojito" style={{ width: '100%' }} />
                            </FlexboxGrid.Item>

                            <FlexboxGrid.Item colspan={5} align='left'>
                                <components.MySteps steps={recipeData.steps}/>
                            </FlexboxGrid.Item>

                        </FlexboxGrid>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </Container>
        )
    }
}
