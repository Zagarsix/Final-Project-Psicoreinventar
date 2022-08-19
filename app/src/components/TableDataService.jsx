import ModalAddService from "./Modal/ModalAddService";
import ModalDelete from "./Modal/ModalDelete";
import ModalEditService from "./Modal/ModalEditService";

const TableDataService = (index, name, description, price, time) => {
  return (
    <tbody className="table-group-divider" style={{ fontSize: "13px" }}>
      <tr>
        <td scope="row" className="td p-2">
          #{index}
        </td>
        <td className="td p-2">{name}</td>
        <td className="td  p-2">{description}</td>
        <td className="td p-2">{price}</td>
        <td className="td p-2">{time}</td>
        <td className="td p-2">Disponible</td>
        <td className="td p-2">
          <div className="botones">
            <ModalEditService />
            <ModalDelete />
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default TableDataService;
