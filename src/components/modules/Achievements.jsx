import React, { Component } from 'react';

class Achievements extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-xl-12">

          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="page-header" id="top">
                <h2 className="pageheader-title">Achievements </h2>
                <p className="pageheader-text">Proin placerat ante duiullam scelerisque a velit ac porta, fusce sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>
                <div className="page-breadcrumb">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Modules</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Achievements</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>

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

        </div>
      </div>
    );
  }
}

export default Achievements;
