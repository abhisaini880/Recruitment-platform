import React from "react";
import { assets } from "../../../assets/assets";
import DataTable from "../../../components/Tables/DataTable";

const columns = [
  { field: "id", headerName: "ID", flex: 1 },
  { field: "department", headerName: "Department", flex: 1 },
  { field: "department_head", headerName: "Department Head", flex: 1 },
];

const rows = [
  { id: 1, department: "Sales", department_head: "User1" },
  { id: 2, department: "Marketing", department_head: "User2" },
  { id: 3, department: "Engineering", department_head: "User4" },
  { id: 4, department: "Operation", department_head: "User5" },
  { id: 5, department: "Admin", department_head: "User6" },
  { id: 6, department: "HR", department_head: "User7" },
  { id: 7, department: "Finance", department_head: "User8" },
];

const OrgContent = () => {
  return (
    <div className="org-main">
      <div className="org-details">
        <div className="org-details__logo">
          <img src={assets.sample_logo} alt="" width={200} />
        </div>
        <div className="org-details__content">
          <div className="org-name">
            <p className="header">Name</p>
            <p>Sample Org</p>
          </div>
          <div className="org-admin">
            <p className="header">Admin</p>
            <p>Abhi</p>
          </div>
        </div>
      </div>
      <div className="add-button">
        <button onClick="">Add</button>
      </div>
      <DataTable columns={columns} rows={rows} width="90%" />
    </div>
  );
};

const UserContent = () => {
  return (
    <div className="user-main">
      <DataTable columns={columns} rows={rows} height={500} />
    </div>
  );
};

const RoleContent = () => {
  return (
    <div className="role-main">
      <DataTable columns={columns} rows={rows} height={500} />
    </div>
  );
};

export { OrgContent, UserContent, RoleContent };
