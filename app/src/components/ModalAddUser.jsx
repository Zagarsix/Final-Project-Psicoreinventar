import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function ModalAddUser(props) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle}>
      <i class="fa-solid fa-plus"></i>
      </Button>
      <Modal isOpen={modal} fade={false} toggle={toggle}>
        <ModalHeader toggle={toggle}>Añadir usuario</ModalHeader>
        <ModalBody>
          Rellena los campos
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Agregar
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalAddUser;