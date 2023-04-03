import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { studentInfo } from "../studentInfo";
import "../CSS/students.css";

const StudentList = () => {
  const [data, setData] = useState(studentInfo);

  const columns = [
    { field: "id", headerName: "", width: 30 },
    {
      field: "student",
      headerName: "",
      width: 70,
      renderCell: (params) => {
        return (
          <div className="studentListStudent">
            <img
              className="studentImg"
              src={params.row.avatar}
              alt="avatar"
            />
          </div>
        );
      },
    },
    { field: "firstName", headerName: "First Name", width: 150 },
    { field: "lastName", headerName: "Last Name", width: 250 },
    {
      field: "info",
      headerName: "",
      width: 350,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/students/${params.row.firstName}`}>
              <button className="studentDetailsBtn"> Info </button>
            </Link>
          </>
        );
      },
    },
  ];

  return (
    <div className="studentContainer">
      <div className="studentTitleContainer">
        <h1 className="studentTitle">Students</h1>
      </div>

      <div>
        <div className="student" style={{ height: 600, width: '100%' }}>
          <DataGrid
            getRowId={(row) => data.indexOf(row)}
            rows={data}
            disableSelectionOnClick
            columns={columns}
            pageSize={[]}
            rowsPerPageOptions={[]}
            autoHeight
          />
        </div>
      </div>
    </div>
  );
};

export default StudentList;
