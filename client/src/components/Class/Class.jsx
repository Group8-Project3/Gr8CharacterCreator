import React from "react";

function Class() {
  return (
    <div className="charClass">
      <h2>Classes</h2>
      <form action="#">
        <p>
          <label>
            <input type="checkbox" />
            <span>Cleric</span>
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" />
            <span>Fighter</span>
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" />
            <span>Paladin</span>
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" />
            <span>Ranger</span>
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" />
            <span>Rogue</span>
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" />
            <span>Sorcerer</span>
          </label>
        </p>
      </form>
    </div>
  );
}

export default Class;
