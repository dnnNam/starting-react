import { useState } from "react";
import "./App.css";
import pokemon from "./pokemon.json";
import PropTypes from "prop-types";
const PokemonRow = ({ pokemon, onSelect }) => (
  // component này chịu trách nhiệu render
  <tr>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(", ")}</td>
    <td>
      <button onClick={() => onSelect(pokemon)}>Select !</button>
    </td>
  </tr>
);

PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape({
      english: PropTypes.string.isRequired,
    }),

    type: PropTypes.arrayOf(PropTypes.string.isRequired),
  }),
  onSelect: PropTypes.func.isRequired,
};
// sau khi bấm select sẽ show ra thông tin của pokemon
const PokemonInfor = ({ name, base }) => (
  <div>
    <h1>{name.english}</h1>
    <table>
      {Object.keys(base).map((key) => (
        <tr key={key}>
          <td>{key}</td>
          <td>{base[key]}</td>
        </tr>
      ))}
    </table>
  </div>
  // Object.keys(base): sẽ lấy các key trong object base
  // duyệt qua các key tr key ={key} gán key để dễ quản lý
  // <td>{key}</td>: Cột đầu tiên hiển thị tên chỉ số (ví dụ: "HP", "Attack",...).
  // <td>{base[key]}</td>: Cột thứ hai hiển thị giá trị chỉ số.
);

// định ngĩa component
PokemonInfor.propTypes = {
  name: PropTypes.shape({
    english: PropTypes.string.isRequired, // isRequired là bắt buộc phải có
  }),
  base: PropTypes.shape({
    HP: PropTypes.number.isRequired,
    Attack: PropTypes.number.isRequired,
    Defense: PropTypes.number.isRequired,
    "Sp. Attack": PropTypes.number.isRequired,
    "Sp. Defense": PropTypes.number.isRequired,
    Speed: PropTypes.number.isRequired,
  }),
};

function App() {
  // tạo trạng thái khi nhập vô input sẽ lọc ra các pokemon
  const [filter, setFilter] = useState("");
  // khi khách hàng chọn 1 pokemon nên chon 1 trạng thái khác
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <div
      style={{
        margin: "auto",
        width: 800,
        paddingTop: "1rem",
      }}
    >
      <h1 className="title">Pokemon Search</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "70% 30%", // cột đầu tiên chiếm 70% CỘT CỦA  CHA  còn cột thứ 2 chiếm 30%
          gridColumnGap: "1rem", // khoảng cách giữa cột 1 và 2 là 1 rem
        }}
      >
        <div>
          <input value={filter} onChange={(e) => setFilter(e.target.value)} />
          <table width="100%">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
              </tr>
            </thead>

            <tbody>
              {pokemon
                .filter((pokemon) =>
                  pokemon.name.english
                    .toLowerCase()
                    .includes(filter.toLowerCase())
                )
                .slice(0, 20)
                .map((pokemon) => (
                  <PokemonRow
                    pokemon={pokemon}
                    key={pokemon.id} // mỗi pokemon phải có key nếu react báo lỗi vì có key render đúng chính xác
                    onSelect={
                      (pokemon) => setSelectedItem(pokemon)
                      // trên hàm render thêm 1 nút select
                      // nếu bấm vào select thì sẽ trả ra con pokemon đó
                    }
                  />
                ))}
            </tbody>
          </table>
        </div>

        {selectedItem && (
          //  Short-Circuit Evaluation  nếu tồn tại selectedItem thì in item ra
          <PokemonInfor {...selectedItem} />
        )}
      </div>
    </div>
  );
}

export default App;
