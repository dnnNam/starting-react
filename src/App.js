import React, { useEffect, useState } from "react";
import "./App.css";

import PokemonInfor from "./components/Pokemon";
import PokemonFilter from "./components/PokemonFilter";
import PokemonTable from "./components/PokemonTable";
import PokemonContext from "./PokemonContext";

function App() {
  // tạo trạng thái khi nhập vô input sẽ lọc ra các pokemon
  const [filter, setFilter] = useState("");
  // khi khách hàng chọn 1 pokemon nên chon 1 trạng thái khác
  const [selectedItem, setSelectedItem] = useState(null);
  const [pokemon, setPokemon] = useState([]);

  //thay đổi dựa vào bộ lọc
  useEffect(() => {
    fetch("http://localhost:3000/starting-react/pokemon.json")
      .then((resp) => resp.json())
      .then((data) => setPokemon(data));
  }, []);

  if (!pokemon) {
    return <div>Loading data</div>;
  }

  return (
    <div className="container">
      <h1>Pokemon Search</h1>
      <PokemonContext.Provider
        value={{
          filter,
          pokemon,
          selectedItem,
          setFilter,
          setPokemon,
          setSelectedItem,
        }}
      >
        <div className="table">
          <div>
            <PokemonFilter />
            <PokemonTable />
          </div>
          <PokemonInfor />
        </div>
      </PokemonContext.Provider>
    </div>
  );
}

export default App;
