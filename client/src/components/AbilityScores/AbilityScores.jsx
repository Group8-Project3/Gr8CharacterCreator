import React from 'react'

function Skills(props) {
  function diceRoll(ability) {
    console.log(ability)
    let a = [];
    for (let i = 0; i < 4; i++) {
      a[i] = Math.floor(Math.random() * 6) + 1;
      a.push(a[i])
      a = a.sort((a, b) => a - b);
    }
    switch(ability){
     case "strength":
       props.setStrength(a[1] + a[2] + a[3]);
       break;
      case "dexterity":
        props.setDexterity(a[1] + a[2] + a[3]);
        break;
      case "constitution":
        props.setConstitution(a[1] + a[2] + a[3]);
        break;
      case "intelligence":
        props.setIntelligence(a[1] + a[2] + a[3]);
        break;
      case "wisdom":
        props.setWisdom(a[1] + a[2] + a[3]);
        break;
      case "charisma":
        props.setCharisma(a[1] + a[2] + a[3]);
        break;
        default:
        props.setDice(a[1] + a[2] + a[3]);
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
          <p>{ props.strength }</p>
          <li>Dexterity
          <button className="btn waves-effect waves-light" type="submit" name="action" id="dexterity" onClick={() => diceRoll("dexterity")}>Submit
            <i className="material-icons right">casino</i>
            </button>
          </li>
          <p>{ props.dexterity }</p>
          <li>Constition
          <button className="btn waves-effect waves-light" type="submit" name="action" id="constitution" onClick={() => diceRoll("constitution")}>Submit
            <i className="material-icons right">casino</i>
            </button>
          </li>
          <p>{ props.constitution }</p>
          <li>Intelligence
          <button className="btn waves-effect waves-light" type="submit" name="action" id="intelligence" onClick={() => diceRoll("intelligence")}>Submit
            <i className="material-icons right">casino</i>
            </button>
          </li>
          <p>{ props.intelligence }</p>
          <li>Wisdom
          <button className="btn waves-effect waves-light" type="submit" name="action" id="wisdom" onClick={() => diceRoll("wisdom")}>Submit
            <i className="material-icons right">casino</i>
            </button>
          </li>
          <p>{ props.wisdom }</p>
          <li>Charisma
          <button className="btn waves-effect waves-light" type="submit" name="action" id="charisma" onClick={() => diceRoll("charisma")}>Submit
            <i className="material-icons right">casino</i>
            </button>
          </li>
          <p>{ props.charisma }</p>
        </ul>
      </div>
    </div>
  )
}

export default Skills
