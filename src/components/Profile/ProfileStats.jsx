import React, { Component } from 'react';

const LOADING = '?'; // 'loading...';

class ProfileStats extends Component {
  componentDidMount() {
    console.log('ProfileStats', this.props);
  }
  render() {
    const friends = this.props.friends || this.props.user.friendships || LOADING;
    let achievements = LOADING;
    if (this.props.user) {
      achievements = this.props.user.achievements;
      if (typeof this.props.user.achievements !== 'number') {
        achievements = this.props.user.achievements.length;
      }
    }

    console.log('friends', friends, 'achievements', achievements);

  return (
    <div className="row">
      <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12">
        <div className="card">
          <div className="card-body">
            <div className="d-inline-block">
              <h5 className="text-muted">Achievements</h5>
              <h2 className="mb-0">{ achievements }</h2>
            </div>
            <div className="float-right icon-circle-medium  icon-box-lg  bg-info-light mt-1">
              <i className="fa fa-eye fa-fw fa-sm text-info"></i>
            </div>
          </div>
        </div>
      </div>
      {/*<div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12">
        <div className="card">
          <div className="card-body">
            <div className="d-inline-block">
              <h5 className="text-muted">Actions</h5>
              <h2 className="mb-0">{ this.props.user ? this.props.user.actions.length : LOADING }</h2>
            </div>
            <div className="float-right icon-circle-medium  icon-box-lg  bg-primary-light mt-1">
              <i className="fa fa-user fa-fw fa-sm text-primary"></i>
            </div>
          </div>
        </div>
      </div>*/}
      <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12">
        <div className="card">
          <div className="card-body">
            <div className="d-inline-block">
              <h5 className="text-muted">Friends</h5>
              <h2 className="mb-0">{ friends }</h2>
            </div>
            <div className="float-right icon-circle-medium  icon-box-lg  bg-secondary-light mt-1">
              <i className="fa fa-handshake fa-fw fa-sm text-secondary"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  }
}

export default ProfileStats;
