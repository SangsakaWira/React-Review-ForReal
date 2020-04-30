import React from 'react';
import { Spinner, Container, Form, Button } from 'react-bootstrap'
import Navigation from './Navigation';

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
            <div>
                <Navigation></Navigation>
                <Container>
                    <h1>Hello you are at Home Page</h1>
                </Container>
            </div>
        )
    }
}

export default Home;

