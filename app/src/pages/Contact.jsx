import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { useForm } from "react-hook-form";
import Header from "../components/Header";
import headerImg from "../img/customer-support.png";

const Contact = (props) => {
  // Using context
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {}, []);

  // React hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const [userComment, setUserComment] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserComment({ ...userComment, [name]: value });
  };

  // useEffect(() => {
  //   console.log(userComment);
  // }, [userComment]);

  const handleUserComment = async (e) => {
    const fields = userComment; // Passing user comment state as fields

    // Fetching data from API
    const response = await fetch(`${store.apiURL}/api/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fields),
    });

    const { status, message, data } = await response.json();

    console.log(data);

    if (status === "failed") {
      toast.error(message);
    }

    if (status === "success") {
      Swal.fire({
        icon: "success",
        title: message,
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  return (
    <>
      <main className="main-section w-100 h-100 p-3 mb-5">
        <Header
          title="Contáctanos"
          description="Cuéntanos más sobre ti y nos comunicaremos contigo a la brevedad, para responder cualquier duda o consulta que tengas."
          btnLabel="Agendar cita"
          img={headerImg}
          imgLabel="customer-support"
        />
        <div className="contact-cta">
          <div className="container">
            <h4 className="text-primary">Ingresa tus datos:</h4>
          </div>
        </div>
        <div className="register-form">
          <div className="container">
            <form
              onSubmit={(e) => {
                handleSubmit(onSubmit)(e);
                handleSubmit(handleUserComment)(e);
              }}
              id="form"
            >
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">
                    Nombre y Apellido
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    // If error, then add invalid-input class
                    className={`form-control ${errors.name && "invalid-input"}`}
                    placeholder="John Doe"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "El campo es requerido",
                      },
                      pattern: {
                        value: /^[a-zA-ZÀ-ú_]+( [,a-zA-ZÀ-ú_]+)*$/,
                        message: "El formato no es el correcto",
                      },
                    })}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <span className="text-danger">{errors.name?.message}</span>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="inputEmail1" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="inputEmail1"
                    // If error, then add invalid-input class
                    className={`form-control ${
                      errors.email && "invalid-input"
                    }`}
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
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <span className="text-danger">{errors.email?.message}</span>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label
                    htmlFor="inputFoundPsicoreinventar"
                    className="form-label"
                  >
                    ¿Cómo te enteraste de Psicoreinventar?
                  </label>
                  <input
                    type="text"
                    name="found_psicoreinventar"
                    id="inputFoundPsicoreinventar"
                    // If error, then add invalid-input class
                    className={`form-control ${
                      errors.found_psicoreinventar && "invalid-input"
                    }`}
                    placeholder="Un amigo"
                    {...register("found_psicoreinventar", {
                      required: {
                        value: true,
                        message: "El campo es requerido",
                      },
                    })}
                    onChange={handleChange}
                  />
                  {errors.found_psicoreinventar && (
                    <span className="text-danger">
                      {errors.found_psicoreinventar?.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="inputHowWeCanHelp" className="form-label">
                    ¿Cómo podemos ayudarte?
                  </label>
                  <input
                    type="text"
                    name="psicoreinventar_help"
                    id="inputHowWeCanHelp"
                    // If error, then add invalid-input class
                    className={`form-control ${
                      errors.psicoreinventar_help && "invalid-input"
                    }`}
                    placeholder="Me gustaría saber..."
                    {...register("psicoreinventar_help", {
                      required: {
                        value: true,
                        message: "El campo es requerido",
                      },
                    })}
                    onChange={handleChange}
                  />
                  {errors.psicoreinventar_help && (
                    <span className="text-danger">
                      {errors.psicoreinventar_help?.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="container mt-4 mb-3">
                  <button type="submit" className="col-md-6 btn btn-primary">
                    Contáctanos
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
