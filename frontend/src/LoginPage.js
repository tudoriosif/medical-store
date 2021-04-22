import React, { Component } from 'react'
import Header from "./Header";
import Login from './Login'

export class LoginPage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Login/>
            </div>
        )
    }
}

export default LoginPage
