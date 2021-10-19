import React, {Component } from 'react';
import { FlexboxGrid, Panel, Form, ButtonToolbar, Button} from 'rsuite';

import 'rsuite/dist/rsuite.min.css';
import * as components from './../components/Navbar'

export default class SignUp extends Component {
    render () {
        return(
            <FlexboxGrid justify="center" >
                <FlexboxGrid.Item colspan={12}>
                    <Panel header={<h3>Sign Up</h3>} bordered>
                        <Form fluid>
                            <Form.Group>
                                <Form.ControlLabel>Username or email address</Form.ControlLabel>
                                <Form.Control name="name" />
                            </Form.Group>
                            <Form.Group>
                                <Form.ControlLabel>Password</Form.ControlLabel>
                                <Form.Control name="password" type="password" autoComplete="off" />
                            </Form.Group>
                            <Form.Group>
                                <Form.ControlLabel>Repeat password</Form.ControlLabel>
                                <Form.Control name="repeat_password" type="password" autoComplete="off" />
                            </Form.Group>
                            <Form.Group>
                                <ButtonToolbar>
                                    <Button appearance="primary">Sign up</Button>
                                    <Button appearance="link" href="/login">Log in</Button>
                                </ButtonToolbar>
                            </Form.Group>
                        </Form>
                    </Panel>
                </FlexboxGrid.Item>
            </FlexboxGrid>
        )
    }
}