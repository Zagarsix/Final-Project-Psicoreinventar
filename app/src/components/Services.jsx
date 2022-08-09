import Card from "./Card";

const Services = (props) => {
  return (
    <>
      <section className="card-section bg-primary p-3">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1 py-3">
              <div className="row">
                <div className="col-md-4">
                  <Card
                    img="https://uploads-ssl.webflow.com/6165ed3d14364c7f8297fe2e/62558793a951d723d8150c4a_plans-icon-1.png"
                    imgLabel="service-icon"
                    title="Consulta inicial"
                    description="0$"
                  />
                </div>
                <div className="col-md-4">
                  <Card
                    img="https://uploads-ssl.webflow.com/6165ed3d14364c7f8297fe2e/625587931b22966fd8863503_plans-icon-2.png"
                    imgLabel="service-icon"
                    title="Consulta de pareja"
                    description="35$"
                  />
                </div>
                <div className="col-md-4">
                  <Card
                    img="https://uploads-ssl.webflow.com/6165ed3d14364c7f8297fe2e/6255879343a0bbe8792b299d_plans-icon-3.png"
                    imgLabel="service-icon"
                    title="Otra consulta"
                    description="40$"
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

export default Services;
