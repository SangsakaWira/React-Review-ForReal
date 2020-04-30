import React from 'react';
import { Button, Form, Container } from 'react-bootstrap'
import axios from 'axios';
import Navigation from '../Component/Navigation';

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
        this.onClickHandler = this.onClickHandler.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    async componentDidMount() {
        let data = await axios.get("http://covid-dashboard-its.id:4500/pasienCovid/findAllPasien").then(response => {
            return response
        })
        console.log(data.data)
    }

    onClickHandler() {
        if (this.state.counter === 0) {
            this.setState({
                counter: 1
            })
        } else {
            this.setState({
                counter: 0
            })
        }
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
                <Navigation status="Login"></Navigation>
                <Container style={{ marginTop: "15px" }}>
                    <h1 style={{ textAlign: "center" }}>Login Page</h1>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username or Email address</Form.Label>
                            <Form.Control name="username" onChange={this.onChange} type="email" placeholder="Enter username or email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" onChange={this.onChange} type="password" placeholder="Password" />
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

export default Login;

