import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import AbilityScores from "../components/AbilityScores/AbilityScores";
import AttributeList from "../components/AttributeList/AttributeList";
import CharacterBlock from "../components/CharacterBlock/CharacterBlock";
import Skills from "../components/AbilityScores/AbilityScores";
import axios from "axios";


function CharacterCreator() {
  const [skills, setSkills] = useState([]);
  const [dndClass, setDndClass] = useState();
  const [race, setRace] = useState();
 

  

 
  const classes = [
    "Cleric",
    "Fighter",
    "Paladin",
    "Ranger",
    "Rogue",
    "Sorcerer",
  ];
  const skillsList = [
    "Acrobatics",
    "Animal",
    "Arcana",
    "Athletics",
    "Deception",
    "History",
    "Insight",
    "Intimidation",
    "Investigation",
    "Medicine",
    "Nature",
    "Perception",
    "Performance",
    "Persuasion",
    "Religion",
    "Sleight",
    "History",
    "Stealth",
    "Survival",
  ];
  const raceList = ["Human", "Elf", "Dwarf", "Half", "Gnome"];
  console.log(skills, race)
  return (
    <>
      <Navbar />
      <CharacterBlock />
      <AttributeList attributeList={ classes } setAttribute={ setDndClass } title="Classes" />
      <AttributeList attributeList={ raceList } setAttribute={ setRace } title="Race" />
      <AbilityScores />
      <AttributeList attributeList={ skillsList } setAttribute={ setSkills } checkbox={ true } title="Skills" />
    </>
  );
}

export default CharacterCreator;
