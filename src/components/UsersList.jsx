import React, { useState } from "react";
import useUsers from "../hooks/useUsers";

const UsersList = () => {
  const [users, addUser] = useUsers();
  return (
    <>
      <ul>
        {users.map((user, key) => (
          <li key={key}>{user.name}</li>
        ))}
      </ul>

      <button onClick={() => addUser({ name: "Robson" })}>
        Adicionar usuário
      </button>
    </>
  );
};

export default UsersList;
