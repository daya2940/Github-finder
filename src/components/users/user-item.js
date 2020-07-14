import React from 'react'

const UserItem = (props) => {

  const {login,avatar_url, html_url} = props.user; //destructuring
    return (
      <div className="card text-center">
        <img src={avatar_url}
          className="round-img"
          alt="avatar_url"
          style={{ width: '60px' }}
        />
        <h3>{login}</h3>
        <div>
          <a className="btn btn-sm my-1 btn-dark" href={html_url} >More</a>
        </div>
      </div>
    )
}

export default UserItem
