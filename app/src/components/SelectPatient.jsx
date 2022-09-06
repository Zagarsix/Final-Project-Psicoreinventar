import { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// Component for doctor, select of his/her patients to book an appointment
const SelectPatient = (props) => {
  const { store, actions } = useContext(Context);

  const [patientSelected, setPatientSelected] = useState("");

  const handleChange = (e) => {
    setPatientSelected(e.target.value);
  };

  useEffect(() => {
    actions.getDoctorPatients();
    console.log(patientSelected);
  }, []);

  return (
    <div className="patient-select" style={{ maxWidth: "15rem" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Paciente</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={patientSelected}
          label="Paciente"
          onChange={handleChange}
        >
          {!!store.doctorClients &&
            store.doctorClients.length > 0 &&
            store.doctorClients.map((patient, i) => (
              <MenuItem
                // {...doctor}
                key={i}
                index={patient.pacient_id}
                onClick={(e) => actions.handleClickPatient(patient.pacient_id)}
                value={patient.pacient_id}
              >
                {/* Display name of patient */}
                {patient.pacient}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectPatient;
