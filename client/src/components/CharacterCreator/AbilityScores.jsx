import React from 'react'
import { useState } from 'react';

function Skills() {
  const [dice, setDice] = useState("");
  const [strength, setStrength] = useState("");
  const [dexterity, setDexterity] = useState("");
  const [constitution, setConstitution] = useState("");
  const [intelligence, setIntelligence] = useState("");
  const [wisdom, setWisdom] = useState("");
  const [charisma, setCharisma] = useState("");
  function diceRoll(ability) {
    let a = [];
    for (let i = 0; i < 4; i++) {
      a[i] = Math.floor(Math.random() * 6) + 1;
      a.push(a[i])
      a = a.sort((a, b) => a - b);
    }
    switch(ability){
     case "strength":
       setStrength(a[1] + a[2] + a[3]);
       break;
      case "dexterity":
        setDexterity(a[1] + a[2] + a[3]);
        break;
      case "constitution":
        setConstitution(a[1] + a[2] + a[3]);
        break;
      case "intelligence":
        setIntelligence(a[1] + a[2] + a[3]);
        break;
      case "wisdom":
        setWisdom(a[1] + a[2] + a[3]);
        break;
      case "charisma":
        setCharisma(a[1] + a[2] + a[3]);
        break;
        default:
          setDice(a[1] + a[2] + a[3]);
    } 
  }
  return (
    <div>
      <div className="charClass">
        <h2>Ability Scores</h2>
        <ul>
          <li>Strength
            <button className="btn waves-effect waves-light" type="submit" name="action" id="strength" onClick={() => diceRoll("strength")}>Submit
            <i className="material-icons right">casino</i>
            </button>
          </li>
          <p>{ strength }</p>
          <li>Dexterity
          <button className="btn waves-effect waves-light" type="submit" name="action" id="dexterity" onClick={() => diceRoll("dexterity")}>Submit
            <i className="material-icons right">casino</i>
            </button>
          </li>
          <p>{ dexterity }</p>
          <li>Constition
          <button className="btn waves-effect waves-light" type="submit" name="action" id="constitution" onClick={() => diceRoll("constitution")}>Submit
            <i className="material-icons right">casino</i>
            </button>
          </li>
          <p>{ constitution }</p>
          <li>Intelligence
          <button className="btn waves-effect waves-light" type="submit" name="action" id="intelligence" onClick={() => diceRoll("intelligence")}>Submit
            <i className="material-icons right">casino</i>
            </button>
          </li>
          <p>{ intelligence }</p>
          <li>Wisdom
          <button className="btn waves-effect waves-light" type="submit" name="action" id="wisdom" onClick={() => diceRoll("wisdom")}>Submit
            <i className="material-icons right">casino</i>
            </button>
          </li>
          <p>{ wisdom }</p>
          <li>Charisma
          <button className="btn waves-effect waves-light" type="submit" name="action" id="charisma" onClick={() => diceRoll("charisma")}>Submit
            <i className="material-icons right">casino</i>
            </button>
          </li>
          <p>{ charisma }</p>
        </ul>
      </div>
    </div>
  )
}

export default Skills
