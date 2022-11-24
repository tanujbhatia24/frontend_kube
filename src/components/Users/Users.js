import React, { useEffect, useState } from "react";
import { getUsers } from "../../api/queries";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "name", headerName: "Name", sortable: true, width: 200 },
  { field: "company", headerName: "Company", sortable: false, width: 200 },
  { field: "role", headerName: "Role", sortable: false, width: 200 },
  { field: "verified", headerName: "Verified", sortable: false, width: 130 },
  { field: "status", headerName: "Status", sortable: false, width: 130 },
];

const Users = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    getUsers().then((data) => {
      setListOfUsers(data);
    });
  }, []);

  return (
    <div style={{ marginTop: 100, height: 400, width: "100%" }}>
      <DataGrid
        rows={listOfUsers}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default Users;
