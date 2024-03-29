import React, { Component, Fragment } from 'react';
import PageHeader from './../PageHeader';
import ProfileBio from './ProfileBio';
import ProfileStats from './ProfileStats';
import axios from 'axios';
import './profile.css';

const BASE_URL = process.env.REACT_APP_BASE_URL;

class Profile extends Component {
  constructor (props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false, //null,
      user: null,
      friends: null
    };
  }

  componentDidMount () {
    fetch(`${ BASE_URL }/profile`)
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          this.setState({
            isLoaded: true,
            user: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: false,
            error
          });
        }
      );

    axios.get(`${ BASE_URL }/friends`)
    // .then(res => res.json())
    .then(
      result => {
        console.log(result);
        this.setState({
          isLoaded: true,
          friends: result.data.filter(item => item.isConfirmed).length
        });
      },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: false,
            error
          });
        }
      )
  }

  render () {
    return (
      <Fragment>
        <PageHeader breadcrumps={ ['Profile'] } />

        {this.state.isLoaded === false ?
          <div className="alert alert-danger" role="alert">
            Cannot load profile info
          </div>
          :
          <Fragment>
            <ProfileBio user={ this.state.user } />
            <ProfileStats user={ this.state.user } friends={ this.state.friends }/>
          </Fragment>
        }
      </Fragment>
    );
  }
}

export default Profile;
