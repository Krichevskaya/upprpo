import React, { Component } from 'react'

import {
    Sidenav, Container, Divider, FlexboxGrid, Input, Checkbox, Form,
    Radio, Panel, CheckboxGroup, TagPicker, RadioGroup, InputGroup, Nav, Button, Modal, Uploader
} from 'rsuite';

import './../css/index.css';
import 'rsuite/dist/rsuite.min.css';

import * as components from './../components/Navbar'

import allTags from './../json/tags.json';

const styles = {
    marginBottom: 50,
};

const CustomNav = ({ active, onSelect, ...props }) => {
    return (
        <Nav {...props} activeKey={active} onSelect={onSelect} style={styles}>
            <Nav.Item eventKey="liked">Saved recipes</Nav.Item>
            <Nav.Item eventKey="drafts">Drafts</Nav.Item>
            <Nav.Item eventKey="awaiting">Awaiting moderation</Nav.Item>
            <Nav.Item eventKey="rejected">Rejected recipes</Nav.Item>
            <Nav.Item eventKey="published">Published recipes</Nav.Item>
        </Nav>
    );
};

const Demo = () => {
    const [active, setActive] = React.useState('liked');
    return (
        <div>
            <CustomNav appearance="subtle" active={active} onSelect={setActive} justified />
        </div>
    );
};

const PrintTags = ({ tags }) => {
    const array = [];

    tags.forEach(item => array.push(
        <Checkbox value={item}>{item}</Checkbox>
    ));

    return <Form.Control name="checkbox" accepter={CheckboxGroup} inline>{array}</Form.Control>
}

const MyModal = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = value => {
        setOpen(true);
    };
    const handleClose = () => setOpen(false);

    return (
        <div className="modal-container">

            <Button size="lg" onClick={() => handleOpen('lg')}>
                Create new recipe
            </Button>

            <Modal backdrop="static" size="lg" open={open} onClose={handleClose}>
                <Modal.Header>
                    <Modal.Title>Create new recipe</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form>
                        <Form.Group controlId="title">
                            <Form.ControlLabel>Title:</Form.ControlLabel>
                            <Form.Control name="title" placeholder="Enter title" style={{ width: '100%' }} />
                        </Form.Group>

                        <Form.Group controlId="checkbox">
                            <Form.ControlLabel>Choose tags:</Form.ControlLabel>
                            <PrintTags tags={allTags.tags} />
                        </Form.Group>

                        {/* <Form.Group controlId="description">
                            <Form.ControlLabel>Description:</Form.ControlLabel>
                            <Form.Control as="textarea" name="description" placeholder="Enter title" style={{ width: '100%' }} />
                        </Form.Group> */}

                        <Form.Group controlId="uploader">
                            <Form.ControlLabel>Upload an image:</Form.ControlLabel>
                            <Form.Control name="uploader" accepter={Uploader} />
                        </Form.Group>

                        {/* <Form.Group controlId="tagPicker">
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
                        </Form.Group> */}

                    </Form>


                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} appearance="subtle">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} appearance="ghost">
                        Save in drafts
                    </Button>
                    <Button onClick={handleClose} appearance="primary">
                        Send for moderation
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};



export default class Home extends Component {

    render() {

        return (

            <Container>

                <div className="show-grid">
                    <FlexboxGrid justify="center">
                        <FlexboxGrid.Item colspan={16} align='left'>

                            <div style={{ padding: '24px 0 48px' }}>
                                <components.MyBreadcrumb separator={'>'} title='Account' />
                                <h2>Account</h2>
                            </div>

                            <Demo />

                            <MyModal />


                        </FlexboxGrid.Item>
                    </FlexboxGrid>
                </div>
            </Container>
        )
    }
}
