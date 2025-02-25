import React from "react";
import { useDispatch, useSelector } from "react-redux";

const PokemonFilter = () => {
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.filter);

  return (
    <input
      value={filter}
      onChange={(e) =>
        dispatch({
          type: "SET_FILTER",
          payload: e.target.value,
        })
      }
    />
  );
};

export default PokemonFilter;
