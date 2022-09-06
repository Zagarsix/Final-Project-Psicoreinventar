import { useContext, useState } from "react";
import { Tbody, Tr, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Context } from "../store/appContext";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Invoice from "./Invoice";

const TableDataAppointment = ({
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

  // Modal to toggle delete appointment

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  // Modal to toggle invoice component

  const [modalInvoice, setModalInvoice] = useState(false);

  const toggleInvoice = () => setModalInvoice(!modalInvoice);

  const [appointmentId, setAppointmentId] = useState(null);

  // useEffect(() => {
  //   console.log(appointmentId);
  // }, [appointmentId]);

  const handleDeleteAppoinment = async (e) => {
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
      actions.getAllAppointments();
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
        <Td className="td p-2">{dateTime}</Td>
        <Td className="td p-2">
          #{pacient_id} {""} {pacient}
        </Td>
        <Td className="td p-2">
          #{doctor_id} {""} {doctor}
        </Td>
        <Td className="td p-2">{service}</Td>
        <Td className="td p-2">
          {/* modal to open Invoice component */}
          <div className="invoice-modal">
            <Button
              color="light"
              onClick={() => {
                toggleInvoice();
                setAppointmentId(index);
              }}
              index={index}
            >
              <a className="link-primary">Factura</a>
            </Button>
            <Modal centered isOpen={modalInvoice} fade={false} toggle={toggleInvoice} size="lg">
              <ModalBody>
                <Invoice invoice={invoice} pacient={pacient} doctor={doctor} />
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={toggleInvoice}>
                  Salir
                </Button>
              </ModalFooter>
            </Modal>
          </div>

          {/* {Object.keys(invoice).map((key, i) => {
            return (
              <p key={i}>
                {key}: {invoice[key]}
              </p>
            );
          })} */}
        </Td>
        <Td className="td p-2">
          <div className="botones">
            <div className="d-flex justify-content-start justify-content-md-center align-items-center">
              <div className="delete-appointment-modal">
                <Button
                  color="light"
                  onClick={() => {
                    toggle();
                    setAppointmentId(index);
                  }}
                  index={index}
                >
                  <i className="fa-solid fa-trash-can"></i>
                </Button>
                <Modal centered isOpen={modal} fade={false} toggle={toggle}>
                  <ModalHeader toggle={toggle}>Cancelar cita</ModalHeader>
                  <ModalBody>Estas seguro de qué quieres Cancelar la cita?</ModalBody>
                  <ModalFooter>
                    <Button
                      color="danger"
                      onClick={(e) => {
                        toggle();
                        handleDeleteAppoinment(e);
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
        </Td>
      </Tr>
    </Tbody>
  );
};

export default TableDataAppointment;
