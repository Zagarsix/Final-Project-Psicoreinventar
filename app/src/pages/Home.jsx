import { useContext } from "react";
import { Context } from "../store/appContext";
import Header from "../components/Header";
import Card from "../components/Card";

const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <Header
        title="Project"
        title_highlight="Incoming"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Molestias atque itaque illo enim quidem at ad voluptatibus,
        nesciunt quia alias optio debitis quam suscipit, quod animi
        delectus veritatis! Saepe, maxime."
        btnLabel="Agenda una cita"
        img="https://uploads-ssl.webflow.com/6165ed3d14364c7f8297fe2e/6255ce36e7efb7be217ba6c3_woman-laptop-couch.png"
        imgLabel="Doctor"
      />
      <h2 className="fw-bold text-center">Cómo funciona</h2>
      <section className="card-section bg-warning">
        <div className="container d-flex justify-content-center align-items-center">
          <Card
            img="https://uploads-ssl.webflow.com/6165ed3d14364c7f8297fe2e/62558a4ebfab0b487ff53146_steps-icon1.svg"
            imgLabel="specialists-icon"
            title="1. Elige al especialista"
            description="Puedes elegir dentro de los diferentes perfiles con los que contamos."
          />
          <Card
            img="https://uploads-ssl.webflow.com/6165ed3d14364c7f8297fe2e/62558af73f29166024b10686_steps-icon2.svg"
            imgLabel="specialists-icon"
            title="2. Elige un horario"
            description="Con base a los horarios disponibles, elige el que más te acomode."
          />
          <Card
            img="https://uploads-ssl.webflow.com/6165ed3d14364c7f8297fe2e/62558af721df57b8f5bc098b_steps-icon3.svg"
            imgLabel="specialists-icon"
            title="3. Ingresa tus datos"
            description="Vamos a necesitar tu nombre, email, teléfono y medio de pago"
          />
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
