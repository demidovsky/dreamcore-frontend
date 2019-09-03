import React, { Fragment } from 'react';
import achievements_screenshot from './achievements_screenshot.jpg';
import friends_screenshot from './friends_screenshot.jpg';

const Welcome = () => (
  <Fragment>
    <h2>Привет! Это альфа-версия Dreamcore</h2>
    <p className="lead">
      Что тут сейчас можно делать?
    </p>
    <div className="row">

      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title mb-2">Создавать и выполнять ачивменты</h3>
            <p className="card-text">
              От (англ.) <i>achievement</i> &mdash; "достижение"; термин, уже устоявшийся
              за долгую историю компьютерных игр.
            </p>
            <p>
              Это некая цель, как правило, не являющаяся необходимой или критической, однако интересная или приятная для выполнения.
            </p>
            {/*<p>
              Ачивменты &mdash; это способ принести геймификацию в реальную жизнь.
            </p>*/}
            <a href="/app/achievements" className="btn btn-primary">Перейти к модулю Achievements</a>
            {/*<p className="text-muted">Last updated 3 mins ago</p>*/}
          </div>
          <img className="img-fluid" src={ achievements_screenshot } alt="Card image cap"/>
        </div>
      </div>

      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title mb-2">Добавлять друзей и делиться с ними</h3>
            <p className="card-text">
              Так можно найти общие мечты, о которых вы даже не догадывались!
              И вместе приступить к их реализации. 
            </p>
            <p className="card-text">
              Изначально ваши ачивменты видны только вам.
              Вы самостоятельно выбираете, какие из них сделать доступными для друзей.
            </p>
            <a href="/app/friends" className="btn btn-primary">Перейти к модулю Friends</a>
            {/*<p className="text-muted">Last updated 3 mins ago</p>*/}
          </div>
          <img className="img-fluid" src={ friends_screenshot } alt="Card image cap"/>
        </div>
      </div>

    </div>

  </Fragment>
);

export default Welcome;
