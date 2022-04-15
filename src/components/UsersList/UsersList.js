import styles from "./UsersList.module.css";

import User from "./User";
import Card from "../UI/Card";

const UsersList = ({ users, onDeleteItem }) => {
  return (
    <Card className={styles.users}>
      <ul>
        {users.length === 0 ? "No user to display" : ""}
        {users.map((user) => (
          <User
            id={user.id}
            key={user.id}
            username={user.username}
            age={user.age}
            onDelete={onDeleteItem}
          />
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
