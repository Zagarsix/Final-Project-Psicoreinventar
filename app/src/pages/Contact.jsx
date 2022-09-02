import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { useForm } from "react-hook-form";
import HeaderContact from "../components/HeaderContact";
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
    watch,
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

  useEffect(() => {
    console.log(userComment);
  }, [userComment]);

  const handleUserComment = async (e) => {
    const fields = userComment; // Passing user comment state as fields

    // Fetching data from API
    const response = await fetch(`${store.apiURL}/api/service`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fields),
    });

    const { status, message, data } = await response.json();

    console.log(data);

    if (status === "success") {
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
      <main className="main-section w-100 h-100 p-3 mb-5">
        {/* <HeaderContact
          title="Contáctanos"
          description="Cuéntanos más sobre ti y nos comunicaremos contigo a la brevedad, para responder cualquier duda o consulta que tengas."
          img="https://comofuncionaque.com/wp-content/uploads/2015/09/auriculares-para-videollamadas.jpg.jpg"
          img2="https://images.squarespace-cdn.com/content/v1/51bdd6cfe4b09566e1112c43/1589638998131-G4ILO5V73CR4M1NU8BLU/zoom-video-conferencing-online-meeting-remote-workers-one-user-connected-via-laptop-with-a-grid-of-twelve-participants-on-screen-2400x1600-100837446-large.jpg"
          img3="https://img.freepik.com/vector-premium/ayuda-psicologia-online-sesion-terapia-psicologo-virtual-hombre-deprimido-consigue-terapeuta-apoyo-mental-videollamada-concepto-vector-ilustracion-apoyo-mental-linea-consulta-psicologica_102902-4483.jpg?w=2000"
        /> */}
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
                  <button className="col-md-6 btn btn-primary">
                    Contáctanos
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* <div className="col-md-6">
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="Nombre"
              placeholder="Nombre*"
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="Email"
              placeholder="Email*"
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="HowKnowPscioreinventar"
              placeholder="¿Cómo te enteraste de Psioreinventar?"
              required
            />
          </div>
        </div>
        <div ClassName="col-md-6">
          <div className="mb-3">
            <textarea
              className="form-control"
              id="HowWeCanHelpYou"
              rows={2}
              placeholder="¿Cómo podemos ayudarte?"
              required
            />
          </div>
        </div>
        <div className="col-6">
          <button class="btn btn-primary" type="submit">
            Contáctanos
          </button>
        </div> */}
      </main>
    </>
  );
};

export default Contact;
