import React, {Component} from 'react';
import {signUpUser} from './../api/signupApi';
import Router from 'next/router';

class signupPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:'',
            email:'',
            businessname:'',
            subdomain:'',
            ismobileValid:true
        };
    }

    updateUserName = (e) => {
      console.log("updateUserName", e.target.value)
        this.setState({
            username:e.target.value
        })
    }

    updateUserPassword = (e) => {
        this.setState({
            password:e.target.value
        })
    }

    updateUserEmail = (e) => {
        this.setState({
            email:e.target.value
        })
    }

    updateUserBusinessName = (e) => {
        this.setState({
            businessname:e.target.value
        })
    }

    updateUserSubdomain = (e) => {
        this.setState({
            subdomain: e.target.value
        })
    }

    handleClick = async () => {
        const signUpJson = {
            business_name: this.state.businessname,
            subdomain: this.state.subdomain,
            email: this.state.email,
            password: this.state.password,
            username: this.state.username
          }

        console.log("in this", signUpJson)
        try{
          const signupResponse = await signUpUser(signUpJson)
          if(signupResponse.success){
            console.log("signupResponse", signupResponse)
            Router.push('/login')
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
        textAlign:'center',
        margin:'auto'
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
            <h2>Sign Up Page</h2>

            <div style={divStyle}>
                <label style={labelStyle}>User Name:</label>
                <input name="username" type="text" style={inputStyle} onChange={this.updateUserName} value={this.state.username}/>
            </div>

            <div style={divStyle}>
                <label style={labelStyle}>Password:</label>
                <input name="password" type="text" style={inputStyle} onChange={this.updateUserPassword} value={this.state.password}/>
            </div>

            <div style={divStyle}>
                <label style={labelStyle}>Email:</label>
                <input name="email" type="text" style={inputStyle} onChange={this.updateUserEmail} value={this.state.email}/>
            </div>

            <div style={divStyle}>
                <label style={labelStyle}>Business Name:</label>
                <input name="businessname" type="text" style={inputStyle} onChange={this.updateUserBusinessName} value={this.state.businessname}/>
            </div>

            <div style={divStyle}>
                <label style={labelStyle}>Subdomain:</label>
                <input name="subdomain" type="text" style={inputStyle} onChange={this.updateUserSubdomain} value={this.state.subdomain}/>
            </div>

            <div>
                <button onClick={this.handleClick}>Signup</button>
            </div>
        </div>
    );
  }
}

export default signupPage;
