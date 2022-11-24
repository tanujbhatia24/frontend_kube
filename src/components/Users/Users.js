import React, { useEffect } from "react";
import { getUsers } from "../../api/queries";

const Users = () => {
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
    </div>
  );
};

export default Users;
