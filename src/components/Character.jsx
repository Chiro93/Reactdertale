import React from "react";

function Character(props) {
  return (
      <div className="character-info">
        <img className={props.class} src={props.characterImageUrl} alt={props.name} />
        <p>{props.name}</p>
      </div>
  );
}
//onHover img: https://external-preview.redd.it/YYkq9CuiZCPfIqWZmR9odElPZFAXMFtCuiHd0D3rYuw.jpg?auto=webp&s=ab2a304dc8a8f287b6eeec67d0d3d240528e98c4

export default Character;
