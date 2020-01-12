import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import noAvatar from './../../noAvatar.jpg';
import _ from 'lodash';

const BASE_URL = process.env.REACT_APP_BASE_URL;


class AchievementAccess extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      friendsWithAccess: []
    };
  }

  componentDidMount() {
    axios.get(`${ BASE_URL }/access/achievements/${this.props.achievementId}`)
      .then(
        result => { this.setState({ friendsWithAccess: result.data.friends }); console.log(result); return result; },
        error => { console.error(error); })
      .catch(err => console.error(err));
  }

  handleChange = (e) => {
    console.log('handleChange', e.target);
    const friendId = parseInt(e.target.value);
    console.log(friendId);
    const params = {
      friendId,
      itemId: this.props.achievementId
    };

    if (this.state.friendsWithAccess.includes(friendId)) { console.log('revoke') }
      else console.log('grant')

    if (this.state.friendsWithAccess.includes(friendId)) {
      axios.delete(`${ BASE_URL }/access/achievements`, { data: params }).then(
        result => {
          this.setState(prevState => ({
            friendsWithAccess: prevState.friendsWithAccess.filter(item => item !== result.data.friendId)
          }));
        },
        error => { console.error(error); }).catch(err => console.error(err));
    } else {
      axios.post(`${ BASE_URL }/access/achievements`, params).then(
        result => {
          this.setState(prevState => ({
            friendsWithAccess: prevState.friendsWithAccess.concat(result.data.friendId)
          }));
        },
        error => { console.error(error); }).catch(err => console.error(err));
    }

  }

  render () {
    const friends = this.props.friends.map(friend => {
      const avatar = friend.avatar || noAvatar;
      const id = friend.friendId;
      return <label key={ id } className="custom-control custom-checkbox">
        <input className="custom-control-input" type="checkbox"
          name={ `friend${id}` }
          value={ id }
          onChange={ this.handleChange }
          checked={ this.state.friendsWithAccess.includes(id) } />
        <span className="custom-control-label">
          <img src={ avatar } alt="" className="user-avatar-md rounded-circle"/>
          <span className="d-inline-block ml-2">{ friend.fullName }</span>
        </span>
      </label>
    });

    return (
      <Fragment>
        {/*<div>
          <label className="custom-control custom-radio custom-control-inline">
            <input className="custom-control-input" type="radio" name="accessType" value="private"/>
            <span className="custom-control-label">Only me</span>
          </label>
          <label className="custom-control custom-radio custom-control-inline">
            <input className="custom-control-input" type="radio" name="accessType" value="allFriends"/>
            <span className="custom-control-label">All friends</span>
          </label>
          <label className="custom-control custom-radio custom-control-inline">
            <input className="custom-control-input" type="radio" name="accessType" value="someFriends"/>
            <span className="custom-control-label">Selected friends</span>
          </label>
        </div>*/}

        <div>
          { friends }
        </div>

        <div class="form-group text-right">
          <button type="button" className="btn btn-lg btn-primary">Apply</button>
        </div>
      </Fragment>
    );
  }
}

AchievementAccess.propTypes = {
  onImageSet: PropTypes.func
};

export default AchievementAccess;
