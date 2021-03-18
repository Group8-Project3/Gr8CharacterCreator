import React from 'react'
import CharacterCreator from "../../pages/CharacterCreator";

function CharacterBlock(props) {
  return (
    <div className="charBlock">
      <p>Terry {props.selectedRace} {props.selectedClass}</p>
      <hr />
      <p>Armor Class: 10</p>
      <p>Hit Points: 10</p>
      <hr />
      <p>STR: <span>{props.strength}</span> DEX: <span>12</span> CON: <span>12</span> INT: <span>12</span> WIS: <span>12</span> CHA: <span>12</span></p>
      <hr />
      <p>Saving Throws: Str: <span>+2</span>, Con +2</p>
      <p>Skills: <span>Athletics +2, Intimidation +2</span></p>
      <hr />
      <p>Equipment: <span></span></p>

    </div>
  )
}

export default CharacterBlock
