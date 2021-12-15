import React, { useState, useEffect } from "react";

import MaterialTable from "material-table";
function TrainingList() {
  const [train, setTrain] = useState([]);
  const [customerTrain, setCustomerTrain] = useState([]);

  React.useEffect(() => {
    fetchTrain();
  }, []);

  const fetchTrain = () => {
    fetch("https://customerrest.herokuapp.com/api/trainings")
      .then((response) => response.json())
      .then((data) => {
        // setTrain(data.content);
        // for (let i = 0; i < data.content.length; i++) {
        //   fetch(data.content[i].links[2].href)
        //     .then((response) => response.json())
        //     .then((dataC) => {
        //       console.log(dataC);
        //       setCustomerTrain();
        //     });
        // }
        console.log(data.content);
        data.content.forEach((x) => {
          fetch(x.links[2].href)
            .then((response) => response.json())
            .then((dataC) => {
              console.log(dataC.firstname + " " + dataC.lastname);
              // setCustomerTrain(dataC.);
              x.customerName = dataC.firstname + " " + dataC.lastname;
              setTrain(data.content);
            });
        });
      })
      .catch((err) => console.error(err));
  };

  // dùng array.propotype.map() để loop qua data.content
  // trong mỗi 1 loop, lấy data của customer đặt vào trong array training

  const columns = [
    {
      field: "activity",
      title: "Activity",
    },
    {
      field: "date",
      title: "Date",
    },
    {
      field: "duration",
      title: "Duration (min)",
    },
    {
      field: "customerName",
      title: "Customer",
    },
  ];

  return (
    <div>
      <MaterialTable
        title="Trainings"
        data={train}
        columns={columns}
        options={{
          sorting: true,
          search: true,
          headerStyle: {
            backgroundColor: "#C771AC",
            color: "#FFF",
          },
        }}
        editable={{
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...train];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setTrain([...dataDelete]);

                resolve();
              }, 1000);
            }),
        }}
      />
    </div>
  );
}

export default TrainingList;
