import { useContext, useState } from "react";
import { Context } from "../store/appContext";
import SelectDoctor from "./SelectDoctor";
import Calendar from "./Calendar";
import "../styles/Appointment.css";

const BookingDoctor = (props) => {
  const { store, actions } = useContext(Context);

  const submitBooking = () => {
    if (store.service !== null && store.date !== null) {
      console.log("Especialista y Fecha seleccionados exitosamente");
    } else {
      console.log("selecciona especialista y fecha");
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
                    className="btn btn-primary"
                    // onSubmit={send data to api}
                    onClick={(e) => {
                      submitBooking(e);
                      // actions.handleRegister(e, navigate);
                      // actions.handleAppointment
                    }}
                    style={{ width: "5.5rem" }}
                    type="submit"
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
