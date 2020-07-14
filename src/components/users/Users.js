import React from 'react'
import UserItem from './user-item';
import Spinner from '../layout/spinner';
import { PropTypes } from 'prop-types';

const  Users = ({users,loading}) => {
  if(loading){
   return <Spinner />
  }else {
    return (
      <div style={UserStyle}>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    )

  }
}

const UserStyle = {
  display: 'grid',
  gridTemplateColumns:'repeat(3, 1fr)',
  gridGap: '1rem'
};

Users.prototype= {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired 
}

export default Users
