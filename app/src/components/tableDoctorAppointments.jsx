import { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Link } from "react-router-dom";

const TableDoctorAppointments = ({
  index,
  dateTime,
  pacient_id,
  doctor_id,
  pacient,
  doctor,
  service,
  invoice,
}) => {
  const { store, actions } = useContext(Context);

  const [modalDelete, setModalDelete] = useState(false);
  const toggleDelete = () => setModalDelete(!modalDelete);

  const [modalEdit, setModalEdit] = useState(false);
  const toggleEdit = () => setModalEdit(!modalEdit);

  const [appointmentId, setAppointmentId] = useState(null);

  const handleDeleteAppointment = async (e) => {
    // Fetching data from API
    const response = await fetch(
      `${store.apiURL}/api/delete_appoinment/${appointmentId}`,
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
      actions.getDoctorAppointments();
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
      <tbody className="table-group-divider" style={{ fontSize: "13px" }}>
        <tr>
          <th scope="row" className="th p-2">
            #{index}
          </th>
          <td className="td p-2">{pacient}</td>
          <td className="td p-2">{dateTime}</td>
          <td className="td p-2">Pendiente hardcoded</td>
          <td className="td p-2">Realizado hardcoded</td>
          <td className="td p-2">Invoice PDF</td>
          <td className="td p-2">
            <div className="d-flex align-items-center">
              {/* Modal Edit Appointment  */}
              <div className="edit-appointment-modal">
                <Link
                  onClick={() => {
                    toggleEdit();
                  }}
                  to={`/edit/appointment/${index}`}
                >
                  <Button color="light">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </Button>
                </Link>
              </div>
              {/* <div className="edit-appointment-modal me-2">
                <ModalEdit editWord="Reagendar" editWhat="cita" />
              </div> */}
              {/* Modal Delete Appointment */}
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
                <Modal isOpen={modalDelete} fade={false} toggle={toggleDelete}>
                  <ModalHeader toggle={toggleDelete}>Cancelar cita</ModalHeader>
                  <ModalBody>
                    Estas seguro de qué quieres cancelar la cita?
                  </ModalBody>
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
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default TableDoctorAppointments;
