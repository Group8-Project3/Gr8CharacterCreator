import React, { Component } from "react";
import axios from "axios";

class List extends Component {
  state = {
    chars: [],
  };

  componentDidMount = () => {
    this.getChars();
  };

  //   displayChars = (chars) => {
  //       console.log("starting to display");
  //     //if (!chars.length) return null;

  //     return (chars.map((char,index) => {
  //         console.log("mapping data");
  //         console.log(char.name);
  //       <div key={index} >
  //           <h1>hello!</h1>
  //         <h3>{char.name}</h3>
  //             <p className="textPage">

  //                 {char.name} {char.race} {char.class}
  //             </p>
  //             <hr />
  //             <p className="textPage">
  //                 Armor Class: {char.armor}

  //             </p>
  //             <p className="textPage">
  //                 Hit Points:{char.HP}

  //             </p>
  //             <hr />
  //             <p className="textPage">
  //                 STR:{char.strength} DEX: {char.dexterity}
  //                 CON: {char.constitution} INT: {char.intelligence}
  //                 WIS: {char.wisdom} CHA: {char.charisma}
  //             </p>
  //             <hr />
  //             <p className="textPage">
  //                 Equipment: {char.equipment}

  //             </p>

  //       </div>
  //     }));

  //   }
  getChars = () => {
    axios
      .get("/api/character")
      .then((res) => {
        console.log(res);
        const data = res.data;
        this.setState({ chars: data });
        // for(let i=0; i< char.length; i++){
        //   console.log(char[i].name);
        //   const name = char[i].name;

        // }
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
      });
  };

  render() {
    console.log("State: ", this.state);
    return (
      <div>
        {this.state.chars.map(char => {
            return(
          <div key={char._id} className="listBlock">
            <p className="textPage">
              {char.name} {char.race} {char.class}
            </p>
            <hr />
            <p className="textPage">Hit Points:{char.HP}</p>
            <p className="textPage">Armor Class: {char.armor}</p>
            <hr />
            <p className="textPage">
              STR:<span>{char.strength} &nbsp;&nbsp;</span> DEX: <span>{char.dexterity} &nbsp;&nbsp;</span>
              CON:<span>{char.constitution} &nbsp;&nbsp;</span> INT: <span>{char.intelligence} &nbsp;&nbsp;</span>
              WIS:<span>{char.wisdom} &nbsp;&nbsp;</span> CHA: <span>{char.charisma} &nbsp;&nbsp;</span>
            </p>
            <hr />
            <p className="textPage">Saving Throws: {char.savingThrows}</p>
            <hr />
            <p className="textPage">Equipment: {char.equipment}</p>
          </div>);
        })}
      </div>
    );
  }
}

export default List;
