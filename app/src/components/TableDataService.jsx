import ModalAddService from "./Modal/ModalAddService";
import ModalDelete from "./Modal/ModalDelete";
import ModalEdit from "./Modal/ModalEdit";

const TableDataService = ({ index, name, description, price, time }) => {
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
        <td className="td p-2">
          <div className="botones">
            <div className="d-flex align-items-center">
              <div className="edit-btn me-2">
                <ModalEdit editWhat="servicio" />
              </div>
              <ModalDelete
                deleteWord="Eliminar"
                connector="el"
                deleteWhat="servicio"
              />
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default TableDataService;
