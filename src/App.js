import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/navbar';
import Users from './components/users/Users';
import axios from 'axios'
import Search from './components/users/search';
import Alert from './components/layout/alert';
import { Fragment } from 'react';
import About from './components/pages/about';
import User from './components/users/user';

class App extends Component {

  state = {
    users: [],
    loading: false,
    user: {},
    alert: null,
    repo: []
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
      this.setState({ loading: true });
      const res = await axios.get(
        `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret_id = ${process.env.REACT_APP_GITHUB_CLIENT_SECRET_ID}
    }`);
      this.setState({ users: res.data.items, loading: false });

    } catch (e) {
      console.log(e.response);
    }
  };

  //get Single user Details

  getUser = async (userName) => {
    try {
      this.setState({ loading: true });
      const res = await axios.get(
        `https://api.github.com/users/${userName}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret_id = ${process.env.REACT_APP_GITHUB_CLIENT_SECRET_ID}
    }`);
    console.log(res);
      this.setState({ user: res.data, loading: false });

    } catch (e) {
      console.log(e.response);
    }
  }

  //getUser github details
  getUserRepos = async (userName) => {
    try {
      this.setState({ loading: true });
      const res = await axios.get(
        `https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret_id = ${process.env.REACT_APP_GITHUB_CLIENT_SECRET_ID}
    }`);
    console.log(res);
      this.setState({ repo: res.data, loading: false });

    } catch (e) {
      console.log(e.response);
    }
  }

  //clear user from formstate
  clearUser = () => this.setState({ users: [], loading: false });

  //For alert message
  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });
    setTimeout(() => { this.setState({ alert: null }) }, 3000);
  }

  render() {
    const {loading,users,user,alert,repo}=this.state;
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Alert alert={alert} />
          <Switch>
            <Route exact path="/" render={props => (
              <Fragment>
                <Search
                  searchUser={this.searchUsers}
                  clearUser={this.clearUser}
                  showClear={users.length > 0 ? true : false}
                  setAlert={this.setAlert}
                />
                <div className="container">
                  <Users loading={loading} users={users} />
                </div>
              </Fragment>
            )} />
            <Route exact path="/about" component= {About} />
            <Route exact path="/user/:userid"  render={props => (
                <User 
                  {...props}
                  getUser={this.getUser}
                  getUserRepos={this.getUserRepos}
                  user={user}
                  repo={repo}
                />
            )}/>
          </Switch>
        </div>
      </Router>
    );

  }
}

export default App;
