import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import {addCharacterById} from '../actions'


class CharacterList extends Component {
  render(){
    console.log(this.props)
    return (
      <div>
        <h2>Character List</h2>
        <ul className='list-group'>
          {
            this.props.characters.map(character => {
              return (
                <li key={character.id} className='list-group-item'>
                  <div className='list-item'>
                    {character.name}
                  </div>
                  <div onClick={() => this.props.addCharacterById(character.id)} className='list-item right-button'>+</div>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

//long way of doing the mapDispatchToProps and bindActionCreators
// function mapDispatchToProps(dispatch){
//   //now our action we created can be use through props.
//   return bindActionCreators({addCharacterById}, dispatch)
// }
// export default connect(mapStateToProps,mapDispatchToProps)(CharacterList)


function mapStateToProps(state){
  //now we have access to our state
  return {
    characters: state.characters
  }
}


//Shortcut way of doing the mapDispatchToProps and bindActionCreators
export default connect(mapStateToProps,{addCharacterById})(CharacterList)
