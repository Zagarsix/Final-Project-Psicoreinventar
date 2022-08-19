// import * as React from "react";
import { useContext, useState } from "react";
import { Context } from "../store/appContext";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const Calendar = () => {
  const { store, actions } = useContext(Context);

  const handleSubmit = () => {
    if (store.service !== null && store.date !== null) {
      console.log("Especialista y Fecha seleccionados exitosamente");
    } else {
      console.log("selecciona especialista y fecha");
    }
  };

  const [dateTimeSelected, setDatetimeSelected] = useState(null);

  {
    console.log(dateTimeSelected);
  }

  return (
    <div className="">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          renderInput={(props) => <TextField {...props} />}
          label="DateTimePicker"
          value={dateTimeSelected}
          onChange={(newValue) => {
            setDatetimeSelected(newValue);
            actions.handleChangeDateTime(dateTimeSelected);
          }}
        />
      </LocalizationProvider>
    </div>
  );
};

export default Calendar;
