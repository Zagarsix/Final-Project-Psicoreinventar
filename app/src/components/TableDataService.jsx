import { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import ModalEdit from "./Modal/ModalEdit";

const TableDataService = ({ index, name, description, price, time }) => {
  const { store, actions } = useContext(Context);

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

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

    console.log(data);

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
              <ModalEdit editWord="Editar" editWhat="servicio" />
              <div className="delete-service-modal">
                <Button
                  color="light"
                  onClick={() => {
                    toggle();
                    setServiceId(index);
                  }}
                  index={index}
                >
                  <i className="fa-solid fa-trash-can"></i>
                </Button>
                <Modal isOpen={modal} fade={false} toggle={toggle}>
                  <ModalHeader toggle={toggle}>Eliminar servicio</ModalHeader>
                  <ModalBody>
                    Estas seguro de qué quieres Eliminar el servicio?
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      color="danger"
                      onClick={(e) => {
                        toggle();
                        handleDeleteService(e);
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

export default TableDataService;
