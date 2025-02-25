import React from "react";
import PokemonRow from "./PokemonRow";
import store from "../store";
import { observer } from "mobx-react";
const PokemonTable = () => {
  return (
    <table width="100%">
      <tbody>
        {store.FilteredPokemon.slice(0, 20).map((pokemon) => (
          <PokemonRow
            key={pokemon.id}
            pokemon={pokemon}
            onSelect={
              (pokemon) => store.setSelectedItem(pokemon)

              // trên hàm render thêm 1 nút select
              // nếu bấm vào select thì sẽ trả ra con pokemon đó
            }
          />
        ))}
      </tbody>
    </table>
  );
};

export default observer(PokemonTable);
