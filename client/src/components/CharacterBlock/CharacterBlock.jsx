import React from "react";

function CharacterBlock(props) {
  return (
    <div className="charBlock">
      <p>
        {props.charName} {props.selectedRace} {props.selectedClass}
      </p>
      <hr />
      <p>
        Armor Class:
        <div id="armorClass">
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
      <p>
        Hit Points:{" "}
        <div id="hitPoints">
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
      <p>
        STR:<span>{props.strength}</span> DEX:<span>{props.dexterity}</span>{" "}
        CON:<span>{props.constitution}</span> INT:
        <span>{props.intelligence}</span> WIS:<span>{props.wisdom}</span> CHA:
        <span>{props.charisma}</span>{" "}
      </p>
      <hr />
      <p>
        Saving Throws:{" "}
        <div id="savingThrows">
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
      <p>
        Equipment:
        <div id="equipment">
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
