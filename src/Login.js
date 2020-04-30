import React from 'react';
import { Button,Form,Nav,Navbar,FormControl,Container } from 'react-bootstrap'
import Home from './Home';
import axios from 'axios';
import Navigation from './Navigation';

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: "Sangsaka Wira",
            counter: 0
        }
        this.onClickHandler = this.onClickHandler.bind(this)
    }

    // async componentDidMount(){
    //     let data = await axios.get("http://covid-dashboard-its.id:4500/pasienCovid/findAllPasien").then(response=>{
    //         return response
    //     })
    //     console.log(data.data)
    // }

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
                <Navigation></Navigation>
                <Container>
                    <h1 style={{textAlign:"center"}}>Login Page</h1>
                </Container>
            </div>
        )
    }
}

export default Login;

