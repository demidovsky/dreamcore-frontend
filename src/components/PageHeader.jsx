import React, { Component } from 'react';
import _ from 'lodash';

function Breadcrumps (props) {
  if (!props.items) return '';

  const items = props.items.slice(0, -1).map((item, index) =>
    <li className="breadcrumb-item" key={index}>
      <a href="#" className="breadcrumb-link">{item}</a>
    </li>
  );
  const current = _.last(props.items);

  return (
    <div className="page-breadcrumb">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          {items}
          <li className="breadcrumb-item active" aria-current="page">{current}</li>
        </ol>
      </nav>
    </div>
  );
}

class PageHeader extends Component {
  render() {
    const title = this.props.title || _.last(this.props.breadcrumps);
    const description = this.props.description || '';

    return (
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="page-header" id="top">
            <h2 className="pageheader-title">{title}</h2>
            <p className="pageheader-text">{description}</p>
            <Breadcrumps items={this.props.breadcrumps}/>
          </div>
        </div>
      </div>
    );
  }
}

export default PageHeader;
