import React from 'react'
import Flickr from 'flickr-sdk';

const API_KEY = '030eecfb70548131bdf6d6a6e5705a14';
const SECRET = 'c7d2f33ef111cf67';

var flickr = new Flickr(API_KEY);

class ImageFromFlickr extends React.Component {
  componentDidMount () {
    flickr.photos.search({
      text: 'flight',
      page: 1,
      per_page: 5
    })
    .then(result => {
      console.log(result.body);
    })
    .catch(err => {
      console.error(err);
    })
  }

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