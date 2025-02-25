import React from "react";
import PokemonRow from "./PokemonRow";
import { useDispatch, useSelector } from "react-redux";

const PokemonTable = () => {
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemon);
  const filter = useSelector((state) => state.filter);

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
