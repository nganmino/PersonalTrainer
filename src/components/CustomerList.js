import React, { useState, useEffect } from "react";

import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";

import "./ag-grid.css";

function CustomerList() {
  const [customers, setCustomers] = useState([]);

  React.useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = () => {
    fetch("https://customerrest.herokuapp.com/api/customers")
      .then((response) => response.json())
      .then((data) => setCustomers(data.content))
      .catch((err) => console.error(err));
  };

  const columns = [
    {
      field: "firstname",
      width: 150,
      sortable: true,
      filter: true,
      resizable: true,
      className: "headers",
    },
    {
      field: "lastname",
      width: 150,
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      field: "streetaddress",
      width: 150,
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      field: "postcode",
      width: 150,
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      field: "city",
      width: 120,
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      field: "email",
      width: 150,
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      field: "phone",
      width: 150,
      sortable: true,
      filter: true,
      resizable: true,
    },
  ];

  return (
    <div
      className="ag-theme-material"
      style={{
        height: 500,
        width: "100%",
        margin: "auto",
        textAlign: "left",
      }}
    >
      {/* change from alpine to material */}
      <AgGridReact
        rowData={customers}
        columnDefs={columns}
        pagination={true}
        paginationPageSize={10}
        suppressCellSelection={true}
      />
    </div>
  );
}

export default CustomerList;
