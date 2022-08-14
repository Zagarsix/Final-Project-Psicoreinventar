import { useForm } from "react-hook-form";
import "../styles/RegisterForm.css";
import "../styles/Appointment.css";

const RegisterForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    // console.log(e);
    console.log("hey");
    // If input is not filled
    if (
      errors.email ||
      errors.name ||
      errors.lastname ||
      errors.password ||
      errors.phone
    ) {
      console.log("Form data not filled");
    } else {
      // If input is filled, go to the next step
      props.nextStep();
    }
  };
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
            <form onSubmit={handleSubmit(onSubmit)} id="form">
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
                        value: /^[a-zA-Z]+$/,
                        message: "El formato no es el correcto",
                      },
                    })}
                    className="form-control"
                    id="inputName"
                  />

                  {errors.name && (
                    <span className="text-danger">{errors.name.message}</span>
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
                        value: /^[a-zA-Z]+$/,
                        message: "El formato no es el correcto",
                      },
                    })}
                    className="form-control"
                    id="inputLastName"
                  />
                  {errors.lastname && (
                    <span className="text-danger">
                      {errors.lastname.message}
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
                    type="text"
                    name="email"
                    placeholder="johndoe@gmail.com"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "El campo es requerido",
                      },
                    })}
                    className="form-control"
                    id="inputEmail"
                  />
                  {errors.email && (
                    <span className="text-danger">{errors.email.message}</span>
                  )}
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
                    name="password"
                    placeholder="Password"
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
                    className="form-control"
                    id="inputPassword"
                  />
                  {errors.password && (
                    <span className="text-danger">
                      {errors.password.message}
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
                    placeholder="Phone Number"
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
                    id="inputPhone"
                  />
                  {errors.phone && (
                    <span className="text-danger">{errors.phone.message}</span>
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
