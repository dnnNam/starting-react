import React, { useEffect, useReducer, useState } from "react";
import "./App.css";

import PokemonInfor from "./components/Pokemon";
import PokemonFilter from "./components/PokemonFilter";
import PokemonTable from "./components/PokemonTable";
import PokemonContext from "./PokemonContext";

// state là trạng thái hiện tại của cửa hàng
// hàm lọc các pokemon đã chọn

// Reducer là một function nhận vào state hiện tại và một action, sau đó trả về state mới.
// Trong code trên, reducer xử lý ba loại action:
// "SET_FILTER": Cập nhật filter trong state.
// "SET_POKEMON": Cập nhật pokemon trong state.
// "SET_SELECTED_ITEM": Cập nhật selectedItem trong state.
// Nếu action không khớp với case nào, nó sẽ throw error "No Action".
const producerReducer = (state, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };

    case "SET_POKEMON":
      return {
        ...state,
        pokemon: action.payload,
      };

    case "SET_SELECTED_ITEM":
      return {
        ...state,
        selectedItem: action.payload,
      };
    default:
      throw new Error("No Action");
  }
};

function App() {
  // tạo trạng thái khi nhập vô input sẽ lọc ra các pokemon
  // const [filter, setFilter] = useState("");
  // khi khách hàng chọn 1 pokemon nên chon 1 trạng thái khác
  // const [selectedItem, setSelectedItem] = useState(null);
  // const [pokemon, setPokemon] = useState([]);

  // useReducer là một hook trong React, thay thế cho useState khi cần quản lý state phức tạp hơn hoặc cần nhiều hành động (actions) để thay đổi state.
  // producerReducer là reducer function, nơi bạn xử lý các action và cập nhật state tương ứng.
  // dispatch là hàm mà bạn sử dụng để gửi (dispatch) các action đến reducer và thay đổi state.

  // useReducer nhận vào hai tham số:

  // Reducer function: Hàm xử lý logic cập nhật state.
  // Initial state: Trạng thái khởi tạo.
  // useReducer trả về một mảng gồm hai phần tử:

  // State: Trạng thái hiện tại.
  // Dispatch: Hàm để gửi action đến reducer và cập nhật state.
  const [state, dispatch] = useReducer(producerReducer, {
    pokemon: [],
    filter: "",
    selectedItem: null,
  });

  //thay đổi dựa vào bộ lọc
  useEffect(() => {
    fetch("http://localhost:3000/starting-react/pokemon.json")
      .then((resp) => resp.json())
      .then((data) =>
        dispatch({
          type: "SET_POKEMON",
          payload: data,
        })
      );
  }, []);

  if (!state.pokemon) {
    return <div>Loading data</div>;
  }

  return (
    <div className="container">
      <h1>Pokemon Search</h1>
      <PokemonContext.Provider
        value={{
          // filter,
          // pokemon,
          // selectedItem,
          // setFilter,
          // setPokemon,
          // setSelectedItem,
          state,
          dispatch,
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
