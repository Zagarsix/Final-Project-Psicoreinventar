// import * as React from "react";
import { useContext, useState } from "react";
import { Context } from "../store/appContext";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const Calendar = () => {
  const { store, actions } = useContext(Context);

  const [dateTimeSelected, setDatetimeSelected] = useState(null);

  return (
    <div className="">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          renderInput={(props) => <TextField {...props} />}
          label="DateTimePicker"
          value={dateTimeSelected}
          inputFormat="dd/MM/yyyy hh:mm"
          format="dd/MM/yyyy hh:mm"
          disablePast
          minutesStep={60}
          minTime={new Date(0, 0, 0, 9)}
          maxTime={new Date(0, 0, 0, 17)}
          views={["day", "hours", "minutes"]}
          onChange={(newValue) => {
            const dateSelected = newValue?.toLocaleDateString();

            const timeSelected = newValue?.toLocaleTimeString();

            // Returns date and time selected as = 8/25/2022 2:45:00 PM
            newValue = `${dateSelected} ${timeSelected}`;

            setDatetimeSelected(newValue);

            actions.handleChangeDateTime(newValue);
          }}
        />
      </LocalizationProvider>
    </div>
  );
};
export default Calendar;
