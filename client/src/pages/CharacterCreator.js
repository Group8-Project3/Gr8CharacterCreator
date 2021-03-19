import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import AbilityScores from "../components/AbilityScores/AbilityScores";
import AttributeList from "../components/AttributeList/AttributeList";
import CharacterBlock from "../components/CharacterBlock/CharacterBlock";
import CharacterName from "../components/CharacterName/CharacterName";

function CharacterCreator() {
  const [skills, setSkills] = useState([]);
  const [dndClass, setDndClass] = useState("Fighter");
  const [race, setRace] = useState("Human");
  const [dice, setDice] = useState("");
  const [strength, setStrength] = useState("18");
  const [dexterity, setDexterity] = useState("18");
  const [constitution, setConstitution] = useState("18");
  const [intelligence, setIntelligence] = useState("18");
  const [wisdom, setWisdom] = useState("18");
  const [charisma, setCharisma] = useState("18");
  const [charName, setCharName] = useState("J'DINKALAGE MORGOONE");

  const classes = [
    "Cleric",
    "Fighter",
    "Paladin",
    "Ranger",
    "Rogue",
    "Sorcerer",
  ];

  const raceList = ["Human", "Elf", "Dwarf", "Halfling", "Gnome", "Dragonborn"];
  return (
    <>
      <Navbar />
      <CharacterName setCharName={ setCharName }/>
      <CharacterBlock
        attributeList={ classes }
        selectedClass={ dndClass }
        selectedRace={ race }
        strength={ strength }
        dexterity={ dexterity }
        constitution={ constitution }
        intelligence={ intelligence }
        wisdom={ wisdom }
        charisma={ charisma }
        charName={ charName }
      />
      <AttributeList
        attributeList={ classes}
        setAttribute={ setDndClass }
        title="Classes"
      />
      <AttributeList
        attributeList={ raceList }
        setAttribute={ setRace }
        title="Race"
      />
      <AbilityScores
        setStrength={ setStrength }
        setDexterity={ setDexterity }
        setConstitution={ setConstitution }
        setIntelligence={ setIntelligence }
        setDice={ setDice }
        setWisdom={setWisdom}
        setCharisma={setCharisma}
        strength={ strength }
        dexterity={ dexterity }
        constitution={ constitution }
        intelligence={ intelligence }
        wisdom={ wisdom }
        charisma={ charisma }
        />
    </>
  );
}

export default CharacterCreator;
