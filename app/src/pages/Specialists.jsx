import Header from "../components/Header";
import SpecialistCard from "../components/SpecialistCard";
import "../styles/Specialists.css";

const Specialists = () => {
  return (
    <>
      <main className="main-section w-100 h-100 p-3 mb-5">
        <Header
          title="Specialists"
          title_highlight="Page"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Molestias atque itaque illo enim quidem at ad voluptatibus,
        nesciunt quia alias optio debitis quam suscipit, quod animi
        delectus veritatis! Saepe, maxime."
          btnLabel="Agendar cita"
          img="https://uploads-ssl.webflow.com/6165ed3d14364c7f8297fe2e/62825881dce5c040e3fda9b9_woman-using-tablet.png"
          imgLabel="Doctor"
        />
        <div className="container specialists-available">
          <h4>Especialistas disponibles</h4>
          <p className="fw-semibold lead text-secondary">
            Mostrando <span className="text-primary">10</span> resultados
          </p>
        </div>
      </main>

      <section className="card-section bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1 py-4">
              <div className="row justify-content-between gy-3">
                <div className="col-md-6 col-lg-4">
                  <SpecialistCard
                    img="http://placekitten.com/100/100"
                    imgLabel="Specialist 1"
                    title="Daniela Guerrero"
                    experience="5+ años de terapia clínica"
                    education="Maestría en Psicoterapia Gestalt y Educación, Licenciatura en Psicología"
                    specialization1="Parejas"
                    specialization2="Adultos"
                  />
                </div>
                <div className="col-md-6 col-lg-4">
                  <SpecialistCard
                    img="http://placekitten.com/100/100"
                    imgLabel="Specialist 1"
                    title="Daniela Guerrero"
                    experience="5+ años de terapia clínica"
                    education="Maestría en Psicoterapia Gestalt y Educación, Licenciatura en Psicología"
                    specialization1="Parejas"
                    specialization2="Adultos"
                  />
                </div>
                <div className="col-md-6 col-lg-4">
                  <SpecialistCard
                    img="http://placekitten.com/100/100"
                    imgLabel="Specialist 1"
                    title="Daniela Guerrero"
                    experience="5+ años de terapia clínica"
                    education="Maestría en Psicoterapia Gestalt y Educación, Licenciatura en Psicología"
                    specialization1="Parejas"
                    specialization2="Adultos"
                  />
                </div>
                <div className="col-md-6 col-lg-4">
                  <SpecialistCard
                    img="http://placekitten.com/100/100"
                    imgLabel="Specialist 1"
                    title="Daniela Guerrero"
                    experience="5+ años de terapia clínica"
                    education="Maestría en Psicoterapia Gestalt y Educación, Licenciatura en Psicología"
                    specialization1="Parejas"
                    specialization2="Adultos"
                  />
                </div>
                <div className="col-md-6 col-lg-4">
                  <SpecialistCard
                    img="http://placekitten.com/100/100"
                    imgLabel="Specialist 1"
                    title="Daniela Guerrero"
                    experience="5+ años de terapia clínica"
                    education="Maestría en Psicoterapia Gestalt y Educación, Licenciatura en Psicología"
                    specialization1="Parejas"
                    specialization2="Adultos"
                  />
                </div>
                <div className="col-md-6 col-lg-4">
                  <SpecialistCard
                    img="http://placekitten.com/100/100"
                    imgLabel="Specialist 1"
                    title="Daniela Guerrero"
                    experience="5+ años de terapia clínica"
                    education="Maestría en Psicoterapia Gestalt y Educación, Licenciatura en Psicología"
                    specialization1="Parejas"
                    specialization2="Adultos"
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
