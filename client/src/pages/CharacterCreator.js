import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import AbilityScores from "../components/AbilityScores/AbilityScores";
import AttributeList from "../components/AttributeList/AttributeList";
import CharacterBlock from "../components/CharacterBlock/CharacterBlock";
import CharacterName from "../components/CharacterName/CharacterName";
import Skills from "../components/Skills/Skills";
import axios from "axios";

function CharacterCreator() {
  const [skills, setSkills] = useState([]);
  const [dndClass, setDndClass] = useState();
  const [race, setRace] = useState();
  const [dice, setDice] = useState("");
  const [strength, setStrength] = useState("");
  const [dexterity, setDexterity] = useState("");
  const [constitution, setConstitution] = useState("");
  const [intelligence, setIntelligence] = useState("");
  const [wisdom, setWisdom] = useState("");
  const [charisma, setCharisma] = useState("");
  const [charName, setCharName] = useState("");
  const [equipment, getEquipment] = useState("");
  

  const classes = [
    "Cleric",
    "Fighter",
    "Paladin",
    "Ranger",
    "Rogue",
    "Sorcerer",
  ];

  const raceList = ["Human", "Elf", "Dwarf", "Half", "Gnome"];
  return (
    <>
      <Navbar />
      <CharacterName setCharName={ setCharName }/>
      <CharacterBlock
        attributeList={classes}
        selectedClass={dndClass}
        selectedRace={race}
        strength={ strength }
        dexterity={ dexterity }
        constitution={ constitution }
        intelligence={ intelligence }
        wisdom={ wisdom }
        charisma={ charisma }
        charName={ charName }
        equipment={ equipment }
      />
      <AttributeList
        attributeList={classes}
        setAttribute={setDndClass}
        title="Classes"
      />
      <AttributeList
        attributeList={raceList}
        setAttribute={setRace}
        title="Race"
      />
      <AbilityScores
        setStrength={setStrength}
        setDexterity={setDexterity}
        setConstitution={setConstitution}
        setIntelligence={setIntelligence}
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
      <Skills />
    </>
  );
}

export default CharacterCreator;
