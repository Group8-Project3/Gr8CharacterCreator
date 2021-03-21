import React from "react";

function Skills(props) {
  function diceRoll(ability) {
    let a = [];
    for (let i = 0; i < 4; i++) {
      a[i] = Math.floor(Math.random() * 6) + 1;
      a.push(a[i]);
      a = a.sort((a, b) => a - b);
    }
    const totalDie = a[1] + a[2] + a[3]
    const goodBoiRoll = (totalDie) <= 8 ? "8" : (totalDie)
    switch (ability) {
      case "strength":
        props.setStrength(goodBoiRoll)
        break;
      case "dexterity":
        props.setDexterity(goodBoiRoll);
        break;
      case "constitution":
        props.setConstitution(goodBoiRoll);
        break;
      case "intelligence":
        props.setIntelligence(goodBoiRoll);
        break;
      case "wisdom":
        props.setWisdom(goodBoiRoll);
        break;
      case "charisma":
        props.setCharisma(goodBoiRoll);
        break;
      default:
        props.setDice(goodBoiRoll);
    }
  }
  return (
    <div>
      <div className="charClass">
        <h2>Ability Scores</h2>
        <ul>
          <li>
            Strength
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
              id="strength"
              onClick={() => diceRoll("strength")}
            >
              Submit
              <i className="material-icons right">casino</i>
            </button>
          </li>
          <p>{ props.strength }</p>
          <li>
            Dexterity
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
              id="dexterity"
              onClick={() => diceRoll("dexterity")}
            >
              Submit
              <i className="material-icons right">casino</i>
            </button>
          </li>
          <p>{props.dexterity}</p>
          <li>
            Constition
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
              id="constitution"
              onClick={() => diceRoll("constitution")}
            >
              Submit
              <i className="material-icons right">casino</i>
            </button>
          </li>
          <p>{props.constitution}</p>
          <li>
            Intelligence
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
              id="intelligence"
              onClick={() => diceRoll("intelligence")}
            >
              Submit
              <i className="material-icons right">casino</i>
            </button>
          </li>
          <p>{props.intelligence}</p>
          <li>
            Wisdom
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
              id="wisdom"
              onClick={() => diceRoll("wisdom")}
            >
              Submit
              <i className="material-icons right">casino</i>
            </button>
          </li>
          <p>{props.wisdom}</p>
          <li>
            Charisma
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
              id="charisma"
              onClick={() => diceRoll("charisma")}
            >
              Submit
              <i className="material-icons right">casino</i>
            </button>
          </li>
          <p>{props.charisma}</p>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
