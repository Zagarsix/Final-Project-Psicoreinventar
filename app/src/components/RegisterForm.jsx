import "../styles/RegisterForm.css";
import "../styles/Appointment.css";

const RegisterForm = (props) => {
  return (
    <>
      <div
        className="card appointment-step-container py-4 mx-auto"
        style={{ minHeight: "505px", borderRadius: "5px" }}
      >
        <div className="container d-flex justify-content-md-center align-items-center mb-3">
          <div className="col-md-6">
            <div className="step-num-container d-flex align-items-center">
              <span className="step-num rounded-circle bg-primary text-center pt-2 fw-semibold text-light me-3">
                2
              </span>
              <h5 className="fw-semibold">Register</h5>
            </div>
          </div>
        </div>
        <div className="register-form">
          <div className="container">
            <form action="" id="form">
              <div className="row justify-content-center">
                <div className="col-md-3">
                  <label htmlFor="inputName" className="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                    id="inputName"
                  />
                </div>
                <div className="col-md-3">
                  <label htmlFor="inputLastName" className="form-label">
                    Apellido
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                    id="inputLastName"
                  />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <label htmlFor="inputEmail" className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="johndoe@gmail.com"
                    className="form-control"
                    id="inputEmail"
                  />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <label htmlFor="inputPassword" className="form-label">
                    Contraseña
                  </label>
                  <input
                    // type="text"
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    id="inputPassword"
                  />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <label htmlFor="inputPhone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="form-control"
                    id="inputPhone"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="container d-flex justify-content-md-center align-items-center mb-3">
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
    </>
  );
};

export default RegisterForm;
