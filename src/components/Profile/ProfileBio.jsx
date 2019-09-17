import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import noAvatar from './../noAvatar.jpg';
import Achievements from './../_modules/Achievements';

const BASE_URL = 'http://localhost:1337';


class ProfileBio extends Component {
  constructor (props) {
    console.log('ProfileBio props', props);
    super(props);
    this.state = {
      scopes: [],
      avatar: null
    };
  }
  componentDidMount() {
    console.log('ProfileBio componentDidMount', this.props);
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
        error => {}
      )
      .catch(err => console.error(err));
  }

  uploadAvatar = (files) => {
    console.log(files);
    const formData = new FormData();
    formData.append('image', files[0]);

    axios.post(`${ BASE_URL }/image/upload`, formData, { 'Content-Type': 'multipart/form-data' })
    .then(response => {
      console.log(response);
      this.setState({ avatar: response.data.url });
      axios
        .patch(`${ BASE_URL }/profile`, { avatar: response.data.url })
        .then(response => { console.log('saved', response); })
      return response;
    })
    .catch(error => {
      console.error(error);
    });
  }


  render() {
    console.log('ProfileBio render', this.props);
  const joinedDate = this.props.user ? new Date(this.props.user.createdAt).toLocaleDateString() : null;
  const avatar = (this.props.user && this.props.user.avatar)
    ? `${BASE_URL}${this.props.user.avatar}` : noAvatar;

  return !this.props.user ? null : (
    <div className="row">
    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
      <div className="card influencer-profile-data">
        <div className="card-body">
          <div className="row">
            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-12">

              <Dropzone onDrop={acceptedFiles => this.uploadAvatar(acceptedFiles)}>
                {({getRootProps, getInputProps}) => (
                  <section>
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <div className="text-center" style={{}}>
                        <div style={{ backgroundImage: `url(${avatar})` }} alt="User Avatar" className="rounded-circle user-avatar user-avatar-xxl"/>
                      </div>
                    </div>
                  </section>
                )}
              </Dropzone>
              
              </div>
              <div className="col-xl-10 col-lg-8 col-md-8 col-sm-8 col-12">
                <div className="user-avatar-info">
                  <div className="m-b-20">
                    <div className="user-avatar-name">
                      <h2 className="mb-1">{ this.props.user.fullName }</h2>
                    </div>
                    {/*<div className="rating-star  d-inline-block">
                      <i className="fa fa-fw fa-star"></i>
                      <i className="fa fa-fw fa-star"></i>
                      <i className="fa fa-fw fa-star"></i>
                      <i className="fa fa-fw fa-star"></i>
                      <i className="fa fa-fw fa-star"></i>
                      <p className="d-inline-block text-dark">14 Reviews </p>
                    </div>*/}
                  </div>
                  {/*<div className="float-right"><a href="#" className="user-avatar-email text-secondary">www.henrybarbara.com</a></div>*/}
                  <div className="user-avatar-address">
                    <p className="border-bottom pb-3">
                      {/*<span className="d-xl-inline-block d-block mb-2"><i className="fa fa-map-marker-alt mr-2 text-primary "></i>4045 Denver AvenueLos Angeles, CA 90017</span>*/}
                      <span className="mb-2 d-xl-inline-block d-block">Joined date: { joinedDate }  </span>
                      {/*<span className=" mb-2 d-xl-inline-block d-block ml-xl-4">Male</span>*/}
                      {/*<span className=" mb-2 d-xl-inline-block d-block ml-xl-4">29 Year Old </span>*/}
                    </p>
                    {/*<div className="mt-3">

                          {this.state.scopes.map(scope =>
                            <a key={ scope.name } href="#" className="badge badge-light mr-1">{ scope.name }</a>
                          )}
                    </div>*/}
                  </div>
                </div>
              </div>
            </div>

<Achievements/>

          </div>
          {/*<div className="border-top user-social-box">
            <div className="user-social-media d-inline-block"><span className="mr-2 twitter-color"> <i className="fab fa-twitter-square"></i></span><span>13,291</span></div>
            <div className="user-social-media d-inline-block"><span className="mr-2  pinterest-color"> <i className="fab fa-pinterest-square"></i></span><span>84,019</span></div>
            <div className="user-social-media d-inline-block"><span className="mr-2 instagram-color"> <i className="fab fa-instagram"></i></span><span>12,300</span></div>
            <div className="user-social-media d-inline-block"><span className="mr-2  facebook-color"> <i className="fab fa-facebook-square "></i></span><span>92,920</span></div>
            <div className="user-social-media d-inline-block "><span className="mr-2 medium-color"> <i className="fab fa-medium"></i></span><span>291</span></div>
            <div className="user-social-media d-inline-block"><span className="mr-2 youtube-color"> <i className="fab fa-youtube"></i></span><span>1291</span></div>
          </div>*/}
        </div>
      </div>
      </div>
    )
  }
}

export default ProfileBio;
