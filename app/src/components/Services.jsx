import ServiceCard from "./ServiceCard";
import "../styles/Appointment.css";

const Services = (props) => {
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
                <h5 className="fw-semibold">Select a service</h5>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1 py-3 mb-3">
                <div className="row align-items-center justify-content-between gy-3">
                  <div className="col-md-6 col-lg-4">
                    <ServiceCard
                      img="https://uploads-ssl.webflow.com/6165ed3d14364c7f8297fe2e/62558793a951d723d8150c4a_plans-icon-1.png"
                      title="Consulta inicial"
                      time="30 min"
                      price="Gratis"
                    />
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <ServiceCard
                      img="https://uploads-ssl.webflow.com/6165ed3d14364c7f8297fe2e/62558793a951d723d8150c4a_plans-icon-1.png"
                      title="Consulta con servicio"
                      time="45 min"
                      price="35 USD"
                    />
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <ServiceCard
                      img="https://uploads-ssl.webflow.com/6165ed3d14364c7f8297fe2e/62558793a951d723d8150c4a_plans-icon-1.png"
                      title="Otra consulta"
                      time="1 hr"
                      price="50 USD"
                    />
                  </div>
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
