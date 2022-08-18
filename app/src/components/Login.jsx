import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {}, []);

  // If user signed in, redirect to home page
  useEffect(() => {
    if (store.currentUser !== null) navigate("/profile");
  }, [store.currentUser]);

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 p-5">
            <form
              className="m-5"
              onSubmit={(e) => actions.handleLogin(e, navigate)}
            >
              <div className="row mb-3">
                <label htmlFor="inputEmail" className="col-sm-2 col-form-label">
                  Email
                </label>
                <div className="col-sm-10">
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    name="email"
                    value={store.email}
                    onChange={actions.handleChange}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label
                  htmlFor="inputPassword"
                  className="col-sm-2 col-form-label"
                >
                  Password
                </label>
                <div className="col-sm-10">
                  <div className="input-password position-relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="inputPassword"
                      className="form-control"
                      value={store.password}
                      onChange={actions.handleChange}
                    />
                    <span
                      className="eye-icon fs-5 position-absolute top-0 end-0 me-4"
                      style={{ cursor: "pointer" }}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                    </span>
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <button type="submit" className="btn btn-primary w-100">
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
