import React, { Component } from 'react';
import axios from 'axios';
import PageHeader from './../../PageHeader';
import AchievementList from './list';
import './achievements.css';

const BASE_URL = process.env.REACT_APP_BASE_URL;

class Achievements extends Component {
  constructor (props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: null,
      items: [],
      layout: []
    };
  }

  async componentDidMount () {
    try {
      const layout = (await axios.get(`${BASE_URL}/layout/achievements`)).data;
      // console.log('get layout', layout);
      if (layout) this.setState({ layout: JSON.parse(layout) });
    } catch (error) {
      console.error(error);
    }

    fetch(`${BASE_URL}/achievements/`)
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


  onLayoutChange (layout) {
    axios.patch(`${BASE_URL}/layout/achievements`, { layout: JSON.stringify(layout) });
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
          <AchievementList
            items={ this.state.items }
            layout={ this.state.layout }
            onLayoutChange={ this.onLayoutChange } /> }
      </React.Fragment>
    );
  }
}

export default Achievements;
