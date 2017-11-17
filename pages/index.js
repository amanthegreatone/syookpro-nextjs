import React, {Component} from 'react';
import App from './app'
import Router from 'next/router';

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    const loginToken = !! localStorage.getItem("loginToken");
    console.log(loginToken, "loginToken")
    if(!loginToken){
      Router.replace('/')
    }
    this.setState({ isLoading: false })
  }


  render() {
    console.log(this.state)
    return (
      <div>
        {this.state.isLoading ?
          <div>LOADING....</div>
         :
          <App />
        }
      </div>
    );
  }
}

export default Index;
