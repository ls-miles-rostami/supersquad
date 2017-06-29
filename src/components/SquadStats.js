import React, {Component} from 'react';
import {connect} from 'react-redux';

class SquadStats extends Component{
  strength(){
    let strength = 0;
    this.props.heroes.forEach(hero => strength += hero.strength)
      return strength
  }


  intelligence() {
    let intelligence = 0;
    this.props.heroes.forEach(hero => intelligence += hero.intelligence);
      return intelligence;
    }

  speed() {
    let speed = 0;
    this.props.heroes.forEach(hero => speed += hero.speed);
      return speed;
  }

  render(){
    return (
      <di>
        <h2> Squad Stats</h2>
          <ul className='list-group'>
            <li className='list-group-item'>
              <b>Overall Strength:{this.strength()}</b>
            </li>
            <li className='list-group-item'>
              <b>Overall intelligence:{this.intelligence()}</b>
            </li>
            <li className='list-group-item'>
              <b>Overall speed:{this.speed()}</b>
            </li>
          </ul>
      </di>
    )
  }
}

function mapStateToProps(state){
  return {
    heroes: state.heroes
  }
}

export default connect(mapStateToProps)(SquadStats)
