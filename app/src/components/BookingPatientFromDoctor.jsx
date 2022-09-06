import { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import SelectPatient from "./SelectPatient";
import Calendar from "./Calendar";
import "../styles/Appointment.css";

const BookingPatientFromDoctor = (props) => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const submitBooking = () => {
    /*  Find which patient in the database has the same id as the patient being selected and saved on store.patient
        Doing this because on the flux, the patients attribute is being saved starting from zero, not with patient.id*/

    const patientSelected = store.clients.find((client) => client.id === store?.patient);
    const patientName = `${patientSelected?.name} ${patientSelected?.lastname}`;

    // If patient and dateTime selected, display notification and post request
    if (store.patient !== null && store.dateTime !== null) {
      console.log(`Agendando cita con: ${patientName}, el ${store.dateTime}`);
    } else {
      actions.handleAppointmentError("Seleccione un paciente y la fecha y el horario de la cita");
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
                <h5 className="fw-semibold">Selecciona un paciente y la fecha de la cita</h5>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="row align-items-center justify-content-center gy-3">
                <div className="d-flex justify-content-center mb-5" style={{ maxWidth: "50rem" }}>
                  <div className="col-4">
                    <SelectPatient />
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
                    onClick={props.previousStep}
                    style={{ width: "5.5rem" }}
                  >
                    Previo
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={(e) => {
                      submitBooking(e);
                      actions.handleAppointmentFromDoctor(e, navigate);
                    }}
                    style={{ width: "5.5rem" }}
                  >
                    Agendar
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

export default BookingPatientFromDoctor;
