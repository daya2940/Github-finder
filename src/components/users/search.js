import React, { Component } from 'react'
import { PropTypes } from 'prop-types';

class Search extends Component {
  state = {
    text: ''
  }

  static propTypes = {
    searchUser: PropTypes.func.isRequired,
    clearUser: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.searchUser(this.state.text);
    this.setState({ text: '' });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)} className="form">
        <input type="text" placeholder="Search users..." value={this.state.text} onChange={this.onChange}
          name='text'
        />
        <input type="submit" value="search" className="btn btn-dark btn-block" />
        {this.props.showClear && (
          <button type="submit" className="btn btn-light btn-block" onClick={this.props.clearUser}>Clear</button>
        ) }
      </form>
    )
  }
}

export default Search
