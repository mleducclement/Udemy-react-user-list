import styles from "./Button.module.css";

const Button = ({ children, type, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button} type={type || "button"}>
      {children}
    </button>
  );
};

export default Button;
