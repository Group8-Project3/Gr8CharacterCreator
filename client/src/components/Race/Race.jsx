import React from 'react'

function Race() {
  return (
    <div className="charClass">
       <h2>Races</h2>
      <form action="#">
        <p>
          <label>
            <input type="checkbox" />
            <span>Human</span>
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" />
            <span>Elf</span>
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" />
            <span>Dwarf</span>
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" />
            <span>Half-Orc</span>
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" />
            <span>Gnome</span>
          </label>
        </p>
      </form>
    </div>
  )
}

export default Race
