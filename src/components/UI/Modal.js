import "./Modal.css";

import Card from "./Card";
import Button from "./Button";

const Modal = ({ message, onModalClose }) => {
  return (
    <div className="modal">
      <Card>
        <p>{message}</p>
        <Button onClick={onModalClose}>OK</Button>
      </Card>
    </div>
  );
};

export default Modal;
