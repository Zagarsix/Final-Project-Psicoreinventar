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
import headerImg from "../img/82910-psychotherapy.gif";
import ServiceCardShowCase from "../components/ServiceCardShowCase";

const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      {/* Main Header */}
      <main className="main-section w-100 h-100 p-3 mb-5">
        <Header
          title="El bienestar comienza con la"
          title_highlight="salud mental"
          description="Buscamos mejorar la calidad de vida de las personas, a través de la entrega de servicios integrales en salud mental, emocional y conductual personalizados."
          btnLabel="Agendar cita"
          img={headerImg}
          imgLabel="psychology-session-animation"
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
        title="Ahora más que nunca "
        title_highlight="estamos contigo."
        description="En este proceso la guía y contención emocional es fundamental. Brindar un servicio integral y personalizado de forma online a manos de expertos es nuestra misión."
      />
      {/*Clients review */}

      {/*Clients review */}
      <div className="clients-review p-3 mb-5">
        <div className="container p-3">
          <div className="row justify-content-center align-items-center clients-header-text">
            <div className="col-sm-12 col-md-12 col-lg-6 pb-5 fs-6 p-2">
              <h1 className="">
                <strong>Clientes más felices</strong>
              </h1>
              <p className="my-3">
                Nuestro principal objetivo es que encuentres un especialista
                adecuado a tus necesidades para que así puedas mejorar tu
                calidad de vida y ser la mejor versión de ti mismo.
              </p>

              <Link className="col-6 btn btn-primary py-2" to="/appointment">
                Agendar sesión
              </Link>
            </div>

            <div className="col-sm-12 col-md-10 col-lg-6">
              <CardClient
                ImgClient="https://uploads-ssl.webflow.com/6165ed3d14364c7f8297fe2e/620d509f475bbb766fc9b204_4.png"
                imgLabel="CardImgClient"
                NameClient="Laura"
                AgeClient="27 años"
                Review="Luego de un año en terapia puedo notar mejorías. Tenía muchos prejuicios sobre tomar terapia pero lo personalizado del servicio me hizo tomar la decisión y no me arrepiento."
              />
              <CardClient
                ImgClient="https://uploads-ssl.webflow.com/6165ed3d14364c7f8297fe2e/620d508cd3237eb424b497fc_2.png"
                imgLabel="CardImgClient"
                NameClient="Mateo"
                AgeClient="32 años"
                Review="Lo personalizado del servicio me permitió escoger un profesional ajustado a mis necesidades y en horarios que realmente me acomodan. Agradezco el profesionalismo del especialista, me ha guiado de forma certera en todo mi proceso."
              />
              <CardClient
                ImgClient="https://uploads-ssl.webflow.com/6165ed3d14364c7f8297fe2e/620d50e0f373ab219ce4dc84_5.png"
                imgLabel="CardImgClient"
                NameClient="Carolina"
                AgeClient="23 años"
                Review="El proceso de sanar ha sido difícil pero mi terapeuta me ha acompañado en todo momento de forma amable y respetuosa. Sin duda alguna recomiendo el servicio."
              />
              <CardClient
                ImgClient="https://uploads-ssl.webflow.com/6165ed3d14364c7f8297fe2e/620d5115844b6721a99f62e6_6.png"
                imgLabel="CardImgClient"
                NameClient="Juan"
                AgeClient="27 años"
                Review="Después de un tiempo intentando solucionar los problemas en mi relación tomar terapia sin duda alguna fue la mejor decisión. Las sesiones han sido provechosas y han aportado a mejorar las dinámicas con mi pareja. Excelente servicio."
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <h2 className="fw-bold text-center mb-3">Nuestros servicios</h2>
      <section className="card-section bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1 py-4">
              <div className="row justify-content-between gy-3">
                {!!store.services &&
                  store.services.length > 0 &&
                  store.services.map((service, i) => (
                    <ServiceCardShowCase
                      {...service}
                      key={i}
                      index={service.id}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
