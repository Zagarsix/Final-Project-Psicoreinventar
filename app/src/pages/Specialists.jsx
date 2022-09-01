import { useContext } from "react";
import { Context } from "../store/appContext";
import Header from "../components/Header";
import SpecialistCard from "../components/SpecialistCard";
import "../styles/Specialists.css";
import headerImg from "../img/specialist-appointment.png";

const Specialists = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <main className="main-section w-100 h-100 p-3 mb-5">
        <Header
          title="Nuestros"
          title_highlight="especialistas"
          description="Todos nuestros especialistas pasan por un riguroso proceso de validación (tanto de sus credenciales, como profesional). Agenda para comenzar tu proceso psicoterapéutico de la mejor manera."
          btnLabel="Agendar cita"
          img={headerImg}
          // img="https://uploads-ssl.webflow.com/6165ed3d14364c7f8297fe2e/62825881dce5c040e3fda9b9_woman-using-tablet.png"
          imgLabel="Doctor"
        />
        <div className="container specialists-available">
          <h4>Especialistas disponibles</h4>
          <p className="fw-semibold lead text-secondary">
            Mostrando{" "}
            <span className="text-primary">{store.doctors?.length || 0}</span>{" "}
            resultados
          </p>
        </div>
      </main>

      <section className="card-section bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1 py-4">
              <div className="row justify-content-between gy-3">
                {!!store.doctors &&
                  store.doctors.length > 0 &&
                  store.doctors.map((doctor, i) => (
                    <SpecialistCard {...doctor} key={i} index={doctor.id} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Specialists;
