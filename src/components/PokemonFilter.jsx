import React from "react";
import store from "../store";
import { observer } from "mobx-react";

const PokemonFilter = () => {
  return (
    <input
      value={store.filter}
      onChange={(e) => store.setFilter(e.target.value)}
    />
  );
};

export default observer(PokemonFilter);
