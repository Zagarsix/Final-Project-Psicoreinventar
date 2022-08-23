import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function ModalAdd({
  addWord,
  connector,
  addWhat,
  backgroundColor,
  color,
  addButtonColor,
}) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button
        onClick={toggle}
        className="px-4 fw-semibold"
        style={{ backgroundColor: `${backgroundColor}`, color: `${color}` }}
      >
        {addWord} {""} {addWhat}
      </Button>
      <Modal isOpen={modal} fade={false} toggle={toggle}>
        <ModalHeader
          toggle={toggle}
          style={{ backgroundColor: `${backgroundColor}`, color: `${color}` }}
        >
          {addWord} {""} {addWhat}
        </ModalHeader>
        <ModalBody>
          Seguro que quieres {addWord} {connector} {addWhat}?
        </ModalBody>
        <ModalFooter>
          <Link
            className={`btn btn-${addButtonColor}`}
            style={{ backgroundColor: `${backgroundColor}`, color: `${color}` }}
            onClick={toggle}
            to="/appointment"
          >
            {addWord}
          </Link>{" "}
          <button className="btn btn-secondary" onClick={toggle}>
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalAdd;
