import React, { Component } from 'react';
import UsersForm from '../components/userform'
import {createNewUser} from './../api/createNewUserApi'

class UsersNew extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    const token = props.url.query.authtoken
    this.state = {
      name: '',
      email: '',
      account_id:'',
      password:'',
      authtoken:token
    };
  }

  updateName = event => {
    this.setState({ name: event.target.value });
  };

  updateEmail = event => {
    this.setState({ email: event.target.value });
  };

  updateAccountId = event => {
    this.setState({ account_id: event.target.value });
  }

  updatePassword = event => {
    this.setState({ password: event.target.value });
  }

  createUser = async () => {
    console.log(this.state, "user data")
    const newUserJson = {
      username:this.state.name,
      email:this.state.email,
      account_id:this.state.account_id,
      password:this.state.password
    }
    console.log(newUserJson, "newUserJson")

    try{
      const newUserResponse = await createNewUser(newUserJson, this.state.authtoken)
      console.log(newUserResponse)
    }
    catch(error){
      console.log(error)
    }
  }

  render() {
    return (
      <div>
        <UsersForm
          formLabel="Create User"
          name={this.state.name}
          updateName={this.updateName}
          email={this.state.email}
          updateEmail={this.updateEmail}
          account_id={this.state.account_id}
          updateAccountId = {this.updateAccountId}
          password = {this.state.password}
          updatePassword = {this.updatePassword}
        />
        <button type="button" onClick={this.createUser}>Create User</button>
      </div>
    );
  }
}

export default UsersNew;
