import React from 'react';
import PageHeader from './../PageHeader';
import ModulesList from './list';
import './modules.css';

const items = [{
  title: 'Achievements',
  subtitle: 'Достижения',
  description: 'Задавать цели и отслеживать их достижение',
  isActive: true
}, {
  title: 'Actions',
  subtitle: 'Действия',
  description: 'Разделять абстрактные цели на конкретные небольшие действия',
  isActive: true
}, {
  title: 'Scopes',
  subtitle: 'Направления',
  description: 'Группировать цели и действия по направлениям и соблюдать баланс между ними',
  isActive: false
}, {
  title: 'Priorities',
  subtitle: 'Матрица приоритетов',
  description: 'Разделять важные/неважные и срочные/несрочные действия',
  isActive: false
}, {
  title: 'Streaks',
  subtitle: 'Привычки',
  description: 'Отслеживать регулярные действия, а также ставить цели, требующие таковых',
  isActive: false
}, {
  title: 'Timeline',
  subtitle: 'Планирование',
  description: 'Распределять цели и действия по времени',
  isActive: false
}, {
  title: 'Finance',
  subtitle: 'Финансовый план',
  description: 'Привязывать денежные затраты к целям и действиям и планировать бюджет',
  isActive: false
}, {
  title: 'Wishlist',
  subtitle: 'Список желаний',
  description: 'Отделять достижения, требующие исключительно денежных затрат',
  isActive: false
}, {
  title: 'Team',
  subtitle: 'Семья и друзья',
  description: 'Объединять цели и действия между пользователями',
  isActive: false
}];

class Modules extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: true, //null,
      items: []
    };
  }

  componentDidMount () {
    fetch('http://localhost:1337/achievements/')
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          this.setState({
            isLoaded: true,
            items: result
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
    return (
      <React.Fragment>
        <PageHeader breadcrumps={ ['Modules'] } />

        {this.state.isLoaded === false ? 
          <div className="alert alert-danger" role="alert">
            Cannot load modules info
          </div>
          :
          <div>
            To be done
          </div>
        }
      </React.Fragment>
    );
  }
}

/*<ModulesList items={ items || this.state.items } />*/

export default Modules;
