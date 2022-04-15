import styles from "./Modal.module.css";

import Card from "./Card";
import Button from "./Button";

const Modal = ({ content, onModalClose }) => {
  return (
    <div onClick={onModalClose} className={styles.backdrop}>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{content.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{content.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={onModalClose}>OK</Button>
        </footer>
      </Card>
    </div>
  );
};

export default Modal;
