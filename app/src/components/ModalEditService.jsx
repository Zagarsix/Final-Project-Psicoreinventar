import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function ModalEditService(props) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle}>
      <i className="fa-solid fa-pen-to-square"></i>
      </Button>
      <Modal isOpen={modal} fade={false} toggle={toggle}>
        <ModalHeader toggle={toggle}>Editar usuario</ModalHeader>
        <ModalBody>
          Modifica los campos

        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Editar
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalEditService;