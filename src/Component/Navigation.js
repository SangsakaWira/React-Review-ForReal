import React from 'react'
import { Button,Form,Nav,Navbar,FormControl } from 'react-bootstrap'

class Navigation extends React.Component {

    componentDidMount(){
        console.log(this.props.status)
    }

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link className={this.props.status === "Register"?"active":""} href="/register">Register</Nav.Link>
                        <Nav.Link className={this.props.status === "Login"?"active":""} href="/login">Login</Nav.Link>
                        <Nav.Link className={this.props.status === "Home"?"active":""} href="/">Dashboard</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation