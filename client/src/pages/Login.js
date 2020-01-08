import React, { Component, useState } from "react";
import LoginPage from "./LoginPage";
import API from "../utils/API";

class Login extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            isAuthenticated: false
        }
    }
handleUserInput = (event) => {
        event.preventDefault();
        console.log(event.target.value)
        this.setState({ username: event.target.value })
    }
handlePasswordInput = (event) => {
        event.preventDefault();
        console.log(event.target.value)
        this.setState({ password: event.target.value })
     }
handleLogin = (event) => {
    event.preventDefault();
    API.loginUser({ username: this.state.username, password: this.state.password})
        .then(API.sessions(res.redirect("/"))
        .then(console.log("In session function")))
    
}

render() {
    return (
        <div>
            <LoginPage handleUserInput={this.handleUserInput} handlePasswordInput={this.handlePasswordInput} OnClick ={this.handleLogin}/>
        </div>
    )
}
}
export default Login;