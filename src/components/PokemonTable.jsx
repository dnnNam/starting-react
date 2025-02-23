import React, { useContext } from "react";
import PokemonRow from "./PokemonRow";
import PokemonContext from "../PokemonContext";
const PokemonTable = () => {
  const {
    state: { filter, pokemon },
    dispatch,
  } = useContext(PokemonContext);
  return (
    <table width="100%">
      <tbody>
        {pokemon
          .filter(({ name: { english } }) =>
            english.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
          )
          .slice(0, 20)
          .map((pokemon) => (
            <PokemonRow
              key={pokemon.id}
              pokemon={pokemon}
              onSelect={
                (pokemon) =>
                  dispatch({
                    type: "SET_SELECTED_ITEM",
                    payload: pokemon,
                  })
                // trên hàm render thêm 1 nút select
                // nếu bấm vào select thì sẽ trả ra con pokemon đó
              }
            />
          ))}
      </tbody>
    </table>
  );
};

export default PokemonTable;
