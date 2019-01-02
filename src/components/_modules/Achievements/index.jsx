import React, { Component } from 'react';
import PageHeader from './../../PageHeader';
import './achievements.css';

class Achievements extends Component {
  render() {
    return [
      <PageHeader breadcrumps={ [ 'Modules', 'Achievements' ] } />,

      <div className="row">
        {/*
      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
        <div className="card card-figure">
          <figure className="figure">
            <img className="img-fluid" src="https://farm5.staticflickr.com/4171/34451722141_84da59cfe6_m.jpg" alt="Card image cap" />
            <figcaption className="figure-caption">
              <h6 className="figure-title"> Записать альбом </h6>
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
        <div className="card card-figure">
          <figure className="figure">
            <img className="img-fluid" src="https://farm5.staticflickr.com/4281/35461660216_a3f4884b61_m.jpg" alt="Card image cap" />
            <figcaption className="figure-caption">
              <h6 className="figure-title"> Посетить Исландию </h6>
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
        <div className="card card-figure">
          <figure className="figure">
            <img className="img-fluid" src="https://c1.staticflickr.com/4/3799/8918367978_b516597e46_n.jpg" alt="Card image cap" />
            <figcaption className="figure-caption">
              <h6 className="figure-title"> Получить водные права </h6>
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
        <div className="card card-figure">
          <figure className="figure">
            <img className="img-fluid" src="https://c1.staticflickr.com/4/3799/8918367978_b516597e46_n.jpg" alt="Card image cap" />
            <figcaption className="figure-caption">
              <h6 className="figure-title"> Удвоить рейтинг на stackoverflow </h6>
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
        <div className="card card-figure">
          <figure className="figure">
            <img className="img-fluid" src="https://c1.staticflickr.com/4/3799/8918367978_b516597e46_n.jpg" alt="Card image cap" />
            <figcaption className="figure-caption">
              <h6 className="figure-title"> Освоить фристайл на борде </h6>
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
        <div className="card card-figure">
          <figure className="figure">
            <img className="img-fluid" src="https://c1.staticflickr.com/4/3799/8918367978_b516597e46_n.jpg" alt="Card image cap" />
            <figcaption className="figure-caption">
              <h6 className="figure-title"> Написать serverless/lambda приложение</h6>
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
        <div className="card card-figure">
          <figure className="figure">
            <img className="img-fluid" src="https://c1.staticflickr.com/4/3799/8918367978_b516597e46_n.jpg" alt="Card image cap" />
            <figcaption className="figure-caption">
              <h6 className="figure-title"> Написать приложение на блокчейне </h6>
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
        <div className="card card-figure">
          <figure className="figure">
            <img className="img-fluid" src="https://c1.staticflickr.com/4/3799/8918367978_b516597e46_n.jpg" alt="Card image cap" />
            <figcaption className="figure-caption">
              <h6 className="figure-title"> Выиграть хакатон </h6>
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
        <div className="card card-figure">
          <figure className="figure">
            <img className="img-fluid" src="https://c1.staticflickr.com/4/3799/8918367978_b516597e46_n.jpg" alt="Card image cap" />
            <figcaption className="figure-caption">
              <h6 className="figure-title"> Сертифицироваться по комп. безопасности </h6>
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
        <div className="card card-figure">
          <figure className="figure">
            <img className="img-fluid" src="https://c1.staticflickr.com/4/3799/8918367978_b516597e46_n.jpg" alt="Card image cap" />
            <figcaption className="figure-caption">
              <h6 className="figure-title"> IoT </h6>
            </figcaption>
          </figure>
        </div>
      </div>*/}

        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
          <div className="card card-figure card-add">
            <figure className="figure">
              <div className="card-add-image">
                <img className="img-fluid" 
                              src="https://c1.staticflickr.com/4/3799/8918367978_b516597e46_n.jpg" alt=""/></div>
              <figcaption className="figure-caption">
                <a href="/achievement/add" className="btn btn-primary">Add</a>
              </figcaption>
            </figure>
          </div>
        </div>

      </div> ];
  }
}

export default Achievements;
