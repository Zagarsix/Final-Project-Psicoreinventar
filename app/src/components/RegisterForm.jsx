import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import "../styles/RegisterForm.css";
import "../styles/Appointment.css";

const RegisterForm = (props) => {
  // Using context
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {}, []);

  // If user signed in, redirect to home page
  useEffect(() => {
    if (store.currentUser !== null) navigate("/");
  }, [store.currentUser]);

  // React hook form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const onSubmit = () => {
    // If input is not filled
    if (
      // HOW TO MAKE IT NOT WORK IF USER ALREADY EXISTS, like
      // if (message === "User already exists") {

      // }
      errors.email ||
      errors.name ||
      errors.lastname ||
      errors.password ||
      errors.confirmpassword ||
      errors.phone
    ) {
      console.log("Form data not filled");
    } else {
      // If input is filled, go to the next step
      props.nextStep();
    }
  };

  const submitForm = (e) => {
    handleSubmit();
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // React hook form method
  const password = watch("password");

  return (
    <>
      <div className="card appointment-step-container py-4 mx-auto">
        <div className="container d-flex justify-content-md-center align-items-center mb-3">
          <div className="col-md-6">
            <div className="step-num-container d-flex align-items-center">
              <span className="step-num rounded-circle bg-primary text-center pt-2 fw-semibold text-light me-3">
                1
              </span>
              <h5 className="fw-semibold">Register</h5>
            </div>
          </div>
        </div>
        <div className="register-form">
          <div className="container">
            {/* onSubmit={handleSubmit(onSubmit)}  */}
            <form
              onSubmit={(e) => {
                handleSubmit(onSubmit)(e);
                actions.handleRegister(e, navigate);
              }}
              // ACTIVATE THIS AFTER TEST
              id="form"
            >
              <div className="row justify-content-center">
                <div className="col-md-3">
                  <label htmlFor="inputName" className="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "El campo es requerido",
                      },
                      pattern: {
                        value: /^[A-zÀ-ú]+$/,
                        message: "El formato no es el correcto",
                      },
                    })}
                    // If error, then add invalid-input class
                    className={`form-control ${errors.name && "invalid-input"}`}
                    value={store.name}
                    onChange={actions.handleChange}
                    id="inputName"
                  />

                  {errors.name && (
                    <span className="text-danger">{errors.name?.message}</span>
                  )}
                </div>
                <div className="col-md-3">
                  <label htmlFor="inputLastName" className="form-label">
                    Apellido
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Apellido"
                    {...register("lastname", {
                      required: {
                        value: true,
                        message: "El campo es requerido",
                      },
                      pattern: {
                        value: /^[A-zÀ-ú]+$/,
                        message: "El formato no es el correcto",
                      },
                    })}
                    // If error, then add invalid-input class
                    className={`form-control ${
                      errors.lastname && "invalid-input"
                    }`}
                    value={store.lastname}
                    onChange={actions.handleChange}
                    id="inputLastName"
                  />
                  {errors.lastname && (
                    <span className="text-danger">
                      {errors.lastname?.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <label htmlFor="inputEmail" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="johndoe@gmail.com"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "El campo es requerido",
                      },
                      pattern: {
                        value:
                          // RFC 5322 regex
                          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "El formato no es el correcto",
                      },
                    })}
                    // If error, then add invalid-input class
                    className={`form-control ${
                      errors.email && "invalid-input"
                    }`}
                    value={store.email}
                    onChange={actions.handleChange}
                    id="inputEmail"
                  />
                  {errors.email && (
                    <span className="text-danger">{errors.email?.message}</span>
                  )}
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <label htmlFor="inputPassword" className="form-label">
                    Contraseña
                  </label>
                  <div className="input-password position-relative">
                    <input
                      // type="text"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Contraseña"
                      {...register("password", {
                        required: {
                          value: true,
                          message: "El campo es requerido",
                        },
                        pattern: {
                          value:
                            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                          message:
                            "La contraseña debe tener al menos 8 caracteres, incluyendo al menos: 1 mayúscula, 1 número y 1 caracter especial",
                        },
                      })}
                      // If error, then add invalid-input class
                      className={`form-control ${
                        errors.password && "invalid-input"
                      }`}
                      value={store.password}
                      onChange={actions.handleChange}
                      id="inputPassword"
                    />
                    <span
                      className="eye-icon fs-5 position-absolute top-0 end-0 me-4"
                      style={{ cursor: "pointer" }}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                    </span>
                  </div>

                  {errors.password && (
                    <span className="text-danger">
                      {errors.password?.message}
                    </span>
                  )}
                </div>
              </div>
              {/* Confirm Password */}
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <label htmlFor="inputConfirmPassword" className="form-label">
                    Confirmar Contraseña
                  </label>
                  <div className="input-password position-relative">
                    <input
                      // type="text"
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmpassword"
                      placeholder="Contraseña"
                      {...register("confirmpassword", {
                        required: {
                          value: true,
                          message: "El campo es requerido",
                          // Verify if confirm password has the same value of password
                        },
                        validate: {
                          validate: (value) =>
                            value === password ||
                            "Las contraseñas no coinciden",
                        },
                      })}
                      // If error, then add invalid-input class
                      className={`form-control ${
                        errors.confirmpassword && "invalid-input"
                      }`}
                      id="inputConfirmPassword"
                    />
                    <span
                      className="eye-icon fs-5 position-absolute top-0 end-0 me-4"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? (
                        <AiFillEye />
                      ) : (
                        <AiFillEyeInvisible />
                      )}
                    </span>
                  </div>

                  {errors.confirmpassword && (
                    <span className="text-danger">
                      {errors.confirmpassword?.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <label htmlFor="inputPhone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Número de teléfono"
                    {...register("phone", {
                      required: {
                        value: true,
                        message: "El campo es requerido",
                      },
                      pattern: {
                        value: /^\d{8,12}$/,
                        message: "El formato no es el correcto, 8 a 12 dígitos",
                      },
                    })}
                    className="form-control"
                    value={store.phone}
                    onChange={actions.handleChange}
                    id="inputPhone"
                  />
                  {errors.phone && (
                    <span className="text-danger">{errors.phone?.message}</span>
                  )}
                </div>
              </div>
              <div className="container d-flex justify-content-md-center align-items-center mt-4 mb-3">
                <div className="col-md-6">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: "5.5rem" }}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
