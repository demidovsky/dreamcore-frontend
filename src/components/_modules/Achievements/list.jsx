import _ from 'lodash';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import GridLayout from 'react-grid-layout';
import AchievementItem from './item';
import noImage from './no-image.jpg';
import bg2 from './bg5.jpg';
import bg from './hex.jpg';

/*const add = (
  <div className="col-xl-auto col-lg-auto col-md-4 col-sm-4 col-6" key="add">
    <Link to="/achievements/add" className="card card-figure card-add">
      <figure className="figure">
        <div className="card-add-image">
          <img className="img-fluid" src={ noImage } alt=""/>
        </div>
        <figcaption className="figure-caption">
          <span className="btn btn-xs btn-primary">Add</span>
        </figcaption>
      </figure>
    </Link>
  </div>
);*/

function AchievementList (props) {
  // console.log('ITEMS', props.items);
  // console.log('LAYOUT', props.layout);
  const layout = props.layout.length ? _.zipObject(_.map(props.layout, 'i'), props.layout) : [];
  const itemsCompleted = props.items && props.items.length ? props.items.filter(item => item.isCompleted).map((item, index) => (
    <div className="text-center" key={ `a${(index + 1).toString()}` }>
      <AchievementItem item={ item } />
    </div>
  )) : [];

  const itemsIncomplete = props.items && props.items.length ?
    props.items.filter(item => !item.isCompleted).map((item, index) => {
      const key = `a${(index + 1).toString()}`;
      const grid = layout[key];
      return (
        <div className="text-center" data-grid={ grid } key={ key }>
          <AchievementItem item={ item } />
        </div>
      );
    }) : [];

  return (
    <Fragment>

      <div className="achievements-bg-dark" style={ { backgroundImage: `url(${ bg2 })` } }>

      <Link to="/achievements/add">
        <span className="btn btn-xl btn-primary m-4">New</span>
      </Link>

      <GridLayout
        className="achievements-layout"
        cols={ 8 }
        rowHeight={ 150 }
        margin={ [30, 30] }
        width={ 1200 }
        verticalCompact={ false }
        onDragStop={ props.onLayoutChange }
        >
          {itemsIncomplete}
      </GridLayout>

      </div>


      <div className="row achievements-completed achievements-bg pt-4 pb-4" style={ { backgroundImage: `url(${ bg })` } }>
        <h1 className="achievements-completed-year col-12 text-white text-right"><span>2020</span></h1>
        {itemsCompleted}
      </div>
    </Fragment>
  );
}


AchievementList.propTypes = {
  items: PropTypes.array,
  layout: PropTypes.array,
};

export default AchievementList;
