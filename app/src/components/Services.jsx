import ServiceCard from "./ServiceCard";

const Services = (props) => {
  return (
    <>
      <section className="card-section bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1 py-3">
              <div className="row align-items-center justify-content-between gy-4">
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
          <button onClick={props.previousStep}>Previous</button>
          <button onClick={props.nextStep}>Next</button>
        </div>
      </section>
    </>
  );
};

export default Services;
