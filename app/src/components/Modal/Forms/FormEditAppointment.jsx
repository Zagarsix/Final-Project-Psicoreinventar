import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../../../store/appContext";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import "../../../styles/Appointment.css";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

// Change date and time of appointment (doctor dashboard)
const FormEditAppointment = (props) => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  // React hook form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const { id } = useParams();

  /* State saving  the dateTime of the appointment then this state is send to the API
     to update the appointment*/

  const [appointmentDateTime, setAppointmentDateTime] = useState({
    dateTime: "",
    doctor_id: "",
  });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setAppointmentDateTime({ ...appointmentDateTime, [name]: value });
  // };

  // useEffect(() => {
  //   console.log(appointmentDateTime["doctor_id"]);
  // }, [appointmentDateTime]);

  // useEffect(() => {
  //   console.log(appointmentDateTime["dateTime"]);
  // }, [appointmentDateTime]);

  const onSubmit = (data) => {
    console.log(data);
  };

  // Get appointment by id, run this function everytime the useParams id changes
  useEffect(() => {
    const getAppointment = async (e) => {
      const response = await fetch(`${store.apiURL}/api/appointments/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      // Display a certain notification based on status of the fetch data
      if (data.dateTime) {
        setAppointmentDateTime(data);
      } else {
        toast.error("Cita no encontrada");
      }
    };

    getAppointment();
  }, [id]);

  const handleEditAppointmentDateTime = async () => {
    const fields = appointmentDateTime;

    const response = await fetch(`${store.apiURL}/api/edit_appoinment/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${store.currentUser?.access_token}`,
      },
      body: JSON.stringify(fields),
    });

    const { status, message, data } = await response.json();

    console.log(data);

    if (status === "failed") {
      toast.error(message);
    }

    if (status === "success") {
      actions.getDoctorAppointments();
      navigate("/doctores");
      Swal.fire({
        icon: "success",
        title: message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <>
      <div className="bg-primary py-4">
        <div
          className="card appointment-step-container py-4 mx-auto"
          style={{ minHeight: "505px", borderRadius: "5px" }}
        >
          <div className="edit-form-container">
            <h1 className="edit-form-header text-center mb-4">
              Reagendar cita
            </h1>
            <div className="container" style={{ maxWidth: "850px" }}>
              <form
                id="form"
                onSubmit={(e) => {
                  handleSubmit(onSubmit)(e);
                  handleSubmit(handleEditAppointmentDateTime)(e);
                }}
              >
                <div className="row justify-content-center align-items-center mt-5">
                  <div className="col-md-6">
                    <div className="dateTimePicker d-flex justify-content-center">
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker
                          renderInput={(props) => <TextField {...props} />}
                          label="DateTimePicker"
                          value={appointmentDateTime["dateTime"]}
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

                            setAppointmentDateTime({
                              ...appointmentDateTime,
                              dateTime: newValue,
                            });
                          }}
                        />
                      </LocalizationProvider>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-12 d-flex justify-content-center">
                      <button type="submit" className="btn btn-primary">
                        Reagendar
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormEditAppointment;
