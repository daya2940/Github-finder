import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/navbar';
import Users from './components/users/Users';
import axios from 'axios'
import Search from './components/users/search';

class App extends Component {

  state = {
    users: [],
    loading: false
  }

  // async componentDidMount() {
  //   this.setState({ loading: true })
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret_id = ${process.env.REACT_APP_GITHUB_CLIENT_SECRET_ID}
  // }`);

  //   this.setState({ users: res.data, loading: false });
  // }
  //searching the user with api
  searchUsers = async (text) => {
    try {
      const res = await axios.get(
        `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret_id = ${process.env.REACT_APP_GITHUB_CLIENT_SECRET_ID}
    }`);
    this.setState({ users: res.data.items, loading: false });

    } catch(e){
      console.log(e.response);
    }
  };

  clearUser = () =>  this.setState({users: [], loading: false});


  render() {
    return (
      <div className="App">
        <Navbar />
        <Search searchUser={this.searchUsers} clearUser={this.clearUser} 
         showClear = {this.state.users.length >0?true:false}
        />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );

  }
}

export default App;
