import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useForm } from "react-hook-form";
import { Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const TableDoctorAppointments = ({
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
  // React hook form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const { store, actions } = useContext(Context);

  const [appointmentId, setAppointmentId] = useState(null);

  // !!!!!!!!!! --- EDIT APPOINTMENT DATETIME AND DELETE APPOINTMENT --- !!!!!!!!!!

  const [modalDelete, setModalDelete] = useState(false);
  const toggleDelete = () => setModalDelete(!modalDelete);

  const [modalEdit, setModalEdit] = useState(false);
  const toggleEdit = () => setModalEdit(!modalEdit);

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

  // !!!!!!!!!! --- EDIT APPOINTMENT STATUS --- !!!!!!!!!!

  const [modalEditStatus, setModalEditStatus] = useState(false);

  const toggleEditStatus = () => setModalEditStatus(!modalEditStatus);

  // State saving all the appointment data, used to edit the status of the appointment,
  // then send to API with the appointment updated
  const [appointmentStatus, setAppointmentStatus] = useState({});

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setAppointmentStatus({ ...appointmentStatus, [name]: value });
  // };

  useEffect(() => {
    console.log(appointmentStatus);
  }, [appointmentStatus]);

  useEffect(() => {
    console.log(index);
  }, [index]);

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    const getAppointment = async (e) => {
      const response = await fetch(
        `${store.apiURL}/api/appointments/${index}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      // Display a certain notification based on status of the fetch data
      if (data.status) {
        setAppointmentStatus(data);
      } else {
        toast.error("Servicio no encontrado");
      }
    };

    getAppointment();
  }, [index]);

  const handleEditAppointmentStatus = async () => {
    const fields = appointmentStatus;

    const response = await fetch(
      `${store.apiURL}/api/edit_appoinment_status/${index}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${store.currentUser?.access_token}`,
        },
        body: JSON.stringify(fields),
      }
    );

    const { status, message, data } = await response.json();

    console.log(data);

    if (status === "failed") {
      toast.error(message);
    }

    if (status === "success") {
      actions.getDoctorAppointments();
      toggleEditStatus();
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
          <Th scope="row" className="th p-2">
            #{index}
          </Th>
          <Td className="td p-2">{pacient}</Td>
          <Td className="td p-2">
            {dateTime} {service}
          </Td>
          <Td className="td p-2">
            <div className="d-flex align-items-center justify-content-between">
              {status}
              {/* EDIT APPOINTMENT STATUS MODAL */}
              <div className="edit-appointment-status-modal">
                <Button
                  color="light"
                  onClick={() => {
                    toggleEditStatus();
                    setAppointmentId(index);
                  }}
                  index={index}
                >
                  <i className="fa-solid fa-pen-to-square"></i>
                </Button>
                <Modal
                  isOpen={modalEditStatus}
                  fade={false}
                  toggle={toggleEditStatus}
                  centered
                >
                  <ModalHeader toggle={toggleEditStatus}>
                    Editar estado de la cita
                  </ModalHeader>
                  <ModalBody>
                    <form
                      id="form"
                      onSubmit={(e) => {
                        handleSubmit(onSubmit)(e);
                        handleSubmit(handleEditAppointmentStatus)(e);
                      }}
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <label htmlFor="status" className="form-label">
                            Estado de la cita
                          </label>
                          <select
                            name="status"
                            id="status"
                            // If error, then add invalid-input class
                            className={`form-select ${
                              errors.status && "invalid-input"
                            }`}
                            aria-label="select status option"
                            {...register("status", {
                              required: {
                                value: true,
                                message: "El campo es requerido",
                              },
                            })}
                            value={appointmentStatus["status"]}
                            onChange={(e) => {
                              setAppointmentStatus({
                                ...appointmentStatus,
                                status: e.target.value,
                              });
                            }}
                          >
                            <option value="Pendiente">Pendiente</option>
                            <option value="Realizada">Realizada</option>
                          </select>
                          {errors.status && (
                            <span className="text-danger">
                              {errors.status?.message}
                            </span>
                          )}
                        </div>
                        <div className="row mt-3">
                          <div className="col-md-6">
                            <button type="submit" className="btn btn-primary">
                              Actualizar estado
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="secondary" onClick={toggleEditStatus}>
                      Cancelar
                    </Button>
                  </ModalFooter>
                </Modal>
              </div>
            </div>
          </Td>
          <Td className="td p-2">Realizado hardcoded</Td>
          <Td className="td p-2">Invoice Component</Td>
          <Td className="td p-2">
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
          </Td>
        </Tr>
      </Tbody>
    </>
  );
};

export default TableDoctorAppointments;
