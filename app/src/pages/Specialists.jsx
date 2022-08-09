import Header from "../components/Header";
import Card from "../components/Card";

const Specialists = () => {
  return (
    <>
      <div className="specialists-section w-100 h-100 p-3 mb-5">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <Header
              title="Specialists"
              title_highlight="Page"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, vero. Nobis veniam tempora, aliquid, ut tempore vel asperiores eum sint nam, fugiat amet odit a cumque voluptate consequuntur ex magni."
              btnLabel="Agendar cita"
              img="https://uploads-ssl.webflow.com/6165ed3d14364c7f8297fe2e/62825881dce5c040e3fda9b9_woman-using-tablet.png"
              imgLabel="Person"
            />
            <div className="container">
              <h4>Especialistas disponibles</h4>
              <p className="fw-semibold lead text-secondary">
                Mostrando <span className="text-primary">10</span> resultados
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="card-section bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1 py-3">
              <div className="row">
                <div className="col-md-4">
                  <Card
                    img="https://uploads-ssl.webflow.com/6165ed3d14364c7f8297fe2e/62558a4ebfab0b487ff53146_steps-icon1.svg"
                    imgLabel="specialists-icon"
                    title="1. Elige al especialista"
                    description="Puedes elegir dentro de los diferentes perfiles con los que contamos."
                  />
                </div>
                <div className="col-md-4">
                  <Card
                    img="https://uploads-ssl.webflow.com/6165ed3d14364c7f8297fe2e/62558af73f29166024b10686_steps-icon2.svg"
                    imgLabel="specialists-icon"
                    title="2. Elige un horario"
                    description="Con base a los horarios disponibles, elige el que más te acomode."
                  />
                </div>
                <div className="col-md-4">
                  <Card
                    img="https://uploads-ssl.webflow.com/6165ed3d14364c7f8297fe2e/62558af721df57b8f5bc098b_steps-icon3.svg"
                    imgLabel="specialists-icon"
                    title="3. Ingresa tus datos"
                    description="Vamos a necesitar tu nombre, email, teléfono y medio de pago"
                  />
                </div>
                <div className="col-md-4">
                  <Card
                    img="https://uploads-ssl.webflow.com/6165ed3d14364c7f8297fe2e/62558af721df57b8f5bc098b_steps-icon3.svg"
                    imgLabel="specialists-icon"
                    title="3. Ingresa tus datos"
                    description="Vamos a necesitar tu nombre, email, teléfono y medio de pago"
                  />
                </div>
                <div className="col-md-4">
                  <Card
                    img="https://uploads-ssl.webflow.com/6165ed3d14364c7f8297fe2e/62558af721df57b8f5bc098b_steps-icon3.svg"
                    imgLabel="specialists-icon"
                    title="3. Ingresa tus datos"
                    description="Vamos a necesitar tu nombre, email, teléfono y medio de pago"
                  />
                </div>
                <div className="col-md-4">
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
    </>
  );
};

export default Specialists;
