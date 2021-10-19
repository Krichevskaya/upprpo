import React from 'react';
import { Container, Content, FlexboxGrid, Header,
        Panel, Form, ButtonToolbar, Button} from 'rsuite';

import 'rsuite/dist/rsuite.min.css';
import * as components from './../components/Navbar'


export default function Login() {
  return(
    
    <div class="center"> 
    
        <div>
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
                    <Button appearance="primary">Sign in</Button>
                    <Button appearance="link">Forgot password?</Button>
                  </ButtonToolbar>
                </Form.Group>
              </Form>
            </Panel>
          </FlexboxGrid.Item>
        </FlexboxGrid>
        </div>
  </div>
  
  )
}