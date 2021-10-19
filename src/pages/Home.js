import React, { Component } from 'react'

import 'rsuite/dist/rsuite.min.css';
import { Sidenav, Container, Divider, FlexboxGrid, Input } from 'rsuite';

export default class Home extends Component {

    render () {
        return (

            <Container>

                <br /> <br /> <br /> 

                <div className="show-grid">
                    <FlexboxGrid justify="center">
                        <FlexboxGrid.Item colspan={16} align='left'>

                        <Panel>
                            <Form>
                                
                            <Input placeholder="Default Input" />

                            <Radio> Radio</Radio>
                            <Radio checked> Checked Radio</Radio>

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
