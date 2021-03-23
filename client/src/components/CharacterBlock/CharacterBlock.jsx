import React from "react";

function CharacterBlock(props) {
  return (
    <div className="charBlock">
      <p className="textPage">
        {props.charName} {props.selectedRace} {props.selectedClass}
      </p>
      <hr />
      <p className="textPage">
        Armor Class:
        <div id="armorClass" className="textPage">
          {props.selectedClass === "Cleric" ? (
            11 + Math.ceil((props.dexterity - 10) / 2)
          ) : props.selectedClass === "Fighter" ? (
            11 + Math.ceil((props.dexterity - 10) / 2)
          ) : props.selectedClass === "Paladin" ? (
            11 + Math.ceil((props.dexterity - 10) / 2)
          ) : props.selectedClass === "Ranger" ? (
            11 + Math.ceil((props.dexterity - 10) / 2)
          ) : props.selectedClass === "Rogue" ? (
            11 + Math.ceil((props.dexterity - 10) / 2)
          ) : props.selectedClass === "Sorcerer" ? (
            11 + Math.ceil((props.dexterity - 10) / 2)
          ) : (
            <></>
          )}
        </div>
      </p>
      <p className="textPage">
        Hit Points:{" "}
        <div id="hitPoints" className="textPage">
          {props.selectedClass === "Cleric" ? (
            <>
              {8 +
                (props.constitution < 10
                  ? 0
                  : Math.ceil((props.constitution - 10) / 2))}
            </>
          ) : props.selectedClass === "Fighter" ? (
            <>
              {10 +
                (props.constitution < 10
                  ? 0
                  : Math.ceil((props.constitution - 10) / 2))}
            </>
          ) : props.selectedClass === "Paladin" ? (
            <>
              {10 +
                (props.constitution < 10
                  ? 0
                  : Math.ceil((props.constitution - 10) / 2))}
            </>
          ) : props.selectedClass === "Ranger" ? (
            <>
              {10 +
                (props.constitution < 10
                  ? 0
                  : Math.ceil((props.constitution - 10) / 2))}
            </>
          ) : props.selectedClass === "Rogue" ? (
            <>
              {8 +
                (props.constitution < 10
                  ? 0
                  : Math.ceil((props.constitution - 10) / 2))}
            </>
          ) : props.selectedClass === "Sorcerer" ? (
            <>
              {6 +
                (props.constitution < 10
                  ? 0
                  : Math.ceil((props.constitution - 10) / 2))}
            </>
          ) : (
            <></>
          )}
        </div>
      </p>
      <hr />
      <p className="textPage">
        STR:<span>{props.strength}&nbsp;&nbsp;</span> DEX:<span>{props.dexterity}&nbsp;&nbsp;</span>{" "}
        CON:<span>{props.constitution}&nbsp;&nbsp;</span> INT:
        <span>{props.intelligence}&nbsp;&nbsp;</span> WIS:<span>{props.wisdom}&nbsp;&nbsp;</span> CHA:
        <span>{props.charisma}&nbsp;&nbsp;</span>{" "}
      </p>
      <hr />
      <p className="textPage">
        Saving Throws:{" "}
        <div className="textPage" id="savingThrows">
          {props.selectedRace === "Human" ? (
            "STR +1, DEX +1, CON +1, INT +1, WIS +1, CHA +1"
          ) : props.selectedRace === "Elf" ? (
            "DEX +2"
          ) : props.selectedRace === "Dwarf" ? (
            "CON +2"
          ) : props.selectedRace === "Halfling" ? (
            "DEX +2"
          ) : props.selectedRace === "Gnome" ? (
            "INT +2"
          ) : props.selectedRace === "Dragonborn" ? (
            "STR +2, CHA +1"
          ) : (
            <></>
          )}
        </div>
      </p>
      <hr />
      <p className="textPage">
        Equipment:
        <div className="textPage" id="equipment">
          {props.selectedClass === "Cleric" ? (
            "Chain Mail, Shield, Prayer beads, Mace"
          ) : props.selectedClass === "Fighter" ? (
            "Chain Mail, Longbow, Arrow x20, Greatsword"
          ) : props.selectedClass === "Paladin" ? (
            "Chain Mail, Shield, Warhammer"
          ) : props.selectedClass === "Ranger" ? (
            "Leather armor, Longbow, Arrows x20, Scale Mail, Longsword"
          ) : props.selectedClass === "Rogue" ? (
            "Leather armor, Dagger, Thieves tools, Shortsword"
          ) : props.selectedClass === "Sorcerer" ? (
            "Crossbow Light, Dagger, Crossbow bolt x20"
          ) : (
            <></>
          )}
        </div>
      </p>
    </div>
  );
}

export default CharacterBlock;
