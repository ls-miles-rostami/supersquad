import React, {Component} from 'react';
import {connect} from 'react-redux';
import {removeCharacterById} from '../actions/index'


class HeroList extends Component {
  render(){
    console.log('this is the heroes props', this.props)
    return (
      <div>
        <h2> Hero Hero squad </h2>
        <ul className='list-group'>
          {
            this.props.heroes.map((hero) => {
              return (
                <li key={hero.id} className='list-group-item'>
                  <div className='list-item'>{hero.name}</div>
                  <div onClick={() => this.props.removeCharacterById(hero.id)} className='list-item right-button'>x</div>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    heroes: state.heroes
  }
}

export default connect(mapStateToProps, {removeCharacterById})(HeroList);
