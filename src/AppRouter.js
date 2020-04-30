import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";

class AppRouter extends React.Component{
    render(){
        return(
            <Router>
                <Route path="/" exact component={Home}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/register" component={Register}></Route>
            </Router>
        )
    }
}

export default AppRouter