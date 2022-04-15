import React, { useState } from "react";
import "./App.css";

import UserForm from "./components/UserForm/UserForm";
import UserList from "./components/UserList/UserList";
import Modal from "./components/UI/Modal";

const DUMMY_USERS = [
  {
    id: 16423,
    username: "Schaezar",
    age: 35,
  },
  {
    id: 258,
    username: "Terry23562",
    age: 42,
  },
  {
    id: 9348,
    username: "XanThePayn",
    age: 27,
  },
];

function App() {
  const [userList, setUserList] = useState(DUMMY_USERS);
  const [modalMessage, setModalMessage] = useState("");
  const [dataIsValid, setDataIsValid] = useState(true);

  const onSaveData = (user) => {
    setUserList((prevUserList) => {
      return [...prevUserList, user];
    });
  };

  const closeModal = () => {
    setDataIsValid(true);
    setModalMessage("");
  };

  const onInvalidData = ({ message }) => {
    setDataIsValid(false);
    setModalMessage(message);
    console.log(message);
  };

  return (
    <div>
      {!dataIsValid && (
        <Modal onModalClose={closeModal} message={modalMessage} />
      )}
      <UserForm onInvalidData={onInvalidData} onSaveData={onSaveData} />
      <UserList userList={userList} />
    </div>
  );
}

export default App;
