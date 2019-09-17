import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import PageHeader from './../../PageHeader';
import noImage from './no-image.jpg';
import AchievementImage from './image';
import ScopeList from '../Scopes/ScopeList';

const BASE_URL = 'http://localhost:1337';

class AchievementEdit extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      id: parseInt(props.match.params.id, 10),
      scopes: []
    };
  }

  save = (values, { setSubmitting }) => {
    const method = this.state.id ? 'patch' : 'post';
    const url = `${ BASE_URL }/achievements/${ this.state.id || '' }`;

    axios[method](url, {
      name: values.name,
      notes: values.notes,
      picture: values.picture,
      scope: values.scope,
    })
    .then((response) => {
      this.setState({ redirect: '/achievements' });
      // setTimeout(() => { console.log('saved', response); setSubmitting(false); }, 3000);
    })
    .catch(error => {
      console.error(error);
    });
  }

  load = (id) => {
    axios.get(`${ BASE_URL }/achievements/${ id }`)
      .then(response => {
        console.log('loaded', response);
        this.setState({ isLoaded: true, ...response.data });
        this.expandTextarea();
      })
      .catch(error => {
        this.setState({ isLoaded: false, error });
      });
  }

  handleNewAction = () => {
    const name = this.newActionInput.value;
    axios
      .post(`${ BASE_URL }/actions`, {
        name: name,
        achievement: this.state.id,
        scope: this.state.scope
      })
      .then(response => {
        console.log('created', response);
        this.newActionInput.value = '';
        this.setState(state => {
          return {
            actions: state.actions.concat({ name })
          }
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  onImageSet = (url, name) => {
    this.setState({ picture: url, name });
  }

  expandTextarea = () => {
    this.previewName.style.height = 0;
    this.previewName.style.height = this.previewName.scrollHeight + 'px';
  }

  addListeners = () => {
    this.previewName.addEventListener('keyup', this.expandTextarea, false);
    this.name.addEventListener('keyup', this.expandTextarea, false);
  }

  removeListeners = () => {
    if (this.previewName) this.previewName.removeEventListener('keyup', this.expandTextarea, false)
    if (this.name) this.name.removeEventListener('keyup', this.expandTextarea, false)
  }

  componentDidMount () {
    this.addListeners();
    if (this.state.id) this.load(this.state.id);

    fetch(`${ BASE_URL }/scopes/`)
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          this.setState({
            // isLoaded: true,
            scopes: result
          });
        },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          error => {
            /*this.setState({
              // isLoaded: false,
              error
            });*/
          }
      )
  }

  componentWillUnmount () {
    this.removeListeners();
  }

  render () {
    if (this.state.redirect) {
      return <Redirect to={ this.state.redirect } />
    }

    const name = this.state.name || '';
    const notes = this.state.notes || '';
    const picture = this.state.picture;
    const id = this.state.id;
    const scopes = this.state.scopes || [];
    const actions = this.state.actions || [];

    return (
      <React.Fragment>
        <PageHeader breadcrumps={ ['Modules', 'Achievements', `${ id ? 'Edit' : 'Create' } achievement`] } />

        <Formik enableReinitialize initialValues={ { ...this.state } } onSubmit={ this.save }>
          {({ values, errors, handleChange, handleBlur, handleSubmit, isSubmitting }) => (

            <React.Fragment>
            <form onSubmit={ handleSubmit } className="achievement-edit">

              <Row>

                <Col sm={ 4 } lg={ 3 }>
                  <div className="card card-figure achievement-preview">
                    <figure className="figure">
                      <img className="img-fluid" src={ values.picture || noImage } alt="" />
                      <figcaption className="figure-caption">
                        <h6 className="figure-title">
                          <textarea name="name" className="form-control-plaintext" maxLength="64" rows="2"
                            placeholder="Type here..."
                            value={ values.name } onChange={ handleChange } onBlur={ handleBlur }
                            ref={ node => { this.previewName = node; } } />
                        </h6>
                      </figcaption>
                    </figure>
                  </div>
                </Col>

                <Col sm={ 8 } lg={ 6 }>
                  <div className="card create-achievement">
                    <h3 className="card-header bg-dark text-white">Enter description</h3>
                    <div className="card-body">
                      <div className="form-group">
                        <label className="col-form-label">Name</label>
                        <input name="name" type="text" className="form-control achievement-input-name"
                          value={ values.name } maxLength="64" onChange={ handleChange } onBlur={ handleBlur }
                          ref={ node => { this.name = node; } } autocomplete="off" />
                      </div>
                      <div className="form-group">
                        <label className="col-form-label">Description (criteria)</label>
                        <textarea name="notes" className="form-control achievement-input-notes" rows="3"
                          value={ values.notes } onChange={ handleChange } onBlur={ handleBlur }></textarea>
                      </div>
                      <div className="form-group">
                        <label className="col-form-label">Image URL</label>
                        <input name="picture" type="text" className="form-control"
                          value={ values.picture } onChange={ handleChange } onBlur={ handleBlur }
                          />
                      </div>
                      
                      <div className="form-group" style={{ display: 'none' }}>
                        <label className="col-form-label">Scope</label>
                        <Field component="div" name="scope" className="achievement-scope-radio">
                          {scopes.map(scope =>
                            <label key={ scope.name } className="d-inline-block">
                              <input value={ scope.id } type="radio" name="scope" defaultChecked={ parseInt(values.scope) === scope.id }
                                className="custom-control-input"/>
                                <span className={ `badge ${ parseInt(values.scope) === scope.id ? 'badge-primary' : 'badge-light'}`}>
                                  { scope.name }
                                </span>
                            </label>
                          )}
                        </Field>

                      </div>
                      <br/>
                      <div className="form-group text-right">
                        <button disabled={ isSubmitting } type="submit" className="btn btn-lg btn-success">Save</button>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col sm={ 12 } lg={ 3 } style={{ display: 'none' }}>
                  <div className="card">
                    <h3 className="card-header bg-dark text-white">Set actions</h3>
                      <ul className="list-group list-group-flush">
                        {actions.map(action =>
                          <li key={ action.name } className="list-group-item">
                            {action.name}
                          </li>
                        )}
                        <li className="list-group-item">
                          <div className="input-group">
                            <input disabled type="text" className="form-control" ref={ node => { this.newActionInput = node; } }/>
                            <div className="input-group-append">
                              <button onClick={ this.handleNewAction } type="button" className="btn btn-primary">Add</button>
                            </div>
                          </div>
                        </li>
                      </ul>

                  </div>
                </Col>

              </Row>

          </form>

            <Row>

              <Col>
                <div className="card achievement-image-select">
                  <h3 className="card-header bg-dark text-white">Add Image</h3>
                  <div className="card-body">
                    <AchievementImage text={ values.name } onImageSet={ this.onImageSet }/>
                  </div>
                </div>
              </Col>

            </Row>
          </React.Fragment>

         )}

        </Formik>

      </React.Fragment>)
  }
}




AchievementEdit.propTypes = {
  match: PropTypes.object
};

export default AchievementEdit;
