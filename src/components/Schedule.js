import React, { useState, useEffect } from "react";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
} from "@syncfusion/ej2-react-schedule";

export default function Schedule() {
  const [train, setTrain] = useState([]);
  React.useEffect(() => {
    fetchTrain();
  }, []);
  const fetchTrain = () => {
    fetch("https://customerrest.herokuapp.com/api/trainings")
      .then((response) => response.json())
      .then((data) => {
        setTrain(data.content);
      })
      .catch((err) => console.error(err));
  };

  //   const schedule = [
  //     {
  //       Subject: "activity",
  //       StartTime: "date",
  //       EndTime: ["date" + "duration"],
  //     },
  //   ];

  return (
    <ScheduleComponent
    //   height="550px"
    //   selectedDate={new Date(2018, 1, 15)}
    //   eventSettings={{
    //     dataSource: this.data,
    //     fields: {
    //       subject: { name: "Subject" },
    //       isAllDay: { name: "IsAllDay" },
    //       startTime: { name: "StartTime" },
    //       endTime: { name: "EndTime" },
    //     },
    //   }}
    >
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>
  );
}
