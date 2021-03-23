import React from "react";

function AttributeList(props) {
  return (
    <div className="charClass">
      <h2 className="title">{ props.title }</h2>
      <form action="#">
        {props.attributeList.map((attribute) => {
          return (
          <label>
            <input name={ props.title } onChange={() => props.setAttribute(attribute)
            } type="radio" />
            {/* There may be a better way to create this blank space: */}
            <span className="textPage">{attribute}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          </label>
        )})
        }
      </form>
    </div>
  );
}

export default AttributeList;
