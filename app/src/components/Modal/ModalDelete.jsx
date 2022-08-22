import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function ModalDelete({ deleteWord, connector, deleteWhat }) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="light" onClick={toggle}>
        <i className="fa-solid fa-trash-can"></i>
      </Button>
      <Modal isOpen={modal} fade={false} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          {deleteWord} {deleteWhat}
        </ModalHeader>
        <ModalBody>
          Estas seguro de que quieres {deleteWord} {""} {connector} {""}{" "}
          {deleteWhat}?
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggle}>
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
