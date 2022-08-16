import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Card from "../components/Card";
import LeftHeader from "../components/LeftHeader";
import CardClient from "../components/CardClient";
import ServiceCard from "../components/ServiceCard";
import SpecialistCard from "../components/SpecialistCard";

const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      {/* Main Header */}
      <main className="main-section w-100 h-100 p-3 mb-5">
        <Header
          title="La salud mental"
          title_highlight="es importante"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Molestias atque itaque illo enim quidem at ad voluptatibus,
        nesciunt quia alias optio debitis quam suscipit, quod animi
        delectus veritatis! Saepe, maxime."
          btnLabel="Agendar cita"
          img="https://uploads-ssl.webflow.com/6165ed3d14364c7f8297fe2e/6255ce36e7efb7be217ba6c3_woman-laptop-couch.png"
          imgLabel="Doctor"
        />
      </main>

      {/* Cómo funciona Section */}
      <h2 className="fw-bold text-center mb-3">Cómo funciona</h2>
      <section className="card-section bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1 py-4">
              <div className="row justify-content-between gy-3">
                <div className="col-md-6 col-lg-4">
                  <Card
                    img="https://uploads-ssl.webflow.com/6165ed3d14364c7f8297fe2e/62558a4ebfab0b487ff53146_steps-icon1.svg"
                    imgLabel="specialists-icon"
                    title="1. Elige al especialista"
                    description="Puedes elegir dentro de los diferentes perfiles con los que contamos."
                  />
                </div>
                <div className="col-md-6 col-lg-4">
                  <Card
                    img="https://uploads-ssl.webflow.com/6165ed3d14364c7f8297fe2e/62558af73f29166024b10686_steps-icon2.svg"
                    imgLabel="specialists-icon"
                    title="2. Elige un horario"
                    description="Con base a los horarios disponibles, elige el que más te acomode."
                  />
                </div>
                <div className="col-md-6 col-lg-4">
                  <Card
                    img="https://uploads-ssl.webflow.com/6165ed3d14364c7f8297fe2e/62558af721df57b8f5bc098b_steps-icon3.svg"
                    imgLabel="specialists-icon"
                    title="3. Ingresa tus datos"
                    description="Vamos a necesitar tu nombre, email, teléfono y medio de pago"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Left Header */}
      <LeftHeader
        img="https://uploads-ssl.webflow.com/6165ed3d14364c7f8297fe2e/6261a30dc74af77c2d5d2e9c_ilust-woman-waving-cropped-p-500.png"
        title="Cientos de clientes viven"
        title_highlight="más felices"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id illum dignissimos eos non quibusdam cupiditate, omnis nesciunt officia molestiae corrupti odio sint sit doloremque incidunt soluta, et nemo harum. Facere!"
      />
      {/*Clients review */}

      {/* Services Section */}
      <h2 className="fw-bold text-center mb-3">Nuestros servicios</h2>
      <section className="card-section bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1 py-4">
              <div className="row justify-content-between gy-3">
                <div className="col-md-6 col-lg-4">
                  <ServiceCard
                    img="https://uploads-ssl.webflow.com/6165ed3d14364c7f8297fe2e/62558793a951d723d8150c4a_plans-icon-1.png"
                    title="Consulta inicial"
                    time="30 min"
                    price="Gratis"
                  />
                </div>
                <div className="col-md-6 col-lg-4">
                  <ServiceCard
                    img="https://uploads-ssl.webflow.com/6165ed3d14364c7f8297fe2e/62558793a951d723d8150c4a_plans-icon-1.png"
                    title="Consulta con servicio"
                    time="45 min"
                    price="35 USD"
                  />
                </div>
                <div className="col-md-6 col-lg-4">
                  <ServiceCard
                    img="https://uploads-ssl.webflow.com/6165ed3d14364c7f8297fe2e/62558793a951d723d8150c4a_plans-icon-1.png"
                    title="Otra consulta"
                    time="1 hr"
                    price="50 USD"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center mt-5">
        <h1>Hello, home here!!!</h1>
        <div className="alert alert-info">
          {store.message ||
            "Loading message from the backend (make sure your python backend is running)..."}
        </div>
      </div>
    </>
  );
};

export default Home;
