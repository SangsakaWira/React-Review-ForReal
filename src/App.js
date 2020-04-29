import React from 'react';
import { Button,Form,NavDropdown,Nav,Navbar,FormControl } from 'react-bootstrap'
import Home from './Home';
import axios from 'axios';

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: "Sangsaka Wira",
            counter: 0
        }
        this.onClickHandler = this.onClickHandler.bind(this)
    }

    async componentDidMount(){
        let data = await axios.get("http://covid-dashboard-its.id:4500/pasienCovid/findAllPasien").then(response=>{
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

