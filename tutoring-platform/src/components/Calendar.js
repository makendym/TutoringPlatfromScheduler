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
      startDate: "2022-12-16T09:45",
      endDate: "2022-12-16T11:00",
      title: "Meeting",
    },
    {
      startDate: "2022-12-16T12:00",
      endDate: "2022-12-16T13:00",
      title: "Go to the gym",
    },
  ];

  const saveAppointment = (data) => {
    console.log("Appointment Saved");
    console.log(data);
  };
  const TextEditor = (props) => {
    // eslint-disable-next-line react/destructuring-assignment
    if (props.type === "multilineTextEditor") {
      return null;
    }
    return <AppointmentForm.TextEditor {...props} />;
  };
  const divStyle = {
    textAlign : "left",
    
  };

  const BasicLayout = ({ onFieldChange, appointmentData, ...restProps }) => {
    const onCustomFieldChange = (nextValue) => {
      onFieldChange({ customField: nextValue });
    };
    const onCustomFieldChange2 = (nextValue) => {
      onFieldChange({ customField2: nextValue });
    };

    return (
      <AppointmentForm.BasicLayout
        appointmentData={appointmentData}
        onFieldChange={onFieldChange}
        {...restProps}
      >
        <AppointmentForm.Label
          text="First Name"
          type="title"
          style={divStyle}
        />
        <AppointmentForm.TextEditor
          value={appointmentData.customField}
          onValueChange={onCustomFieldChange}
          placeholder="First Name"
        />
        <AppointmentForm.Label text="Last Name" type="title" style={divStyle}/>
        <AppointmentForm.TextEditor
          value={appointmentData.customField2}
          onValueChange={onCustomFieldChange2}
          placeholder="Last Name"
        />
      </AppointmentForm.BasicLayout>
    );
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
        <AppointmentForm
          basicLayoutComponent={BasicLayout}
          textEditorComponent={TextEditor}
        />
      </Scheduler>
    </div>
  );
};

export default Calendar;
