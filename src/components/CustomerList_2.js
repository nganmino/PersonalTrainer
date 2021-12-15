import React, { useState, useEffect } from "react";

import MaterialTable from "material-table";

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
      title: "First Name",
    },
    {
      field: "lastname",
      title: "Last Name",
    },
    {
      field: "streetaddress",
      title: "Address",
    },
    {
      field: "postcode",
      title: "Postcode",
    },
    {
      field: "city",
      title: "City",
    },
    {
      field: "email",
      title: "Email",
    },
    {
      field: "phone",
      title: "Phone",
    },
  ];

  return (
    <div
      className="ag-theme-material"
      style={{
        height: 200,
        margin: "auto",
        textAlign: "left",
      }}
    >
      <MaterialTable
        title="Customer List"
        data={customers}
        columns={columns}
        options={{
          sorting: true,
          search: true,
          headerStyle: {
            backgroundColor: "#C771AC",
            color: "#FFF",
          },
          exportButton: true,
        }}
        editable={{
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...customers];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setCustomers([...dataDelete]);

                resolve();
              }, 1000);
            }),
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setCustomers([...customers, newData]);

                resolve();
              }, 1000);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...customers];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setCustomers([...dataUpdate]);

                resolve();
              }, 1000);
            }),
        }}
      />
    </div>
  );
}

export default CustomerList;
