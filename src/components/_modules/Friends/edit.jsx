import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import PageHeader from './../../PageHeader';
import noImage from './../Achievements/no-image.jpg';
import AchievementImage from './../Achievements/image';

const BASE_URL = 'http://localhost:1337/';

class ScopeEdit extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      id: parseInt(props.match.params.id, 10)
    };
  }

  save = (values, { setSubmitting }) => {
    const method = this.state.id ? 'patch' : 'post';
    const url = `${BASE_URL}scopes/${ this.state.id || '' }`;

    axios[method](url, {
      name: values.name,
      notes: values.notes,
      picture: values.picture
    })
    .then((response) => {
      this.setState({ redirect: '/scopes' });
      // setTimeout(() => { console.log('saved', response); setSubmitting(false); }, 3000);
    })
    .catch(error => {
      console.error(error);
    });
  }

  load = (id) => {
    axios.get(`${ BASE_URL }scopes/${ id }`)
      .then(response => {
        console.log('loaded', response);
        this.setState({ isLoaded: true, ...response.data });
        this.expandTextarea();
      })
      .catch(error => {
        this.setState({ isLoaded: false, error });
    });
  }

  onImageSet = (url) => {
    this.setState({ picture: url });
  }

  expandTextarea = () => {
    this.previewName.style.height = 0;
    this.previewName.style.height = this.previewName.scrollHeight + 'px';
  }

/*  addListeners = () => {
    this.previewName.addEventListener('keyup', this.expandTextarea, false);
    this.name.addEventListener('keyup', this.expandTextarea, false);
  }

  removeListeners = () => {
    if (this.previewName) this.previewName.removeEventListener('keyup', this.expandTextarea, false)
    if (this.name) this.name.removeEventListener('keyup', this.expandTextarea, false)
  }*/

  componentDidMount () {
    // this.addListeners();
    if (this.state.id) this.load(this.state.id);
  }

  componentWillUnmount () {
    // this.removeListeners();
  }

  render () {
    if (this.state.redirect) {
      return <Redirect to={ this.state.redirect } />
    }

    const name = this.state.name || '';
    const notes = this.state.notes || '';
    const picture = this.state.picture;
    const id = this.state.id;

    return (
      <React.Fragment>
        <PageHeader breadcrumps={ ['Modules', 'Scope', `${ id ? 'Edit' : 'Create' } scope`] } />

        <Formik enableReinitialize initialValues={ { name, notes, picture } } onSubmit={ this.save }>
          {({ values, errors, handleChange, handleBlur, handleSubmit, isSubmitting }) => (

            <form onSubmit={ handleSubmit }>

              <Row>

                <Col sm={ 12 } lg={ 12 }>

                  <div className="card border-3 border-top border-top-primary">
                    <div className="card-body">
                      <div className="form-group">
                        <label className="col-form-label">Name</label>
                        <input name="name" type="text" className="form-control achievement-input-name"
                          value={ values.name } maxLength="64" onChange={ handleChange } onBlur={ handleBlur }
                          ref={ node => { this.name = node; } } />
                      </div>
                      <div className="form-group">
                        <label className="col-form-label">Notes</label>
                        <textarea name="notes" className="form-control achievement-input-notes" rows="3"
                          value={ values.notes } onChange={ handleChange } onBlur={ handleBlur }></textarea>
                      </div>
                      <div className="form-group">
                        <label className="col-form-label">Image URL</label>
                        <input name="picture" type="text" className="form-control"
                          value={ values.picture } onChange={ handleChange } onBlur={ handleBlur }
                          />
                      </div>
                      <div className="form-group">
                        <button disabled={ isSubmitting } type="submit" className="btn btn-lg btn-success">Save</button>
                      </div>
                    </div>
                  </div>

                </Col>

              </Row>

            </form>)}

        </Formik>

        <Row>

          <Col>
            <div className="card achievement-image-select">
              <h3 className="card-header bg-dark text-white"><b>Image</b></h3>
              <div className="card-body">
                <AchievementImage text={ name } onImageSet={ this.onImageSet }/>
              </div>
            </div>
          </Col>

        </Row>

      </React.Fragment>)
  }
}

ScopeEdit.propTypes = {
  match: PropTypes.object
};

export default ScopeEdit;
