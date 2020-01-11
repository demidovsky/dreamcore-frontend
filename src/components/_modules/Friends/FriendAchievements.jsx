import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import AchievementItem from './../Achievements/item';

function FriendAchievements (props) {
  const itemsCompleted = props.items && props.items.length ? props.items.filter(item => item.isCompleted).map((item, index) => (
    <div className="col-xl-auto col-lg-auto col-md-4 col-sm-4 col-6 text-center" key={ (index + 1).toString() }>
      <AchievementItem item={ item } isToolbarDisabled={ true } />
    </div>
  )) : [];

  const itemsIncomplete = props.items && props.items.length ?
    props.items.filter(item => !item.isCompleted).map((item, index) => {
      return (
        <div className="col-xl-auto col-lg-auto col-md-4 col-sm-4 col-6 text-center" key={ (index + 1).toString() }>
          <AchievementItem item={ item } isToolbarDisabled={ true } />
        </div>
      );
    }) : [];

  return (
    <Fragment>

      <div className="row achievements-bg-dark pt-4 pb-4" style={ { flex: 1, alignContent: 'start' } }>
        {itemsIncomplete}
      </div>

      <div className="row achievements-completed achievements-bg pt-4 pb-4">
        <h1 className="achievements-completed-year col-12 text-white text-right"><span>2020</span></h1>
        {itemsCompleted}
      </div>
    </Fragment>
  );
}

FriendAchievements.propTypes = {
  items: PropTypes.array,
};

export default FriendAchievements;
