import React, { Component } from 'react';
import {loginUser} from './../api/loginApi'
import Router from 'next/router';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'',
        };
    }

    updateUserEmail = (e) => {
        this.setState({
            email:e.target.value
        })
    }

    updateUserPassword = (e) => {
        this.setState({
            password:e.target.value
        })
    }

    handleClick = async () => {
        console.log("in this", this.state)
        const logInJson = {
          email: this.state.email,
          password: this.state.password
        }

        console.log("in this", logInJson);
        try{
          const loginResponse = await loginUser(logInJson)
          console.log("loginResponse", loginResponse)
          const authtoken = loginResponse.object.token
          if(loginResponse.success){
            Router.push(
              `/dashboard?authtoken=${authtoken}`,
              '/dashboard',
              { shallow: true }
            )
            localStorage.setItem('loginToken', authtoken)
            localStorage.setItem('profile', JSON.stringify(loginResponse.object))
          }
        }
        catch(error){
          console.log(error)
        }
    }


  render() {
    const formStyle = {
        padding: 20,
        backgroundColor: "#eee",
        width:1000,
        border:'1px solid #eee',
        marginTop:30,
        textAlign:'center'
    };

    const labelStyle = {
        color:'#999',
        width:150,
        display:'inline-block'
    }

    const divStyle = {
        padding:10
    }

    const inputStyle={
        padding:6,
        width:300,
    }

    return (
        <div style={formStyle}>
            <h2>Login Page</h2>

            <div style={divStyle}>
                <label style={labelStyle}>Email:</label>
                <input name="username" type="text" style={inputStyle} onChange={this.updateUserEmail}/>
            </div>

            <div style={divStyle}>
                <label style={labelStyle}>Password:</label>
                <input name="password" type="text" style={inputStyle} onChange={this.updateUserPassword}/>
            </div>

            <div>
                <input type="submit" onClick={this.handleClick}/>
            </div>
        </div>
    );
  }
}

export default LoginPage;
