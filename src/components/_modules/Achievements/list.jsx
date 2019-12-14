import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AchievementItem from './item';
import noImage from './no-image.jpg';
import bg2 from './bg5.jpg';
import bg from './hex.jpg';

const add = (
  <div className="col-xl-auto col-lg-auto col-md-4 col-sm-4 col-6" key="0">
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
);

function AchievementList (props) {
  console.log('ITEMS', props.items);
  const itemsCompleted = props.items && props.items.length ? props.items.filter(item => item.isCompleted).map((item, index) => (
    <div className="col-xl-auto col-lg-auto col-md-4 col-sm-4 col-6 text-center" key={ (index + 1).toString() }>
      <AchievementItem item={ item } />
    </div>
  )) : [];

  const itemsIncomplete = props.items && props.items.length ? props.items.filter(item => !item.isCompleted).map((item, index) => (
    <div className="col-xl-auto col-lg-auto col-md-4 col-sm-4 col-6 text-center" key={ (index + 1).toString() }>
      <AchievementItem item={ item } />
    </div>
  )) : [];

  itemsIncomplete.push(add);

  return (
    <Fragment>
        <div className="row achievements-bg-dark pt-4 pb-4" style={ { flex: 1, alignContent: 'start', backgroundImage: `url(${ bg2 })` } }>
          {itemsIncomplete}
        </div>

      <div className="row achievements-completed achievements-bg pt-4 pb-4" style={ { backgroundImage: `url(${ bg })` } }>
        <h1 className="achievements-completed-year col-12 text-white text-right"><span>2020</span></h1>
        {itemsCompleted}
      </div>
    </Fragment>
  );
}

AchievementList.propTypes = {
  items: PropTypes.array
};

export default AchievementList;
