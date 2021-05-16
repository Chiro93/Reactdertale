import React from "react";
import Grid from "@material-ui/core/Grid";
import Character from "./Character";
import characters from "../characterList";

function CharacterBox() {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      {characters.map((char) => (
        <Character
          class={char.classImage}
          characterImageUrl={char.characterImageUrl}
          name={char.name}
        />
      ))}
    </Grid>
  );
}
//onHover img: https://external-preview.redd.it/YYkq9CuiZCPfIqWZmR9odElPZFAXMFtCuiHd0D3rYuw.jpg?auto=webp&s=ab2a304dc8a8f287b6eeec67d0d3d240528e98c4

export default CharacterBox;
