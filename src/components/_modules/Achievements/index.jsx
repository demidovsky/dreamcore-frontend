import React, { Component } from 'react';
import PageHeader from './../../PageHeader';
import AchievementList from './list';
import './achievements.css';

const BASE_URL = 'http://localhost:1337/';

class Achievements extends Component {
  constructor (props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: null,
      items: []
    };
  }

  componentDidMount () {
    fetch(`${BASE_URL}achievements/`)
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          this.setState({
            isLoaded: true,
            items: result
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
      <React.Fragment>
        <PageHeader breadcrumps={ [ 'Modules', 'Achievements' ] } />

        {this.state.isLoaded === false ?
          <div className="alert alert-danger" role="alert">
            Cannot load achievements
          </div>
          :
          <AchievementList items={ this.state.items } /> }
      </React.Fragment>
    );
  }
}

export default Achievements;
