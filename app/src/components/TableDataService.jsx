import { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Link } from "react-router-dom";

const TableDataService = ({ index, name, description, price, time }) => {
  const { store, actions } = useContext(Context);

  const [modalDelete, setModalDelete] = useState(false);
  const toggleDelete = () => setModalDelete(!modalDelete);

  const [modalEdit, setModalEdit] = useState(false);
  const toggleEdit = () => setModalEdit(!modalEdit);

  const [serviceId, setServiceId] = useState(null);

  // useEffect(() => {
  //   console.log(serviceId);
  // }, [serviceId]);

  const handleDeleteService = async (e) => {
    // Fetching data from API
    const response = await fetch(
      `${store.apiURL}/api/delete_service/${serviceId}`,
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
      actions.getServices();
      Swal.fire({
        icon: "success",
        title: message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <tbody
      className="table-group-divider"
      id={index}
      style={{ fontSize: "13px" }}
    >
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
              {/* Modal Edit  */}
              <div className="edit-service-modal">
                <Link
                  onClick={() => {
                    toggleEdit();
                  }}
                  index={index}
                  to={`/edit/service/${index}`}
                >
                  <Button color="light">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </Button>
                </Link>
                {/* <Modal isOpen={modalEdit} fade={false} toggle={toggleEdit}>
                  <ModalHeader toggle={toggleEdit}>Editar servicio</ModalHeader>
                  <ModalBody>Modifica los campos</ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={toggleEdit}>
                      Editar
                    </Button>{" "}
                    <Button color="secondary" onClick={toggleEdit}>
                      Cancelar
                    </Button>
                  </ModalFooter>
                </Modal> */}
              </div>

              {/* Modal Delete */}
              <div className="delete-service-modal">
                <Button
                  color="light"
                  onClick={() => {
                    toggleDelete();
                    setServiceId(index);
                  }}
                  index={index}
                >
                  <i className="fa-solid fa-trash-can"></i>
                </Button>
                <Modal isOpen={modalDelete} fade={false} toggle={toggleDelete}>
                  <ModalHeader toggle={toggleDelete}>
                    Eliminar servicio
                  </ModalHeader>
                  <ModalBody>
                    Estas seguro de qué quieres Eliminar el servicio?
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      color="danger"
                      onClick={(e) => {
                        toggleDelete();
                        handleDeleteService(e);
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

export default TableDataService;
