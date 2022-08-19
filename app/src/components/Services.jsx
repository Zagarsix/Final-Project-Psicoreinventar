import ServiceCard from "./ServiceCard";
import "../styles/Appointment.css";
import { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

const Services = (props) => {
  const { store, actions } = useContext(Context);

  // let [serviceSelected, setServiceSelected] = useState(null);

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
                  2
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
                  <button
                    className="btn btn-secondary me-3"
                    onClick={props.previousStep}
                    style={{ width: "5.5rem" }}
                  >
                    Previous
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={props.nextStep}
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
