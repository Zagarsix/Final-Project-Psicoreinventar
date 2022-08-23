import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function ModalAddAppointment({ backgroundColor, color, addButtonColor }) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button
        onClick={toggle}
        className="px-4 fw-semibold"
        style={{ backgroundColor: `${backgroundColor}`, color: `${color}` }}
      >
        Agendar cita
      </Button>
      <Modal isOpen={modal} fade={false} toggle={toggle} centered>
        <ModalHeader
          toggle={toggle}
          style={{ backgroundColor: `${backgroundColor}`, color: `${color}` }}
        >
          Agendar cita
        </ModalHeader>
        <ModalBody>Seguro que quieres agendar una cita?</ModalBody>
        <ModalFooter>
          <Link
            className={`btn btn-${addButtonColor}`}
            style={{
              backgroundColor: `${backgroundColor}`,
              color: `${addButtonColor}`,
            }}
            onClick={toggle}
            to="/appointment"
          >
            Agendar
          </Link>{" "}
          <button className="btn btn-secondary" onClick={toggle}>
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalAddAppointment;
