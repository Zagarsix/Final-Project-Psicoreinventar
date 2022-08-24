import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../../../store/appContext";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const FormAddSpecialist = (props) => {
  const { store, actions } = useContext(Context);

  // React hook form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  /* State saving all the specialist data and then this state is send to the API
     to create a new specialist with the data of the specialist state*/

  const [specialist, setSpecialist] = useState({
    experience: "+5 años", // setting defaultValue experience
  });

  const [showPassword, setShowPassword] = useState(false);

  // Display specialist state everytime it changes
  // useEffect(() => {
  //   console.log(specialist);
  // }, [specialist]);

  const handleAddSpecialist = async (e) => {
    const fields = specialist; // Passing specialist state as fields

    // Fetching data from API
    const response = await fetch(`${store.apiURL}/api/register/doctor`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${store.currentUser?.access_token}`,
      },
      body: JSON.stringify(fields),
    });

    const { status, message, data } = await response.json();

    console.log(data);

    if (status === "failed") {
      toast.error(message);
    }

    if (status === "success") {
      actions.getDoctors();
      Swal.fire({
        icon: "success",
        title: message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="add-specialist-form">
        <div className="container">
          <form
            id="form"
            onSubmit={(e) => {
              handleSubmit(onSubmit)(e);
              handleAddSpecialist(e);
            }}
          >
            <div className="row justify-content-center">
              <div className="col-md-6">
                <label htmlFor="name" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  // If error, then add invalid-input class
                  className={`form-control ${errors.name && "invalid-input"}`}
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
                  onChange={(e) => {
                    setSpecialist({
                      ...specialist,
                      name: e.target.value,
                    });
                  }}
                />
                {errors.name && (
                  <span className="text-danger">{errors.name?.message}</span>
                )}
              </div>
              <div className="col-md-6">
                <label htmlFor="lastname" className="form-label">
                  Apellido
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  // If error, then add invalid-input class
                  className={`form-control ${
                    errors.lastname && "invalid-input"
                  }`}
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
                  onChange={(e) => {
                    setSpecialist({
                      ...specialist,
                      lastname: e.target.value,
                    });
                  }}
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
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  // If error, then add invalid-input class
                  className={`form-control ${errors.email && "invalid-input"}`}
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
                  onChange={(e) => {
                    setSpecialist({
                      ...specialist,
                      email: e.target.value,
                    });
                  }}
                />
                {errors.email && (
                  <span className="text-danger">{errors.email?.message}</span>
                )}
              </div>
              <div className="col-md-6">
                <label htmlFor="password" className="form-label">
                  Contraseña
                </label>
                <div className="input-password position-relative">
                  <input
                    // type="text"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    // If error, then add invalid-input class
                    className={`form-control ${
                      errors.password && "invalid-input"
                    }`}
                    placeholder="Contraseña"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "El campo es requerido",
                        // Verify if confirm password has the same value of password
                      },
                      pattern: {
                        value:
                          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                        message:
                          "La contraseña debe tener al menos 8 caracteres, incluyendo al menos: 1 mayúscula, 1 número y 1 caracter especial",
                      },
                    })}
                    onChange={(e) => {
                      setSpecialist({
                        ...specialist,
                        password: e.target.value,
                      });
                    }}
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
            <div className="row justify-content-center">
              <div className="col-md-6">
                <label htmlFor="phone" className="form-label">
                  Teléfono
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  // If error, then add invalid-input class
                  className={`form-control ${errors.phone && "invalid-input"}`}
                  placeholder="Teléfono"
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "El campo es requerido",
                    },
                    pattern: {
                      value: /^[0-9]{8,12}$/,
                      message: "Minimo 8 caracteres, Maximo 12",
                    },
                  })}
                  onChange={(e) => {
                    setSpecialist({
                      ...specialist,
                      phone: e.target.value,
                    });
                  }}
                />
                {errors.phone && (
                  <span className="text-danger">{errors.phone?.message}</span>
                )}
              </div>
              <div className="col-md-6">
                <label htmlFor="image" className="form-label">
                  Imagen (Link)
                </label>
                <input
                  type="text"
                  name="image"
                  id="image"
                  // If error, then add invalid-input class
                  className={`form-control ${errors.image && "invalid-input"}`}
                  placeholder="URL"
                  {...register("image", {
                    required: {
                      value: true,
                      message: "El campo es requerido",
                    },
                  })}
                  onChange={(e) => {
                    setSpecialist({
                      ...specialist,
                      image: e.target.value,
                    });
                  }}
                />
                {errors.image && (
                  <span className="text-danger">{errors.image?.message}</span>
                )}
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <label htmlFor="experience" className="form-label">
                  Experiencia laboral
                </label>
                <select
                  name="experience"
                  id="experience"
                  // If error, then add invalid-input class
                  className={`form-select ${
                    errors.experience && "invalid-input"
                  }`}
                  placeholder="Experiencia laboral"
                  {...register("experience", {
                    required: {
                      value: true,
                      message: "El campo es requerido",
                    },
                  })}
                  onChange={(e) => {
                    setSpecialist({
                      ...specialist,
                      experience: e.target.value,
                    });
                  }}
                >
                  <option value="+5 años">+5 años</option>
                  <option value="+10 años">+10 años</option>
                  <option value="+15 años">+15 años</option>
                  <option value="+20 años">+20 años</option>
                  <option value="+25 años">+25 años</option>
                  <option value="+30 años">+30 años</option>
                </select>
                {errors.experience && (
                  <span className="text-danger">
                    {errors.experience?.message}
                  </span>
                )}
              </div>
              <div className="col-md-6">
                <label htmlFor="education" className="form-label">
                  Educación
                </label>
                <input
                  type="text"
                  name="education"
                  id="education"
                  // If error, then add invalid-input class
                  className={`form-control ${
                    errors.education && "invalid-input"
                  }`}
                  placeholder="Licenciatura en psicología"
                  {...register("education", {
                    required: {
                      value: true,
                      message: "El campo es requerido",
                    },
                  })}
                  onChange={(e) => {
                    setSpecialist({
                      ...specialist,
                      education: e.target.value,
                    });
                  }}
                />
                {errors.education && (
                  <span className="text-danger">
                    {errors.education?.message}
                  </span>
                )}
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <label htmlFor="specialization1" className="form-label">
                  Especialización 1
                </label>
                <input
                  type="text"
                  name="specialization1"
                  id="specialization1"
                  // If error, then add invalid-input class
                  className={`form-control ${
                    errors.specialization1 && "invalid-input"
                  }`}
                  placeholder="Parejas"
                  {...register("specialization1", {
                    required: {
                      value: true,
                      message: "El campo es requerido",
                    },
                  })}
                  onChange={(e) => {
                    setSpecialist({
                      ...specialist,
                      specialization1: e.target.value,
                    });
                  }}
                />
                {errors.specialization1 && (
                  <span className="text-danger">
                    {errors.specialization1?.message}
                  </span>
                )}
              </div>
              <div className="col-md-6">
                <label htmlFor="specialization2" className="form-label">
                  Especialización 2
                </label>
                <input
                  type="text"
                  name="specialization2"
                  id="specialization2"
                  // If error, then add invalid-input class
                  className={`form-control ${
                    errors.specialization2 && "invalid-input"
                  }`}
                  placeholder="Adultos"
                  {...register("specialization2", {
                    required: {
                      value: true,
                      message: "El campo es requerido",
                    },
                  })}
                  onChange={(e) => {
                    setSpecialist({
                      ...specialist,
                      specialization2: e.target.value,
                    });
                  }}
                />
                {errors.specialization2 && (
                  <span className="text-danger">
                    {errors.specialization2?.message}
                  </span>
                )}
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormAddSpecialist;
