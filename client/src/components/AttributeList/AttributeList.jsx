import React from "react";

function AttributeList(props) {
  return (
    <div className="charClass">
      <h2>{ props.title }</h2>
      <form action="#">
        {props.attributeList.map((attribute) => {
          return (
          <label>
            <input name={ props.title } onChange={() => props.setAttribute(attribute)
            } type="radio" />
            <span>{attribute}</span>
          </label>
        )})
        }
      </form>
    </div>
  );
}

export default AttributeList;
