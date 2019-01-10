import React from 'react'

class ImageFromFlickr extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="form-group">
          <label htmlFor="inputSmall" className="col-form-label pt-0">Find by keywords</label>
          <input type="text" defaultValue="" className="form-control form-control-sm"/>
        </div>

        <div className="mb-2">

          <div className="img-thumb">
            <img className="img-fluid" alt="" src="http://c1.staticflickr.com/5/4071/4277029894_7023f3ca2f_m.jpg"/>
          </div>
          <div className="img-thumb">
            <img className="img-fluid" alt="" src="http://c1.staticflickr.com/8/7065/6852957177_9f27f30f12_m.jpg"/>
          </div>
          <div className="img-thumb">
            <img className="img-fluid" alt="" src="http://c1.staticflickr.com/4/3936/14950097294_6212158ff5_m.jpg"/>
          </div>

          <div className="img-thumb">
            <img className="img-fluid" alt="" src="http://c1.staticflickr.com/9/8420/8710133086_936fe32e0f_m.jpg"/>
          </div>
          <div className="img-thumb">
            <img className="img-fluid" alt="" src="http://c1.staticflickr.com/9/8206/8235791752_c26a81fa90_m.jpg"/>
          </div>

        </div>

        <div className="form-group">
          <button className="btn btn-outline-primary float-right">Load more...</button>
          <button className="btn btn-outline-success">Apply image</button>
        </div>
      </React.Fragment>
    );
  }
}

export default ImageFromFlickr;