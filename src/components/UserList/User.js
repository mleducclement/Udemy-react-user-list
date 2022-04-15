import "./User.css";

const User = ({ username, age }) => {
  return <p className="user-info">{`${username} (${age} years old)`}</p>;
};

export default User;
