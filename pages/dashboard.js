import React, { Component } from 'react';
import {getUsersList} from './../api/getUsersListApi'
import Router from 'next/router';


class Dashboard extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    const authtoken = props.url.query.authtoken
    this.state = {
      userData:'',
      authtoken:authtoken
    };
  }

  async componentWillMount(){
    console.log("in  this")
    try{
      const userResponse = await getUsersList(this.state.authtoken)
      console.log("userResponse", userResponse)
      this.setState({
        userData:userResponse
      })
    }
    catch(error){
      console.log(error)
    }
  }

  createNewUser = () => {
    Router.push(`/usersNew?authtoken=${this.state.authtoken}`, '/usersNew', {shallow:true})
  }

  render() {
    return (
      <div>
        <button onClick={this.createNewUser}>New User</button>
        <table style={{border:'1px solid #eee', padding:'10px', marginTop:'30px'}}>
          <thead>
            <tr style={{borderBottom:'1px solid #CCC', padding:'10px'}}>
              <th>ACCOUNT ID</th>
              <th>USERNAME</th>
              <th>EMAIL</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.userData.length ? this.state.userData.map((item, index) =>
              <tr key={index}>
                <td>{item.account_id}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>
                  <button onClick={() => Router.push(`/usersEdit?item=${JSON.stringify(item)}&&authtoken=${this.state.authtoken}`, '/usersEdit', {shallow:true})}>
                    Edit
                  </button>
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    );
  }
}


export default Dashboard
