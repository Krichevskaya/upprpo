import React from 'react';
import { Button, ButtonToolbar, FlexboxGrid, Form, Panel } from 'rsuite';

import 'rsuite/dist/rsuite.min.css';


export default function Login() {
  return (
    <FlexboxGrid justify="center" align="middle" style={{ height: '100%' }}>
      <FlexboxGrid.Item colspan={12}>
        <Panel header={<h3>Login</h3>} bordered>
          <Form fluid>
            <Form.Group>
              <Form.ControlLabel>Username or email address</Form.ControlLabel>
              <Form.Control name="name"/>
            </Form.Group>
            <Form.Group>
              <Form.ControlLabel>Password</Form.ControlLabel>
              <Form.Control name="password" type="password" autoComplete="off"/>
            </Form.Group>
            <Form.Group>
              <ButtonToolbar>
                <Button appearance="primary">Sign in</Button>
                <Button appearance="link" href="/signup">Sign up</Button>
              </ButtonToolbar>
            </Form.Group>
          </Form>
        </Panel>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  )
}
