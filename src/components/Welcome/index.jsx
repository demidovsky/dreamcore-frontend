import React, { Fragment } from 'react';
import intro1 from './dreamcore_intro/1.jpeg';
import intro2 from './dreamcore_intro/2.jpeg';
import intro3 from './dreamcore_intro/3.jpeg';
import intro4 from './dreamcore_intro/4.jpeg';

const Welcome = () => (
  <div>
    <h2>Привет! Это&nbsp;Dreamcore, версия&nbsp;0.1</h2>
    <p className="lead">
      Что тут сейчас можно делать?
    </p>
    <div className="row">

      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title mb-2">1. Придумывать цели</h3>
            <p className="card-text">
              Или, точнее, <b>ачивменты</b>.
            </p>
            <p className="card-text">
              За долгую историю компьютерных игр устоялось понятие ачивмента,
              как <b>цели,</b> обычно <b>не являющейся необходимой</b> или
              критической, <b>однако интересной</b> или приятной для выполнения.
            </p>
            {/*<p>
              Ачивменты &mdash; это способ принести геймификацию в реальную жизнь.
            </p>*/}
            {/*<p className="text-muted">Last updated 3 mins ago</p>*/}
          </div>
          <img className="img-fluid" src={ intro1 } alt="Card image cap"/>
        </div>
      </div>

      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title mb-2">2. Задавать им названия</h3>
            <p className="card-text">
              Ну ничего себе, да? Но вообще-то они используются, например, при подборе визуализации.
            </p>
            <p className="card-text">
              Лучше всего использовать короткие титулы, отвечающие на вопрос
              &nbsp;<b>&quot;Кто ты, когда заработаешь этот ачивмент?&quot;</b>&nbsp;
              Например, &quot;Coffee Drinker&quot; или &quot;Marathon Runner&quot;. <i> Иначе&hellip;</i>
            </p>
            {/*<p className="text-muted">Last updated 3 mins ago</p>*/}
          </div>
          <img className="img-fluid" src={ intro2 } alt="Card image cap"/>
        </div>
      </div>

      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title mb-2">3. Визуализировать их </h3>
            <p className="card-text">
              &hellip;иначе FLickr умеет доставлять за счет картинок, подходящих к цели чуть менее, чем никак.
              Если серьезно, <b>можно загрузить ещё вариантов, либо поменять ключевые слова</b>.
            </p>
            <p>
              Конечно же, можно присвоить цели картинку из файла или просто по ссылке, но это не так весело.
            </p>
            {/*<p>
              Ачивменты &mdash; это способ принести геймификацию в реальную жизнь.
            </p>*/}
            {/*<p className="text-muted">Last updated 3 mins ago</p>*/}
          </div>
          <img className="img-fluid" src={ intro3 } alt="Card image cap"/>
        </div>
      </div>

      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title mb-2">Готово!</h3>
            <p className="card-text">
              <b>Сохрани</b> ачивмент и создавай следующий!
            </p>
            <p className="card-text">
              Изначально <b>твои ачивменты видны только тебе</b>.
              Впоследствии можно будет выбрать, какие из них сделать доступными для друзей.
            </p>
            <a href="/app/achievements" className="btn btn-primary">Круто, погнали!</a>
            {/*<p className="text-muted">Last updated 3 mins ago</p>*/}
          </div>
          <img className="img-fluid" src={ intro4 } alt="Card image cap"/>
        </div>
      </div>

    </div>

  </div>
);

export default Welcome;
