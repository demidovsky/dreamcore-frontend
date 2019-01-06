import React from 'react';
import _ from 'lodash';
import Breadcrumps from './breadcrumps';

class PageHeader extends React.Component {
  render () {
    const title = this.props.title || _.last(this.props.breadcrumps);
    const description = this.props.description || '';

    return (
      <div className="row">
        <div className="col-12">
          <div className="page-header" id="top">
            <h2 className="pageheader-title">{title}</h2>
            <p className="pageheader-text">{description}</p>
            <Breadcrumps items={ this.props.breadcrumps }/>
          </div>
        </div>
      </div>
    );
  }
}

export default PageHeader;
