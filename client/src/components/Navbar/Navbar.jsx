import React from "react";
import "../../App.css";

function Navbar() {
  return (
    <div>
       <nav>
        <div className="nav-wrapper">
          <h1 className="brand-logo">
            Group Gr8 Character Creator
          </h1>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="../../public/">Created Characters</a>
            </li>
            <li>
              <a href="../../../public/login.html">Log out</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
