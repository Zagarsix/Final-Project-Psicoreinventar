import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../../../store/appContext";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import "../../../styles/Appointment.css";

const FormEditSpecialist = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  // React hook form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const { id } = useParams();

  const [showPassword, setShowPassword] = useState(false);

  /* State saving all the doctor data and then this state is send to the API
     to update the doctor*/

  const [doctor, setDoctor] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
    is_active: "",
    experience: "",
    education: "",
    specialization1: "",
    specialization2: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctor({ ...doctor, [name]: value });
  };

  //   useEffect(() => {
  //     console.log(id);
  //   }, [id]);

  //   useEffect(() => {
  //     console.log(doctor);
  //   }, [doctor]);

  //   const onSubmit = (data) => {
  //     console.log(data);
  //   };

  // Get doctor by id, run this function everytime the useParams id changes
  useEffect(() => {
    const getDoctor = async (e) => {
      const response = await fetch(`${store.apiURL}/api/users/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      // Display a certain notification based on status of the fetch data
      if (data.name) {
        setDoctor(data);
      } else {
        toast.error("Servicio no encontrado");
      }
    };

    getDoctor();
  }, [id]);

  const handleEditDoctor = async () => {
    const fields = doctor;

    const response = await fetch(`${store.apiURL}/api/edit_user/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${store.currentUser?.access_token}`,
      },
      body: JSON.stringify(fields),
    });

    const { status, message, data } = await response.json();

    // console.log(data);

    if (status === "failed") {
      toast.error(message);
    }

    if (status === "success") {
      actions.getDoctors();
      navigate("/admin");
      Swal.fire({
        icon: "success",
        title: message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <>
      <div className="bg-primary py-4">
        <div
          className="card appointment-step-container py-4 mx-auto"
          style={{ minHeight: "505px", borderRadius: "5px" }}
        >
          <div className="edit-form-container">
            <h1 className="edit-form-header text-center mb-4">
              Editar Especialista
            </h1>
            <div className="container" style={{ maxWidth: "850px" }}>
              <form
                id="form"
                onSubmit={(e) => {
                  //   handleSubmit(onSubmit)(e);
                  handleSubmit(handleEditDoctor)(e);
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
                      className={`form-control ${
                        errors.name && "invalid-input"
                      }`}
                      placeholder="Nombre"
                      {...register("name", {
                        pattern: {
                          value: /^[A-zÀ-ú]+$/,
                          message: "El formato no es el correcto",
                        },
                      })}
                      value={doctor.name}
                      onChange={handleChange}
                    />
                    {errors.name && (
                      <span className="text-danger">
                        {errors.name?.message}
                      </span>
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
                        pattern: {
                          value: /^[A-zÀ-ú]+$/,
                          message: "El formato no es el correcto",
                        },
                      })}
                      value={doctor.lastname}
                      onChange={handleChange}
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
                      type="email"
                      name="email"
                      id="email"
                      // If error, then add invalid-input class
                      className={`form-control ${
                        errors.email && "invalid-input"
                      }`}
                      placeholder="johndoe@gmail.com"
                      {...register("email", {
                        pattern: {
                          value:
                            // RFC 5322 regex
                            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                          message: "El formato no es el correcto",
                        },
                      })}
                      value={doctor.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <span className="text-danger">
                        {errors.email?.message}
                      </span>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="password" className="form-label">
                      Contraseña
                    </label>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      // If error, then add invalid-input class
                      className={`form-control ${
                        errors.password && "invalid-input"
                      }`}
                      placeholder="Contraseña"
                      {...register("password", {
                        pattern: {
                          value:
                            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                          message:
                            "La contraseña debe tener al menos 8 caracteres, incluyendo al menos: 1 mayúscula, 1 número y 1 carácter especial",
                        },
                      })}
                      defaultValue={doctor.password}
                      onChange={handleChange}
                    />
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
                      className={`form-control ${
                        errors.phone && "invalid-input"
                      }`}
                      placeholder="Teléfono"
                      {...register("phone", {
                        pattern: {
                          value: /^\d{8,12}$/,
                          message: "Minimo 8 caracteres, Maximo 12",
                        },
                      })}
                      value={doctor.phone}
                      onChange={handleChange}
                    />

                    {errors.phone && (
                      <span className="text-danger">
                        {errors.phone?.message}
                      </span>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="is_active" className="form-label">
                      Is Active
                    </label>
                    <select
                      name="is_active"
                      id="is_active"
                      // If error, then add invalid-input class
                      className={`form-select ${
                        errors.is_active && "invalid-input"
                      }`}
                      aria-label="select is_active option"
                      {...register("is_active", {})}
                      value={doctor.is_active}
                      // onChange={handleChange}
                      onChange={(e) => {
                        setDoctor({
                          ...doctor,
                          is_active: Number(e.target.value),
                        });
                      }}
                    >
                      <option value="1">1</option>
                      <option value="0">0</option>
                    </select>
                    {errors.is_active && (
                      <span className="text-danger">
                        {errors.is_active?.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <label htmlFor="experience" className="form-label">
                      Experiencia laboral
                    </label>
                    <input
                      type="text"
                      name="experience"
                      id="experience"
                      // If error, then add invalid-input class
                      className={`form-control ${
                        errors.experience && "invalid-input"
                      }`}
                      placeholder="5+ años de terapia conductual"
                      {...register("experience", {})}
                      value={doctor.experience}
                      onChange={handleChange}
                    />
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
                      {...register("education", {})}
                      value={doctor.education}
                      onChange={handleChange}
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
                      placeholder="Adultos"
                      {...register("specialization1", {})}
                      value={doctor.specialization1}
                      onChange={handleChange}
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
                      placeholder="Parejas"
                      {...register("specialization2", {})}
                      value={doctor.specialization2}
                      onChange={handleChange}
                    />
                    {errors.specialization2 && (
                      <span className="text-danger">
                        {errors.specialization2?.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <label htmlFor="image" className="form-label">
                      Imagen (Link)
                    </label>
                    <input
                      type="text"
                      name="image"
                      id="image"
                      // If error, then add invalid-input class
                      className={`form-control ${
                        errors.image && "invalid-input"
                      }`}
                      placeholder="URL"
                      {...register("image", {
                        pattern: {
                          value:
                            /^(?:https?:\/\/(?:www\.)?|https:(?:\/\/)?)?\w+(?:[-.]\w+)+(?:\/[^\/\s]+)*$/,
                          message: "El formato no es el correcto",
                        },
                      })}
                      value={doctor.image}
                      onChange={handleChange}
                    />
                    {errors.image && (
                      <span className="text-danger">
                        {errors.image?.message}
                      </span>
                    )}
                  </div>
                  <div className="col-md-6"></div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <button type="submit" className="btn btn-primary">
                      Actualizar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormEditSpecialist;
