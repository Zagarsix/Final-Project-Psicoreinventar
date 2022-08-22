import ModalDelete from "./Modal/ModalDelete";
import ModalEdit from "./Modal/ModalEdit";

const TableDataClient = ({ name, lastname, email, index }) => {
  return (
    <tbody className="table-group-divider" style={{ fontSize: "13px" }}>
      <tr>
        <td scope="row" className="td p-2">
          #{index}
        </td>
        <td className="td p-2">
          {name} {""} {lastname}
        </td>
        <td className="td p-2">{email}</td>
        <td className="td p-2">13 de Agosto, 2022. Dr. Juanín Juan Harry</td>
        <td className="td p-2">16 de Agosto, 2022. 10:00 hrs</td>
        <td className="td p-2">Realizado</td>
        <td className="td p-2">
          <div className="botones">
            <div className="d-flex align-items-center">
              <ModalEdit editWord="Editar" editWhat="cliente" />
              <ModalDelete
                deleteWord="Eliminar"
                connector="al"
                deleteWhat="cliente"
              />
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default TableDataClient;
