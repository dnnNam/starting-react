import React, { useContext } from "react";
import PokemonType from "../PokemonType";
import PokemonContext from "../PokemonContext";

// sau khi bấm select sẽ show ra thông tin của pokemon
const PokemonInfor = () => {
  const {
    state: { selectedItem },
  } = useContext(PokemonContext);
  return selectedItem ? (
    <div>
      <h1>{selectedItem.name.english}</h1>
      <table>
        <tbody>
          {Object.keys(selectedItem.base).map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{selectedItem.base[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : // Object.keys(base): sẽ lấy các key trong object base
  // duyệt qua các key tr key ={key} gán key để dễ quản lý
  // <td>{key}</td>: Cột đầu tiên hiển thị tên chỉ số (ví dụ: "HP", "Attack",...).
  // <td>{base[key]}</td>: Cột thứ hai hiển thị giá trị chỉ số.
  null;
};

// định ngĩa component
PokemonInfor.propTypes = PokemonType;

export default PokemonInfor;
