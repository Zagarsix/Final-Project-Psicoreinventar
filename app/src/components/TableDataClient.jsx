import { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import ModalEdit from "./Modal/ModalEdit";

const TableDataClient = ({ name, lastname, email, index }) => {
  const { store, actions } = useContext(Context);

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

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

    console.log(data);

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
              <ModalEdit editWord="Editar" editWhat="cliente" />
              <div className="delete-user-modal">
                <Button
                  color="light"
                  onClick={() => {
                    toggle();
                    setClientId(index);
                  }}
                  index={index}
                >
                  <i className="fa-solid fa-trash-can"></i>
                </Button>
                <Modal isOpen={modal} fade={false} toggle={toggle}>
                  <ModalHeader toggle={toggle}>Eliminar paciente</ModalHeader>
                  <ModalBody>
                    Estas seguro de qué quieres Eliminar al paciente?
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      color="danger"
                      onClick={(e) => {
                        toggle();
                        handleDeleteClient(e);
                      }}
                    >
                      Confirmar
                    </Button>
                    <Button color="secondary" onClick={toggle}>
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
