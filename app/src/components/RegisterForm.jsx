const RegisterForm = (props) => {
  return (
    <>
      <div className="register-form p-3">
        <div className="container">
          <div className="row justify-content-center">
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
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
