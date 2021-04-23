import React, { Component } from 'react'
import Header from "../components/Header";
import Login from '../components/Login'

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
