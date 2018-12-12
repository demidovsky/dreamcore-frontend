import React, { Component } from 'react';

class Achievements extends Component {
  render() {
    return (
      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
        <div className="card card-figure card-add">
          <figure className="figure">
            <div className="card-add-image">
              <img className="img-fluid" src="https://c1.staticflickr.com/4/3799/8918367978_b516597e46_n.jpg" alt="Card image cap"/></div>
            <figcaption className="figure-caption">
              <a href="#" className="btn btn-primary">Add</a>
            </figcaption>
          </figure>
        </div>
      </div>
    );
  }
}

export default Achievements;
