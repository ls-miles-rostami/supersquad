import characters_json from '../data/characters.json';


export function createCharacter(id){
  // the find() method returns the value of the FIRST element in the array that satisfies the provided testing function, meaning if there were 2 or more,
  // it will only return the first one that satisfies the provided testing.
  let character = characters_json.find(chara => chara.id === id)
  return character
}
