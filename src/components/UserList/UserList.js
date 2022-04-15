import "./User.css";

import User from "./User";
import Card from "../UI/Card";

const UserList = ({ userList }) => {
  return (
    <Card>
      {userList.map((user) => (
        <User key={user.id} username={user.username} age={user.age} />
      ))}
    </Card>
  );
};

export default UserList;
