import { useContext, useState } from "react";
import { Context } from "../store/appContext";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SelectDoctor = (props) => {
  const { store, actions } = useContext(Context);

  const [specialistSelected, setSpecialistSelected] = useState("");

  const handleChange = (e) => {
    setSpecialistSelected(e.target.value);
  };

  return (
    <div className="specialists-select" style={{ maxWidth: "15rem" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Specialist</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={specialistSelected}
          label="Specialist"
          onChange={handleChange}
        >
          {!!store.doctors &&
            store.doctors.length > 0 &&
            store.doctors.map((doctor, i) => (
              <MenuItem
                // {...doctor}
                key={i}
                index={doctor.id}
                onClick={(e) => actions.handleClickDoctor(doctor.id)}
                value={doctor.id}
              >
                {doctor.name} {""} {doctor.lastname}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
};
export default SelectDoctor;
