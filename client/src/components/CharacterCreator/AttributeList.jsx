import React from "react";

function AttributeList(props) {
  return (
    <div className="charClass">
      <h2>{ props.title }</h2>
      <form action="#">
        {props.attributes.map((attribute) => {
          return (<p>
          <label>
            <input type="checkbox" />
            <span>{ attribute }</span>
          </label>
        </p>
        )})
        }
      </form>
    </div>
  );
}

export default AttributeList;
