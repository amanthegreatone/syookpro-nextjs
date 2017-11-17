import React, { Component } from 'react';
import UsersForm from '../components/userform'
import {editUsersForm} from '../api/editUsersApi'


class UsersEdit extends Component {
  constructor(props) {
    super(props);
    const user_data = JSON.parse(props.url.query.item);
    const token = props.url.query.authtoken
    console.log(props, "props")
    this.state = {
      name: user_data.username,
      email: user_data.email,
      account_id: user_data.account_id,
      password: user_data.password,
      authtoken:token
    };
  }

  updateName = event => {
    this.setState({ name: event.target.value });
  };

  updateEmail= event => {
    this.setState({ email: event.target.value });
  };

  updateAccountId = event => {
    this.setState({ account_id: event.target.value });
  }

  updatePassword = event => {
    this.setState({ password: event.target.value });
  }

  editUser = async () => {
    console.log(this.state, "user data")
    const editUserJson = {
      username:this.state.name,
      email:this.state.email,
      account_id:this.state.account_id,
      password:this.state.password
    }
    console.log(editUserJson, "editUserJson")

    try{
      const editUserResponse = await editUsersForm(editUserJson, this.state.token)
      console.log(editUserResponse)
    }
    catch(error){
      console.log(error)
    }
  }

  render() {
    return (
      <div>
        <UsersForm
          formLabel="Edit User"
          name={this.state.name}
          updateName={this.updateName}
          email={this.state.email}
          updateEmail={this.updateEmail}
          account_id={this.state.account_id}
          updateAccountId = {this.updateAccountId}
          password = {this.state.password}
          updatePassword = {this.updatePassword}
        />
        <button type="button" onClick={this.editUser}>Edit User</button>
      </div>
    );
  }
}

export default UsersEdit;
