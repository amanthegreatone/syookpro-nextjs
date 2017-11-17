import React, { Component } from 'react';
import Link from 'next/link';

class App extends Component {
  render() {
    return (
      <div>
        <Link href="/signup"><a style={{marginRight:'20px'}}>Signup</a></Link>
        <Link href="/login"><a> Login </a></Link>
      </div>
    );
  }
}

export default App;
