import React, {Component} from 'react';
import CharacterList from './CharacterList'
import HeroList from './HeroList'
import SquadStats from './SquadStats'
import '../styles/index.css'


class App extends Component {
  render() {
    return (
      <div className='App'>
        <h2>Super squad</h2>
        <div className='col-md-4'>
          <CharacterList />
        </div>
        <div className='col-md-4'>
          <HeroList />
        </div>
        <di className='col-md-4'>
          <SquadStats />
        </di>
      </div>
    )
  }
}

export default App
