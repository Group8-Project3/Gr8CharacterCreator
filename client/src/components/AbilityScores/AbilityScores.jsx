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
        <h2 className="title">Ability Scores</h2>
        <ul className="textScore">
          <li>
            Strength&nbsp;&nbsp;
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
              id="strength"
              onClick={() => diceRoll("strength")}
            >
              Roll
              <i className="material-icons right">casino</i>
            </button>
          </li>
          <p>{ props.strength }</p>
          <li>
            Dexterity&nbsp;&nbsp;
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
              id="dexterity"
              onClick={() => diceRoll("dexterity")}
            >
              Roll
              <i className="material-icons right">casino</i>
            </button>
          </li>
          <p>{props.dexterity}</p>
          <li>
            Constitution&nbsp;&nbsp;
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
              id="constitution"
              onClick={() => diceRoll("constitution")}
            >
              Roll
              <i className="material-icons right">casino</i>
            </button>
          </li>
          <p>{props.constitution}</p>
          <li>
            Intelligence&nbsp;&nbsp;
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
              id="intelligence"
              onClick={() => diceRoll("intelligence")}
            >
              Roll
              <i className="material-icons right">casino</i>
            </button>
          </li>
          <p>{props.intelligence}</p>
          <li>
            Wisdom&nbsp;&nbsp;
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
              id="wisdom"
              onClick={() => diceRoll("wisdom")}
            >
              Roll
              <i className="material-icons right">casino</i>
            </button>
          </li>
          <p>{props.wisdom}</p>
          <li>
            Charisma&nbsp;&nbsp;
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
              id="charisma"
              onClick={() => diceRoll("charisma")}
            >
              Roll
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
