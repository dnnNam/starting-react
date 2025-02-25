import React from "react";
import useStore from "../store";

const PokemonFilter = () => {
  const setFilter = useStore((state) => state.setFilter);
  const filter = useStore((state) => state.filter);

  return <input value={filter} onChange={(e) => setFilter(e.target.value)} />;
};

export default PokemonFilter;
