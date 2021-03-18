import React from "react";

function CharacterBlock(props) {
  
  
  return (
    <div className="charBlock">
      <p>
        { props.charName } {props.selectedRace} {props.selectedClass}
      </p>
      <hr />
      <p>Armor Class: 10</p>
      <p>Hit Points: 10</p>
      <hr />
      <p>
        STR:<span>{props.strength}</span>{" "} 
        DEX:<span>{props.dexterity}</span>{" "} 
        CON:<span>{props.constitution}</span>{" "}
        INT:<span>{props.intelligence}</span>{" "}
        WIS:<span>{props.wisdom}</span>{" "} 
        CHA:<span>{props.charisma}</span>{" "} 
      </p>
      <hr />
      <p>
        Saving Throws: Str: <span>+2</span>, Con +2
      </p>
      <p>
        Skills: <span>Athletics +2, Intimidation +2</span>
      </p>
      <hr />
      <p>
        Equipment: <span>{props.equipment}</span>
      </p>
    </div>
  );
}

export default CharacterBlock;
