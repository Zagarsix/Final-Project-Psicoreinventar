import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function ModalAddWithForm({
  addWord,
  connector,
  addWhat,
  backgroundColor,
  color,
  addButtonColor,
  children,
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
      <Modal isOpen={modal} fade={false} toggle={toggle} size="lg">
        <ModalHeader
          toggle={toggle}
          style={{ backgroundColor: `${backgroundColor}`, color: `${color}` }}
        >
          {addWord} {""} {addWhat}
        </ModalHeader>
        <ModalBody>
          {/* Seguro que quieres {addWord} {connector} {addWhat}? */}

          {children}
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

export default ModalAddWithForm;
