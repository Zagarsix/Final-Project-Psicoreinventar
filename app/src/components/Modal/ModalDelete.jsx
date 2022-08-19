import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function ModalDelete(props) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle} className="px-4">
        <i className="fa-solid fa-trash-can"></i>
      </Button>
      <Modal isOpen={modal} fade={false} toggle={toggle}>
        <ModalHeader toggle={toggle}>Editar usuario</ModalHeader>
        <ModalBody>Estas seguro?</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Confirmar
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalDelete;
