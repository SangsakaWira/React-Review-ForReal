import React from 'react';
import { Button,Form,NavDropdown,Nav,Navbar,FormControl } from 'react-bootstrap'
import Home from './Home';

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: "Sangsaka Wira",
            counter: 0
        }
        this.onClickHandler = this.onClickHandler.bind(this)
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

    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                <Home></Home>
            </div>
        )
    }
}

export default App;

