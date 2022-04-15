import { useState } from "react";
import styles from "./UserForm.module.css";

import Card from "../UI/Card";
import Button from "../UI/Button";

const UserForm = ({ onSaveData, onInvalidData }) => {
  const [enteredUser, setEnteredUser] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const userChangeHandler = (e) => {
    setEnteredUser(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (enteredUser === "" || enteredAge === "") {
      onInvalidData({ message: "Please fill all the fields" });
      return;
    }

    if (enteredAge < 1) {
      onInvalidData({ msg: "Age cannot be smaller than 1" });
      return;
    }

    const userData = {
      id: Math.floor(Math.random() * 100000),
      username: enteredUser,
      age: enteredAge,
    };

    onSaveData(userData);
    setEnteredUser("");
    setEnteredAge("");
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="username">Username</label>
        <input
          onChange={userChangeHandler}
          value={enteredUser}
          type="text"
          id="username"
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          onChange={ageChangeHandler}
          value={enteredAge}
          type="number"
          max="200"
          id="age"
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default UserForm;
