import { useContext } from "react";
import { Context } from "../store/appContext";

const SelectDoctor = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Especialistas
      </button>
      <ul className="dropdown-menu">
        {!!store.doctors &&
          store.doctors.length > 0 &&
          store.doctors.map((doctor, i) => (
            <li key={i} index={doctor.id}>
              <p className="specialist-name dropdown-item">
                {doctor.name} {doctor.lastname}
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SelectDoctor;
