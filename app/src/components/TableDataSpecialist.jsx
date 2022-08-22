import ModalDelete from "./Modal/ModalDelete";
import ModalEdit from "./Modal/ModalEdit";

const TableDataSpecialist = ({
  index,
  name,
  lastname,
  email,
  experience,
  education,
  specialization1,
  specialization2,
  phone,
  image,
}) => {
  return (
    <tbody className="table-group-divider" style={{ fontSize: "13px" }}>
      <tr>
        <td scope="row" className="td p-2">
          #{index}
        </td>
        <td className="td p-2">
          {name} {""}
          {lastname}
        </td>
        <td className="td p-2">{email}</td>
        <td className="td p-2">{education}</td>
        <td className="td p-2">{experience}</td>
        <td className="td p-2">
          {specialization1}
          {", "}
          {specialization2}
        </td>
        <td className="td p-2">
          <div className="botones">
            <div className="d-flex align-items-center">
              <div className="edit-btn me-2">
                <ModalEdit editWord="Editar" editWhat="especialista" />
              </div>
              <ModalDelete
                deleteWord="Eliminar"
                connector="al"
                deleteWhat="especialista"
              />
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default TableDataSpecialist;
