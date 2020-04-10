import React, {Component} from 'react';
import {Form, FormGroup, Modal, ModalBody, ModalFooter} from "react-bootstrap";
import ModalHeader from "react-bootstrap/ModalHeader";
import Button from "react-bootstrap/esm/Button";

class Registration extends Component {

    constructor() {
        super();
        this.state={
            modalIsOpen:false
        }
    }
    toggleModal()
    {
        this.setState({
            modalIsOpen:!this.state.modalIsOpen
        });
    }
    render() {
        return (
            <div>
                <Button variant="success" onClick={this.toggleModal.bind(this)}>Registration</Button>

                <Modal show={this.state.modalIsOpen} >
                    <ModalHeader toggle={this.toggleModal.bind(this)}>
                        Registration
                    </ModalHeader>
                    <ModalBody >
                        <Form>
                            <FormGroup>
                                <Form.Label>Enter Name</Form.Label>
                                <Form.Control type="text" placeholder="Full Name" />
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" placeholder="Mobile Number" />
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" placeholder="Your Address" />
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter password" />
                            </FormGroup>
                            <Button variant="primary" type="submit">sing up</Button>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="danger" onClick={this.toggleModal.bind(this)}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default Registration;


