import React from 'react'
import { useState } from 'react';

function Skills() {
  const [dice, setDice] = useState("");
  function diceRoll() {
    let a = [];
    for (let i = 0; i < 4; i++) {
      a[i] = Math.floor(Math.random() * 6) + 1;
      a.push(a[i])
      a = a.sort((a, b) => a - b);
    }
    setDice(a[1] + a[2] + a[3]);
  }
  return (
    <div>
      <div className="charClass">
        <h2>Ability Scores</h2>
        <ul>
          <li>Strength
            <button className="btn waves-effect waves-light" type="submit" name="action" onClick={() => diceRoll()}>Submit
            <i className="material-icons right">casino</i>
            </button>
          </li>
          <p>{ dice }</p>
          <li>Dexterity
          <button className="btn waves-effect waves-light" type="submit" name="action" onClick={() => diceRoll()}>Submit
            <i className="material-icons right">casino</i>
            </button>
          </li>
          <p>{ dice }</p>
          <li>Constition
          <button className="btn waves-effect waves-light" type="submit" name="action" onClick={() => diceRoll()}>Submit
            <i className="material-icons right">casino</i>
            </button>
          </li>
          <p>{ dice }</p>
          <li>Intelligence
          <button className="btn waves-effect waves-light" type="submit" name="action" onClick={() => diceRoll()}>Submit
            <i className="material-icons right">casino</i>
            </button>
          </li>
          <p>{ dice }</p>
          <li>Wisdom
          <button className="btn waves-effect waves-light" type="submit" name="action" onClick={() => diceRoll()}>Submit
            <i className="material-icons right">casino</i>
            </button>
          </li>
          <p>{ dice }</p>
          <li>Charisma
          <button className="btn waves-effect waves-light" type="submit" name="action" onClick={() => diceRoll()}>Submit
            <i className="material-icons right">casino</i>
            </button>
          </li>
          <p>{ dice }</p>
        </ul>
      </div>
    </div>
  )
}

export default Skills
