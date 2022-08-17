import { useContext } from "react";
import { Context } from "../store/appContext";
import Header from "../components/Header";
import Card from "../components/Card";
import SpecialistCard from "../components/SpecialistCard";
import LeftHeader from "../components/LeftHeader";
import { Link } from "react-router-dom";
import CardClient from "../components/CardClient";

const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
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

      <h2 className="fw-bold text-center">Cómo funciona</h2>
      <section className="card-section bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1 py-3">
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
     
{/*Clients review */}

<div className="container p-3">
        <div className="row ">
          <div className="col-sm-12 col-md-12 col-lg-6 pb-5 fs-6 p-2"
          style={{verticalAlign: "center", alignItems:"center"}}>
            
              <h1 className=""><strong>Lo que nuestros clientes opinan</strong></h1> 
              <p className="">Nuestro principal objetivo es crear un ambiente de plena confianza entre los especialistas y nuestros clientes con el objetivo de que se conviertan en su mejor versión.</p>
            
            <button
            className="col-12 col-sm-12 col-md-12 col-lg-6 btn btn-primary p-3 fs-5"
            style={{padding:""}}
            >Agendar sesión
            </button>
          </div>

          <div className="col-sm-12 col-md-10 col-lg-6">

            <CardClient 
            ImgClient="https://uploads-ssl.webflow.com/6165ed3d14364c7f8297fe2e/620d509f475bbb766fc9b204_4.png"
            imgLabel="CardImgClient"
            NameClient="Laura"
            AgeClient="27 años"
            Review="Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat dui vehicula erat, sodales odio felis nostra"
            />
            <CardClient 
            ImgClient="https://uploads-ssl.webflow.com/6165ed3d14364c7f8297fe2e/620d508cd3237eb424b497fc_2.png"
            imgLabel="CardImgClient"
            NameClient="Mateo"
            AgeClient="32 años"
            Review="Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat dui vehicula erat, sodales odio felis nostra"
            />
            <CardClient 
            ImgClient="https://uploads-ssl.webflow.com/6165ed3d14364c7f8297fe2e/620d50e0f373ab219ce4dc84_5.png"
            imgLabel="CardImgClient"
            NameClient="Carolina"
            AgeClient="23 años"
            Review="Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat dui vehicula erat, sodales odio felis nostra"
            />
            <CardClient 
            ImgClient="https://uploads-ssl.webflow.com/6165ed3d14364c7f8297fe2e/620d5115844b6721a99f62e6_6.png"
            imgLabel="CardImgClient"
            NameClient="Juan"
            AgeClient="27 años"
            Review="Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat dui vehicula erat, sodales odio felis nostra"
            />

          </div>
        </div>
      </div>

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
