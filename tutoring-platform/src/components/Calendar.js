import {
  ViewState,
  EditingState,
  IntegratedEditing,
} from "@devexpress/dx-react-scheduler";
import { Resources } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Appointments,
  AppointmentForm,
  DateNavigator,
  Toolbar,
  TodayButton,
} from "@devexpress/dx-react-scheduler-material-ui";
import "../css/calendar.css";
const Calendar = () => {
  const schedulerData = [
    {
      startDate: "2022-11-11T09:45",
      endDate: "2022-11-11T11:00",
      title: "Meeting",
    },
    {
      startDate: "2022-11-11T12:00",
      endDate: "2022-11-11T13:00",
      title: "Go to the gym",
    },
  ];

  const saveAppointment = (data) => {
    console.log("Appointment Saved");
    console.log(data);
  };

  const views = ["week", "month"];
  return (
    <div id="calendar">
      <Scheduler data={schedulerData} views={views} height={660}>
        <ViewState />
        <EditingState onCommitChanges={saveAppointment} />
        <IntegratedEditing />
        <WeekView startDayHour={10} endDayHour={19} />
        <Toolbar />
        <DateNavigator />
        <TodayButton />
        <Appointments />
        <AppointmentForm />
      </Scheduler>
    </div>
  );
};

export default Calendar;
