import React from 'react';
import RepoItem from './reposItem';
import { PropTypes } from 'prop-types';


const Repos = ({repo}) => {
  return repo.map(data => <RepoItem repo={data} key={data.id}/>)
};

Repos.PropTypes = {
  repos:PropTypes.array.isRequired,
}

export default Repos
