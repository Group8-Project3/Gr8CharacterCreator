import React from "react";

function CharacterBlock(props) {
  
  
  return (
    <div className="charBlock">
      <p>
        {props.charName} {props.selectedRace} {props.selectedClass}
      </p>
      <hr />
      <p>Armor Class: 10</p>
      <p>Hit Points: {props.selectedClass === "Cleric" ? (
          <span>{8 + (props.constitution < 10 ? 0 : Math.ceil((props.constitution - 10) / 2))}</span>
        ) : props.selectedClass === "Fighter" ? (
          <span>{10 + (props.constitution < 10 ? 0 : Math.ceil((props.constitution - 10) / 2))}</span>
        ) : props.selectedClass === "Paladin" ? (
          <span>{10 + (props.constitution < 10 ? 0 : Math.ceil((props.constitution - 10) / 2))}</span>
        ) : props.selectedClass === "Ranger" ? (
          <span>{10 + (props.constitution < 10 ? 0 : Math.ceil((props.constitution - 10) / 2))}</span>
        ) : props.selectedClass === "Rogue" ? (
          <span>{8 + (props.constitution < 10 ? 0 : Math.ceil((props.constitution - 10) / 2))}</span>
        ) : props.selectedClass === "Sorcerer" ? (
          <span>{6 + (props.constitution < 10 ? 0 : Math.ceil((props.constitution - 10) / 2))}</span>
        ) : (
          <>
          </>)}</p>
      <hr />
      <p>
        STR:<span>{props.strength}</span> DEX:<span>{props.dexterity}</span>{" "}
        CON:<span>{props.constitution}</span> INT:
        <span>{props.intelligence}</span> WIS:<span>{props.wisdom}</span> CHA:
        <span>{props.charisma}</span>{" "}
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
        Equipment:
        {props.selectedClass === "Cleric" ? (
          <span>Chain Mail, Shield, Prayer beads, Mace</span>
        ) : props.selectedClass === "Fighter" ? (
          <span>Chain Mail, Longbow, Arrow x20, Greatsword</span>
        ) : props.selectedClass === "Paladin" ? (
          <span>Chain Mail, Shield, Warhammer</span>
        ) : props.selectedClass === "Ranger" ? (
          <span>Longbow, Arrows x20, Scale Mail, Longsword</span>
        ) : props.selectedClass === "Rogue" ? (
          <span>Leather armor, Dagger, Thieves tools, Shortsword</span>
        ) : props.selectedClass === "Sorcerer" ? (
          <span>Crossbow Light, Dagger, Crossbow bolt x20</span>
        ) : (
          <>
          </>
        )}
      </p>
    </div>
  );
}

export default CharacterBlock;
