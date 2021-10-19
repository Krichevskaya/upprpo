import React, { Component } from 'react';
import { FlexboxGrid, Panel, Form, ButtonToolbar, Button} from 'rsuite';

import 'rsuite/dist/rsuite.min.css';
import * as components from './../components/Navbar'

export default class Login extends Component {
  render () {
    return(
      <FlexboxGrid justify="center" >
        <FlexboxGrid.Item colspan={12}>
          <Panel header={<h3>Login</h3>} bordered>
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
                <ButtonToolbar>
                  <Button appearance="primary">Log in</Button>
                  <Button appearance="link" href="/signup">Sign Up</Button>
                </ButtonToolbar>
              </Form.Group>
            </Form>
          </Panel>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    )
  }
}