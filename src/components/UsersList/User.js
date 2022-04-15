import styles from "./User.module.css";

const User = ({ id, username, age, onDelete }) => {
  const deleteHandler = () => {
    onDelete(id);
  };

  return (
    <li
      onClick={deleteHandler}
      className={styles.user}
    >{`${username} (${age} years old)`}</li>
  );
};

export default User;
