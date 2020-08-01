import React, { Component, Fragment} from 'react'
import Spinner from '../layout/spinner';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import Repos from '../repos/repos';

class User extends Component {

  async componentDidMount() {
    await this.props.getUser(this.props.match.params.userid);
    await this.props.getUserRepos(this.props.match.params.userid);
  }

  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
    getUSerRepos:PropTypes.func.isRequired,
    repo:PropTypes.array.isRequired,
  }

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repo,
      public_gist,
      hireable
    } = this.props.user;
    
    const { loading,repo } = this.props;
    if (loading) return <Spinner />;
    return (
      <div>
        <Fragment>
          <Link to="/" class="btn btn-light">Back</Link>
        </Fragment>
        Hireable: {''}
        {hireable ? <i className="fa fa-check text-success" /> : <i className="fa fa-times-circle text-danger" />}
        <div className="card grid2">
          <div className="all-center">
            <img
              src={avatar_url}
              alt=""
              className="round-img"
              style={{ width: '150px' }}
            />
            <h1>{name}</h1>
            <p>location:{location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className="btn btn-dark my-1 link-center">Visit github profile</a>
            <ul>
              <li>
                {login &&
                  <Fragment>
                    <strong>UserName:</strong> {login}
                  </Fragment>
                }
              </li>
              <li>
                {blog &&
                  <Fragment>
                    <strong>Website</strong> {blog}
                  </Fragment>
                }
              </li>
            </ul>
          </div>

        </div>
        <div className="card text-center">
          <div class="badge badge-primary">followers:{followers}</div>
          <div class="badge badge-danger">following:{following}</div>
          <div class="badge badge-success">public Repos:{public_repo}</div>
          <div class="badge badge-dark">public Gist:{public_gist}</div>
        </div>
        <Repos repo={repo} />
      </div>
    )
  }
}

export default User
