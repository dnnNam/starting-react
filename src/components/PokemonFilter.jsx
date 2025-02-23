import React, { useContext } from "react";
import PokemonContext from "../PokemonContext";

const PokemonFilter = () => {
  const { filter, setFilter } = useContext(PokemonContext);
  return <input value={filter} onChange={(e) => setFilter(e.target.value)} />;
};

export default PokemonFilter;
