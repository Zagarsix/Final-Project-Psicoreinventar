import ServiceCard from "./ServiceCard";
import "../styles/Appointment.css";
import { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Services = (props) => {
  const { store, actions } = useContext(Context);
  // let [serviceSelected, setServiceSelected] = useState(null);

  const handleSubmit = () => {
    // If service selected, go to next step and display notification
    if (store.service !== null) {
      props.nextStep();
      window.scrollTo(0, 0);
      actions.handleAppointmentSuccess(
        `Servicio seleccionado ${store.services[store.service - 1].name}`
      );
    } else {
      actions.handleAppointmentError("Selecciona un servicio");
    }
  };

  return (
    <>
      <section className="card-section bg-primary">
        <div
          className="appointment-step-container d-flex flex-column justify-content-center mx-auto bg-light"
          style={{ minHeight: "505px", borderRadius: "5px" }}
        >
          <div className="container d-flex justify-content-md-center align-items-center mb-3">
            <div className="col-md-6">
              <div className="step-num-container d-flex align-items-center">
                <span className="step-num rounded-circle bg-primary text-center pt-2 fw-semibold text-light me-3">
                  1
                </span>
                <h5 className="fw-semibold">Selecciona un servicio</h5>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1 py-3 mb-3">
                <div className="row align-items-center justify-content-between gy-3">
                  {!!store.services &&
                    store.services.length > 0 &&
                    store.services.map((service, i) => (
                      <ServiceCard {...service} key={i} index={service.id} />
                    ))}
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row d-flex justify-content-center">
                <div className="col-md-6">
                  <Link
                    className="btn btn-secondary me-3"
                    // reset state if user goes back to profile page
                    // como resetearlo si el usuario le da click a la flecha de atrás
                    onClick={() => (store.service = null)}
                    to="/profile"
                    style={{ width: "5.5rem" }}
                  >
                    Previous
                  </Link>
                  <button
                    className="btn btn-primary"
                    onClick={(e) => {
                      handleSubmit(e);
                    }}
                    style={{ width: "5.5rem" }}
                  >
                    Next
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

export default Services;
