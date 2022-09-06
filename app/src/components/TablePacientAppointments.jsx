import { useContext, useState } from "react";
import { Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Context } from "../store/appContext";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const TablePacientAppointments = ({
  index,
  dateTime,
  pacient_id,
  doctor_id,
  pacient,
  doctor,
  service,
  invoice,
  status,
}) => {
  const { store, actions } = useContext(Context);

  const [modalDelete, setModalDelete] = useState(false);
  const toggleDelete = () => setModalDelete(!modalDelete);

  const [appointmentId, setAppointmentId] = useState(null);

  const handleDeleteAppointment = async (e) => {
    // Fetching data from API
    const response = await fetch(`${store.apiURL}/api/delete_appoinment/${appointmentId}`, {
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
      actions.getPacientAppointments();
      Swal.fire({
        icon: "success",
        title: message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <>
      <Tbody className="table-group-divider" style={{ fontSize: "13px" }}>
        <Tr>
          <Td scope="row" className="td p-2">
            #{index}
          </Td>
          <Td className="td p-2">{doctor}</Td>
          <Td className="td p-2">
            {dateTime} {service}
          </Td>
          <Td className="td p-2">{invoice["price"]}</Td>
          <Td className="td p-2">Invoice Component</Td>
          <Td className="td p-2">
            {/* reagendar cita edit appointment only if user cancelled appointment and has payed */}
            {/* Modal delete appointment */}
            <div className="d-flex justify-content-start justify-content-md-center align-items-center">
              <div className="delete-appointment-modal">
                <Button
                  color="light"
                  onClick={() => {
                    toggleDelete();
                    setAppointmentId(index);
                  }}
                  index={index}
                >
                  <i className="fa-solid fa-trash-can"></i>
                </Button>
                <Modal centered isOpen={modalDelete} fade={false} toggle={toggleDelete}>
                  <ModalHeader toggle={toggleDelete}>Cancelar cita</ModalHeader>
                  <ModalBody>Estas seguro de qué quieres cancelar la cita?</ModalBody>
                  <ModalFooter>
                    <Button
                      color="danger"
                      onClick={(e) => {
                        toggleDelete();
                        handleDeleteAppointment(e);
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
          </Td>
        </Tr>
      </Tbody>
    </>
  );
};

export default TablePacientAppointments;
