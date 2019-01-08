import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import axios from 'axios';
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

  save = (values, { setSubmitting }) => {
    const method = this.state.id ? 'patch' : 'post';
    const url = `http://localhost:1337/achievements/${ this.state.id || '' }`;

    axios[method](url, {
      name: values.name,
      notes: values.notes,
    })
    .then((response) => {
      setTimeout(() => {console.log(response); setSubmitting(false);}, 3000);
    });
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
    const id = this.state.id;

    return (
      <React.Fragment>
        <PageHeader breadcrumps={ ['Modules', 'Achievements', `${ id ? 'Edit' : 'Create' } achievement`] } />

        <Formik enableReinitialize initialValues={ { name, notes } } onSubmit={ this.save }>
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, }) => (
            <form onSubmit={ handleSubmit }>
              <div className="row">
                <div className="col-sm-6 col-lg-6">
                  <div className="card create-achievement">
                    <h3 className="card-header">Description</h3>
                    <div className="card-body">

                      <div className="form-group">
                        <label htmlFor="inputText3" className="col-form-label">Name</label>
                        <input name="name" type="text" className="form-control"
                      value={ values.name } maxLength="64" onChange={ handleChange } onBlur={ handleBlur } />
                      </div>

                      <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Notes</label>
                        <textarea name="notes" className="form-control" rows="3"
                      value={ values.notes } onChange={ handleChange } onBlur={ handleBlur }></textarea>
                      </div>

                      <label className="col-form-label">Preview</label>
                      <div className="card card-figure achievement-preview">
                        <figure className="figure">
                          <img className="img-fluid" src={ imageUrl || noImage } alt="" />
                          <figcaption className="figure-caption">
                            <h6 className="figure-title">{ values.name }</h6>
                          </figcaption>
                        </figure>
                      </div>

                      <div className="form-group">
                        <button disabled={ isSubmitting } type="submit" className="btn btn-lg btn-success">Save</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-6">
                  <div className="card">
                    <h3 className="card-header">Image</h3>
                    <div className="card-body border-top">

                      <FileInput/>

                      <div className="row divider-with-text">
                        <div className="col"><hr/></div>
                        <div className="col-auto">or</div>
                        <div className="col"><hr/></div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="inputSmall" className="col-form-label">Paste URL</label>
                        <input onChange={ handleChange } type="text" value="" className="form-control form-control-sm"/>
                      </div>

                      <div className="row divider-with-text">
                        <div className="col"><hr/></div>
                        <div className="col-auto">or</div>
                        <div className="col"><hr/></div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="inputSmall" className="col-form-label">Find by keywords</label>
                        <input type="text" value="" className="form-control form-control-sm"/>
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
                        <button className="btn btn-outline-primary">Load more...</button>
                      </div>
             
                    </div>
                  </div>
                </div>

              </div>
            </form>)}
        </Formik>

      </React.Fragment>)
  }
}

AchievementEdit.propTypes = {
  match: PropTypes.object
};

export default AchievementEdit;
