import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PageHeader from './../../PageHeader';
import FileInput from './../../FileInput';
import noImage from './no-image.jpg';

class AchievementEdit extends Component {
  constructor (props) {
    super(props);
    this.state = {
      id: parseInt(props.match.params.id, 10)
    };
  }

  componentDidMount () {
    if (!this.state.id) return;

    fetch(`http://localhost:1337/achievements/${ this.state.id }`)
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          this.setState({
            isLoaded: true,
            ...result
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

  render () {
    const name = this.state.name || '';
    const notes = this.state.notes || '';
    const imageUrl = this.state.picture || '';

    return (
      <React.Fragment>
        <PageHeader breadcrumps={ ['Modules', 'Achievements', 'Create achievement'] } />

      <div className="row">

        <div className="col-sm-6 col-lg-6">
          <div className="card create-achievement">
            <h3 className="card-header">Description</h3>
            <div className="card-body">
              <form>
                <div className="row">
                  <div className="col-md-4">
                    <label className="col-form-label">Preview</label>
                    <div className="card card-figure">
                      <figure className="figure">
                        <img className="img-fluid" src={ imageUrl || noImage } alt="" />
                        {/*<figcaption className="figure-caption">
                    <h6 className="figure-title"> </h6>
                  </figcaption>*/}
                      </figure>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group">
                      <label htmlFor="inputText3" className="col-form-label">Name</label>
                      <input id="inputText3" type="text" className="form-control" value={ name } />
                    </div>
                  </div>
                </div>
            
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">Notes</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                    value={ notes }></textarea>
                </div>

                <div className="form-group">
                  <button className="btn btn-lg btn-success">Save</button>
                </div>

              </form>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-lg-6">
          <div className="card">
            <h3 className="card-header">Image</h3>
            <div className="card-body border-top">
              <form>

                <FileInput/>
                {/*<div className="form-group custom-file">
                  <input type="file" className="custom-file-input" id="customFile"/>
                  <button className="btn btn-outline-primary btn-xs">Select</button>
                  <label className="custom-file-label" htmlFor="customFile">Upload...</label>
                </div>*/}

                <div className="row divider-with-text">
                  <div className="col"><hr/></div>
                  <div className="col-auto">or</div>
                  <div className="col"><hr/></div>
                </div>

                <div className="form-group">
                  <label htmlFor="inputSmall" className="col-form-label">Paste URL</label>
                  <input id="inputSmall" type="text" value="" className="form-control form-control-sm"/>
                </div>

                <div className="row divider-with-text">
                  <div className="col"><hr/></div>
                  <div className="col-auto">or</div>
                  <div className="col"><hr/></div>
                </div>

                <div className="form-group">
                  <label htmlFor="inputSmall" className="col-form-label">Find by keywords</label>
                  <input id="inputSmall" type="text" value="" className="form-control form-control-sm"/>
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
                  <div className="img-thumb">
                    <img className="img-fluid" alt="" src="http://c1.staticflickr.com/8/7032/6654543769_08f14bb71b_m.jpg"/>
                  </div>

                </div>

                <div className="form-group">
                  <button className="btn btn-outline-primary">Load more...</button>
                </div>
           
              </form>
            </div>
          </div>
        </div>

      </div>
      </React.Fragment>)
  }
}

AchievementEdit.propTypes = {
  match: PropTypes.object
};

export default AchievementEdit;
