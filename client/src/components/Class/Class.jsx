import React, { Component } from "react";

class Class extends Component {
    state = {
        value: "fighter"
    };

    onChange = e => {
        this.setState({value : e.target.value});
    }


    render(){
        const {value} = this.state;
        return(
            <div className="charClass">
                <h2>Class</h2>
                <form action = "#">
                    <label>
                        <span>Fighter</span>
                        <input type="radio" value="fighter" checked={value === "fighter"} onChange={this.onChange}></input>
                    </label>
                    <label>
                        <span>Cleric</span>
                        <input type="radio" value="Cleric" checked={value === "Cleric"} onChange={this.onChange}></input>
                    </label>
                    <label>
                        Paladin
                        <input type="radio" value="Paladin" checked={value === "Paladin"} onChange={this.onChange}></input>
                    </label>
                    <label>
                        Ranger
                        <input type="radio" value="Ranger" checked={value === "Ranger"} onChange={this.onChange}></input>
                    </label>
                    <label>
                        Rogue
                        <input type="radio" value="Rogue" checked={value === "Rogue"} onChange={this.onChange}></input>
                    </label>
                    <label>
                        Sorcerer
                        <input type="radio" value="Sorcerer" checked={value === "Sorcerer"} onChange={this.onChange}></input>
                    </label>
                </form>
            </div>
        );
    }
}

export default Class;