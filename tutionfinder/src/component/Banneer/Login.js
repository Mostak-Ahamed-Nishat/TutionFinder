import React, {Component} from 'react';
import {Form, FormGroup, Modal, ModalBody, ModalFooter} from "react-bootstrap";
import ModalHeader from "react-bootstrap/ModalHeader";
import Button from "react-bootstrap/esm/Button";

class Login extends Component {

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
                <Button variant="info" onClick={this.toggleModal.bind(this)}>Login</Button>

           <Modal show={this.state.modalIsOpen} >
               <ModalHeader toggle={this.toggleModal.bind(this)}>
                   Login
               </ModalHeader>
               <ModalBody >
           <Form>
               <FormGroup>
                   <Form.Label>Email address</Form.Label>
                   <Form.Control type="email" placeholder="Enter email" />
                   <Form.Label>Email address</Form.Label>
                   <Form.Control type="password" placeholder="Enter password" />
               </FormGroup>
               <Button variant="success" type="submit">Login</Button>
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

export default Login;


