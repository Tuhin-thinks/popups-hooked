import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import useConfirm from "../hooks/confirmHook";

const ConfirmModal = () => {
  const {
    prompt = "",
    isOpen = false,
    proceed,
    cancel,
    oKLabel = "Ok",
    cancelLabel = "Cancel",
  } = useConfirm();

  return (
    <Modal isOpen={isOpen} fade>
      <ModalHeader>Confirm</ModalHeader>
      <ModalBody>{prompt}</ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={proceed} className="ml-4">
          {oKLabel}
        </Button>
        <Button color="secondary" onClick={cancel}>
          {cancelLabel}
        </Button>
      </ModalFooter>
    </Modal>
  );
};
export default ConfirmModal;
