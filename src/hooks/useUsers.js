// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const useUsers = () => {
  const users = useSelector((state) => state.users);
  const dispach = useDispatch();
  // const [users, setUsers] = useState([
  //   { name: "Daniel" },
  //   { name: "Douglas" },
  //   { name: "Catia" }
  // ]);

  const addUser = (user) => {
    dispach({
      type: "ADD_USER",
      payload: user
    });
  };

  return [users, addUser];
};

export default useUsers;
