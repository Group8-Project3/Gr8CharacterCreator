import React from "react";

function CharacterName(props, event) {
  console.log(event.value)
  return (
    <div className="charName name">
      <p className="textPage">Character Name:</p>
      <input onChange={event => props.setCharName(event.target.value)} className="text" type="input"/>
      
    </div>
  );
}

export default CharacterName;
