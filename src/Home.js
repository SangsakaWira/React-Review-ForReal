import React from 'react';
import { Spinner, Container, Form, Button } from 'react-bootstrap'

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            latitude: "",
            longitude: "",
            username:"",
            email:"",
            password:"",
            checkout:""
        }
        this.onHandleChange = this.onHandleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onHandleChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
        console.log(this.state)
        
    }

    onSubmit(event){
        if(this.state.checkout === "on"){
            alert('Your username: ' + this.state.username);
            alert('Your email: ' + this.state.email);
            alert('Your password: ' + this.state.password);
        }else{
            alert('You need to checkout!');
        }
        event.preventDefault();
    }

    render() {

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position)
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                })
            },
            err => {
                console.log(err)
            }
        )
        return (
            <Container>
                <br></br>
                <h1 style={{ textAlign: "center" }}>Form Registration</h1>
                <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="formBasicName">
                        <Form.Label>Username</Form.Label>
                        <Form.Control name="username" onChange={this.onHandleChange} type="username" placeholder="Enter username" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" onChange={this.onHandleChange} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" onChange={this.onHandleChange} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check name="checkout" onChange={this.onHandleChange} type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>
                </Form>
            </Container>
        )
    }
}

export default Home;

