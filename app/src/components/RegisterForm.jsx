import "../styles/RegisterForm.css";

const RegisterForm = (props) => {
  return (
    <>
      <div className="card register-form-container py-4">
        <div className="container d-flex align-items-center mb-3">
          <span className="step-num rounded-circle bg-primary text-center pt-2 fw-semibold text-light me-3">
            2
          </span>
          <h5 className="fw-semibold">Register</h5>
        </div>
        <div className="register-form">
          <div className="container">
            <form action="" id="form">
              <div className="row">
                <div className="col-md-6">
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
                <div className="col-md-6">
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
              <div className="row">
                <div className="col-md-12">
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
              <div className="row">
                <div className="col-md-12">
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
              <div className="row">
                <div className="col-md-12">
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
        </div>
      </div>

      {/* <div className="register-form p-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6 p-5">
              <form className="m-5">
                <div className="row mb-3">
                  <label
                    htmlFor="inputEmail"
                    className="col-sm-3 col-form-label"
                  >
                    Email
                  </label>
                  <div className="col-sm-12">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="inputPassword"
                    className="col-sm-3 col-form-label"
                  >
                    Password
                  </label>
                  <div className="col-sm-12">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="inputname"
                    className="col-sm-3 col-form-label"
                  >
                    Name
                  </label>
                  <div className="col-sm-12">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="inputLastName"
                    className="col-sm-3 col-form-label"
                  >
                    Last Name
                  </label>
                  <div className="col-sm-12">
                    <input
                      type="text"
                      className="form-control"
                      id="last_name"
                      name="last_name"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="inputPhone"
                    className="col-sm-3 col-form-label"
                  >
                    Phone
                  </label>
                  <div className="col-sm-12">
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="inputAddress"
                    className="col-sm-3 col-form-label"
                  >
                    Address
                  </label>
                  <div className="col-sm-12">
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      name="address"
                    />
                  </div>
                </div>
                <div className="d-flex">
                  <button type="submit" className="btn btn-primary w-100">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
          <button onClick={props.previousStep}>Previous</button>
          <button onClick={props.nextStep}>Next</button>
        </div>
      </div> */}
    </>
  );
};

export default RegisterForm;
