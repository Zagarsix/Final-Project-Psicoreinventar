import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../store/appContext";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Sidebar from "../../components/Sidebar";
import "../../styles/RegisterForm.css";
import "../../styles/Appointment.css";
import SidebarDoctor from "../../components/SidebarDoctor";
import SidebarClient from "../../components/SidebarClient";

const Profile = (props) => {
  // Using context
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    actions.loadProfile();
  }, []);

  // If user is not signed in, redirect to login
  useEffect(() => {
    if (store.currentUser === null) navigate("/login");
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

      errors.name ||
      errors.lastname ||
      errors.email ||
      errors.password ||
      errors.phone
    ) {
      console.log("Form data not filled");
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          {store.currentUser?.user?.role_id === 1 && <Sidebar />}
          {store.currentUser?.user?.role_id === 2 && <SidebarDoctor />}
          {store.currentUser?.user?.role_id === 3 && <SidebarClient />}
        </div>
        <div className="col py-3">
          {/* inicio contenido */}
          <div
            className="container p-4"
            style={{ backgroundColor: "#8dc2fe", fontFamily: "monospace" }}
          >
            <div className="row">
              <div className="div">
                <div className="col-sm-12 p-4 my-3  text-center">
                  <h2>
                    Bienvenido(a),{" "}
                    <strong>
                      {store.currentUser?.user?.name}{" "}
                      {store.currentUser?.user?.lastname}
                    </strong>{" "}
                  </h2>
                </div>

                <div className="col-12 p-4">
                  <h6> Actualizar mis datos </h6>
                </div>
              </div>

              <form
                style={{ backgroundColor: "#fcfcfc", padding: "2rem" }}
                onSubmit={(e) => {
                  handleSubmit(onSubmit)(e);
                  actions.handleProfile(e);
                }}
              >
                <div className="row mb-3">
                  <label
                    htmlFor="inputName"
                    className="col-sm-1 col-form-label"
                  >
                    Nombre
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      name="name"
                      placeholder="Nombre"
                      {...register("name", {
                        pattern: {
                          value: /^[A-zÀ-ú]+$/,
                          message: "El formato no es el correcto",
                        },
                      })}
                      // If error, then add invalid-input class
                      className={`form-control ${
                        errors.name && "invalid-input"
                      }`}
                      value={store.name}
                      onChange={actions.handleChange}
                      id="inputName"
                    />

                    {errors.name && (
                      <span className="text-danger">
                        {errors.name?.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="inputLastName"
                    className="col-sm-1 col-form-label"
                  >
                    Apellido
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      name="lastname"
                      placeholder="Apellido"
                      {...register("lastname", {
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
                <div className="row mb-3">
                  <label
                    htmlFor="inputEmail"
                    className="col-sm-1 col-form-label"
                  >
                    Email
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="email"
                      name="email"
                      placeholder="johndoe@gmail.com"
                      {...register("email", {
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
                      autoComplete="username"
                      value={store.email}
                      onChange={actions.handleChange}
                      id="inputEmail"
                    />
                    {errors.email && (
                      <span className="text-danger">
                        {errors.email?.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="inputPassword"
                    className="col-sm-1 col-form-label"
                  >
                    Contraseña
                  </label>
                  <div className="col-sm-10">
                    <div className="input-password position-relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Contraseña"
                        {...register("password", {
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
                        autoComplete="new-password"
                        value={store.password}
                        onChange={actions.handleChange}
                        id="inputPassword"
                      />
                    </div>

                    {errors.password && (
                      <span className="text-danger">
                        {errors.password?.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="inputPhone"
                    className="col-sm-1 col-form-label"
                  >
                    Teléfono
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Número de teléfono"
                      {...register("phone", {
                        pattern: {
                          value: /^\d{8,12}$/,
                          message:
                            "El formato no es el correcto, 8 a 12 dígitos",
                        },
                      })}
                      className="form-control"
                      value={store.phone}
                      onChange={actions.handleChange}
                      id="inputPhone"
                    />
                    {errors.phone && (
                      <span className="text-danger">
                        {errors.phone?.message}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn mt-2"
                  style={{ backgroundColor: "#8dc2fe" }}
                >
                  Actualizar perfil
                </button>
              </form>
            </div>
          </div>

          {/* fin contenido */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
