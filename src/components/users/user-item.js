import React from 'react'
import { Link } from 'react-router-dom';

const UserItem = (props) => {

  const {login,avatar_url} = props.user; //destructuring
  return (
      <div className="card text-center">
        <img src={avatar_url}
          className="round-img"
          alt="avatar_url"
          style={{ width: '60px' }}
        />
        <h3>{login}</h3>
        <div>
          <Link className="btn btn-sm my-1 btn-dark" to={`/user/${login}`} >More</Link>
        </div>
      </div>
    )
}

export default UserItem
