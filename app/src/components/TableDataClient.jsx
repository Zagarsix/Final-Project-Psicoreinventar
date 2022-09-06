import { useContext, useEffect, useState } from "react";
import { Tbody, Tr, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Context } from "../store/appContext";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import ModalEdit from "./Modal/ModalEdit";
import { Link } from "react-router-dom";

const TableDataClient = ({ name, lastname, email, phone, index }) => {
  const { store, actions } = useContext(Context);

  const [modalDelete, setModalDelete] = useState(false);
  const toggleDelete = () => setModalDelete(!modalDelete);

  const [modalEdit, setModalEdit] = useState(false);
  const toggleEdit = () => setModalEdit(!modalEdit);

  const [clientId, setClientId] = useState(null);

  const [patientAppointmentHistory, setPatientAppointmentHistory] = useState([]);

  // useEffect(() => {
  //   console.log(clientId);
  // }, [clientId]);

  const getPatientsAppointmentHistory = async () => {
    try {
      // Fetch data from backend
      const response = await fetch(`${store.apiURL}/api/appointment_history/${index}`, {
        // Display appointments of the currentUser client
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${store.currentUser?.access_token}`,
        },
      });
      const data = await response.json();

      if (data.dateTime !== []) {
        setPatientAppointmentHistory(data);
      }
    } catch (error) {
      console.log("Error loading appointments from backend", error);
    }
  };

  useEffect(() => {
    getPatientsAppointmentHistory();
  }, []);

  // useEffect(() => {
  //   console.log(patientAppointmentHistory);
  // }, [patientAppointmentHistory]);

  const handleDeleteClient = async (e) => {
    // Fetching data from API
    const response = await fetch(`${store.apiURL}/api/delete_user/${clientId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${store.currentUser?.access_token}`,
      },
    });

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
    <Tbody className="table-group-divider" style={{ fontSize: "13px" }}>
      <Tr>
        <Td scope="row" className="td p-2">
          #{index}
        </Td>
        <Td className="td p-2">
          {name} {""} {lastname}
        </Td>
        <Td className="td p-2">{email}</Td>
        <Td className="td p-2">{phone}</Td>
        <Td className="td p-2">
          {/* Display patient appointment history (appointments dateTime with status="Realizada") */}
          {patientAppointmentHistory.map((appointment, index, arr) => (
            <span key={index}>
              {appointment.dateTime}
              {index !== arr.length - 1 ? ", " : ""}
              {/* Adding comma after dateTime, only if it's not the last dateTime of the arr */}
            </span>
          ))}
        </Td>
        <Td className="td p-2">Realizado</Td>
        <Td className="td p-2">
          <div className="botones">
            <div className="d-flex justify-content-start justify-content-md-center align-items-center">
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
                  <ModalHeader toggle={toggleDelete}>Eliminar paciente</ModalHeader>
                  <ModalBody>Estas seguro de qué quieres Eliminar al paciente?</ModalBody>
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
        </Td>
      </Tr>
    </Tbody>
  );
};

export default TableDataClient;
