import { useContext, useState } from "react";
import { Tbody, Tr, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Context } from "../store/appContext";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Link } from "react-router-dom";

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
  const { store, actions } = useContext(Context);

  const [modalDelete, setModalDelete] = useState(false);
  const toggleDelete = () => setModalDelete(!modalDelete);

  const [modalEdit, setModalEdit] = useState(false);
  const toggleEdit = () => setModalEdit(!modalEdit);

  const [specialistId, setSpecialistId] = useState(null);

  // useEffect(() => {
  //   console.log(specialistId);
  // }, [specialistId]);

  const handleDeleteSpecialist = async (e) => {
    // Fetching data from API
    const response = await fetch(
      `${store.apiURL}/api/delete_user/${specialistId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${store.currentUser?.access_token}`,
        },
      }
    );

    const { status, message, data } = await response.json();

    // console.log(data);

    if (status === "failed" && message === "User already exists") {
      toast.error(message);
    }

    if (status === "success") {
      actions.getDoctors();
      Swal.fire({
        icon: "success",
        title: message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <Tbody className="table-group-divider" style={{ fontSize: "13px" }}>
      <Tr>
        <Td scope="row" className="td p-2">
          #{index}
        </Td>
        <Td className="td p-2">
          {name} {""}
          {lastname}
        </Td>
        <Td className="td p-2">{email}</Td>
        <Td className="td p-2">{education}</Td>
        <Td className="td p-2">{experience}</Td>
        <Td className="td p-2">
          {specialization1}
          {", "}
          {specialization2}
        </Td>
        <Td className="td p-2">
          <div className="botones">
            <div className="d-flex align-items-center">
              {/* Modal Edit  */}
              <div className="edit-specialist-modal">
                <Link
                  onClick={() => {
                    toggleEdit();
                  }}
                  index={index}
                  to={`/edit/specialist/${index}`}
                >
                  <Button color="light">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </Button>
                </Link>
              </div>
              <div className="delete-user-modal">
                <Button
                  color="light"
                  onClick={() => {
                    toggleDelete();
                    setSpecialistId(index);
                  }}
                  index={index}
                >
                  <i className="fa-solid fa-trash-can"></i>
                </Button>
                <Modal isOpen={modalDelete} fade={false} toggle={toggleDelete}>
                  <ModalHeader toggle={toggleDelete}>
                    Eliminar especialista
                  </ModalHeader>
                  <ModalBody>
                    Estas seguro de qué quieres Eliminar al especialista?
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      color="danger"
                      onClick={(e) => {
                        toggleDelete();
                        handleDeleteSpecialist(e);
                      }}
                    >
                      Confirmar
                    </Button>
                    <Button color="secondary" onClick={toggleDelete}>
                      Cancelar
                    </Button>
                  </ModalFooter>
                </Modal>
              </div>
            </div>
          </div>
        </Td>
      </Tr>
    </Tbody>
  );
};

export default TableDataSpecialist;
