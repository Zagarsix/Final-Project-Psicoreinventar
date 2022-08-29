import { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import ModalEdit from "./Modal/ModalEdit";
import { Link } from "react-router-dom";

const TableDataClient = ({ name, lastname, email, index }) => {
  const { store, actions } = useContext(Context);

  const [modalDelete, setModalDelete] = useState(false);
  const toggleDelete = () => setModalDelete(!modalDelete);

  const [modalEdit, setModalEdit] = useState(false);
  const toggleEdit = () => setModalEdit(!modalEdit);

  const [clientId, setClientId] = useState(null);

  // useEffect(() => {
  //   console.log(clientId);
  // }, [clientId]);

  const handleDeleteClient = async (e) => {
    // Fetching data from API
    const response = await fetch(
      `${store.apiURL}/api/delete_user/${clientId}`,
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

    if (status === "failed") {
      toast.error(message);
    }

    if (status === "success") {
      actions.getClients();
      Swal.fire({
        icon: "success",
        title: message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
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
              {/* Modal edit */}
              <div className="edit-client-modal">
                <Link
                  onClick={() => {
                    toggleEdit();
                  }}
                  index={index}
                  to={`/edit/client/${index}`}
                >
                  <Button color="light">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </Button>
                </Link>
              </div>
              {/* Modal delete */}
              <div className="delete-user-modal">
                <Button
                  color="light"
                  onClick={() => {
                    toggleDelete();
                    setClientId(index);
                  }}
                  index={index}
                >
                  <i className="fa-solid fa-trash-can"></i>
                </Button>
                <Modal isOpen={modalDelete} fade={false} toggle={toggleDelete}>
                  <ModalHeader toggle={toggleDelete}>
                    Eliminar paciente
                  </ModalHeader>
                  <ModalBody>
                    Estas seguro de qué quieres Eliminar al paciente?
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      color="danger"
                      onClick={(e) => {
                        toggleDelete();
                        handleDeleteClient(e);
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
        </td>
      </tr>
    </tbody>
  );
};

export default TableDataClient;
