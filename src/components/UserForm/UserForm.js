import { useState } from "react";
import styles from "./UserForm.module.css";

import Card from "../UI/Card";
import Button from "../UI/Button";

const UserForm = ({ onSaveData, onInvalidData }) => {
  const [enteredUser, setEnteredUser] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const usernameChangeHandler = (e) => {
    setEnteredUser(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (enteredUser.trim().length === 0 || enteredAge.trim().length === 0) {
      onInvalidData({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }

    if (+enteredAge < 1) {
      onInvalidData({
        title: "Invalid Age",
        message: "Please enter a valid age (>0)",
      });
      return;
    }

    const userData = {
      id: Math.floor(Math.random() * 100000).toString(),
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
          onChange={usernameChangeHandler}
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
