import React, { useState } from "react";
import "./App.css";

import UserForm from "./components/UserForm/UserForm";
import UsersList from "./components/UsersList/UsersList";
import Modal from "./components/UI/Modal";

function App() {
  const [usersList, setUsersList] = useState([]);
  const [modalContent, setModalContent] = useState();

  const onSaveData = (user) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, user];
    });
  };

  const deleteItemHandler = (id) => {
    setUsersList((prevUsersList) => {
      const updatedUsersList = prevUsersList.filter((user) => user.id !== id);
      return updatedUsersList;
    });
  };

  const closeModal = () => {
    setModalContent(null);
  };

  const onInvalidData = ({ title, message }) => {
    setModalContent({
      title: title,
      message: message,
    });
  };

  return (
    <div>
      {modalContent && (
        <Modal onModalClose={closeModal} content={modalContent} />
      )}
      <UserForm onInvalidData={onInvalidData} onSaveData={onSaveData} />

      <UsersList onDeleteItem={deleteItemHandler} users={usersList} />
    </div>
  );
}

export default App;
