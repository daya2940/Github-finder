import React, { Component } from 'react'

class Search extends Component {
  render() {
    return (
      <form className="form">
        <input type="text" placeholder="Search users..." />
        <input type="submit" value="search" className="btn btn-dark btn-block" />
      </form>
    )
  }
}

export default Search
