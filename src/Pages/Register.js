import React from 'react';
import Navigation from '../Component/Navigation';
import { Container, Form, Button } from 'react-bootstrap';

class Register extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: "",
            email:"",
            password:"",
            confirm_password:"",
            checkbox:""
        }
        this.onClickHandler = this.onClickHandler.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    onClickHandler(event){
        // console.log(this.state)
    }

    onChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <Navigation status="Register"></Navigation>
                <Container style={{ marginTop: "15px" }}>
                    <h1 style={{ textAlign: "center" }}>Register Page</h1>
                    <Form onClick={this.onClickHandler}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control onChange={this.onChange} name="username" type="username" placeholder="Enter Username" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onChange={this.onChange} name="email" type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={this.onChange} name="password" type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control onChange={this.onChange} name="confirm_password" type="password" placeholder="Confirm Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check name="checkbox" onChange={this.onChange} type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default Register;

