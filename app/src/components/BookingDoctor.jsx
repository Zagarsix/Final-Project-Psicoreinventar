import { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import SelectDoctor from "./SelectDoctor";
import Calendar from "./Calendar";
import "../styles/Appointment.css";

const BookingDoctor = (props) => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const submitBooking = () => {
    /*  Find which doctor in the database has the same id as the doctor being selected and saved on store.doctor
        Doing this because on the flux, the doctors attribute is being saved starting from zero, not with doctor.id*/
    const doctorSelected = store.doctors.find(
      (doctor) => doctor.id === store?.doctor
    );
    const doctorName = `${doctorSelected?.name} ${doctorSelected?.lastname}`;

    // If doctor and dateTime selected, display notification and post request
    if (store.doctor !== null && store.dateTime !== null) {
      // Displaying this alert after the one coming from the backend, 2 seconds after (right when the other closes)
      setTimeout(() => {
        actions.handleAppointmentSuccess(
          `Agendando cita con: ${doctorName}, el ${store.dateTime}`
        );
      }, 2000);
      // actions.handleAppointmentSuccess(
      //   `Agendando cita con: ${doctorName}, el ${store.dateTime}`
      // );
    } else {
      actions.handleAppointmentError(
        "Seleccione un especialista y la fecha y el horario de la cita"
      );
    }
  };

  return (
    <>
      <section className="card-section bg-primary">
        <div
          className="appointment-step-container d-flex flex-column mx-auto bg-light"
          style={{ minHeight: "505px", borderRadius: "5px" }}
        >
          <div className="container d-flex justify-content-md-center align-items-center mt-4 mb-3">
            <div className="col-md-6">
              <div className="step-num-container d-flex align-items-center">
                <span className="step-num rounded-circle bg-primary text-center pt-2 fw-semibold text-light me-3">
                  2
                </span>
                <h5 className="fw-semibold">
                  Selecciona un especialista y la fecha de la cita
                </h5>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="row align-items-center justify-content-center gy-3">
                <div
                  className="d-flex justify-content-center mb-5"
                  style={{ maxWidth: "50rem" }}
                >
                  <div className="col-4">
                    <SelectDoctor />
                  </div>
                  <div className="col-4">
                    <Calendar />
                  </div>
                </div>
              </div>
            </div>
            <div className="container mt-5">
              <div className="row d-flex justify-content-center">
                <div className="col-md-6">
                  <button
                    className="btn btn-secondary me-3"
                    // reset state if user goes back to profile page
                    // como resetearlo si el usuario le da click a la flecha de atrás
                    onClick={props.previousStep}
                    style={{ width: "5.5rem" }}
                  >
                    Previous
                  </button>
                  <button
                    className="btn btn-primary"
                    // onSubmit={send data to api}
                    // onClick={(e) => {
                    //   submitBooking(e);
                    //   actions.handleAppointment(e, navigate);
                    // }}
                    onClick={(e) => {
                      submitBooking(e);
                      actions.handleAppointment(e, navigate);
                    }}
                    style={{ width: "5.5rem" }}
                    // type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingDoctor;
