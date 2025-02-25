import React from "react";
import PokemonType from "../PokemonType";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
const PokemonRow = ({ pokemon, onSelect }) => (
  // component này chịu trách nhiệu render
  <tr>
    <td>{pokemon.name.english}</td>
    <td>{pokemon?.type.join(", ")}</td>
    <td>
      <Button
        variant="contained"
        color="warning"
        onClick={() => onSelect(pokemon)}
      >
        More Information
      </Button>
    </td>
  </tr>
);

PokemonRow.propTypes = {
  pokemon: PokemonType,
};

export default PokemonRow;
