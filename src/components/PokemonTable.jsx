import React from "react";
import PokemonRow from "./PokemonRow";
import useStore from "../store";
const PokemonTable = () => {
  const pokemon = useStore((state) => state.pokemon);
  const filter = useStore((state) => state.filter);
  const setSelectedItem = useStore((state) => state.setSelectedItem);

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
                (pokemon) => setSelectedItem(pokemon)

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
