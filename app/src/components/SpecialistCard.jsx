const SpecialistCard = () => {
  return (
    <div className="card border border-danger" id="specialistCard" style={{ width: "18rem" }}>
      <img src="http://placekitten.com/100/100" id="specialistCardImg" className="card-img-top rounded-circle" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Specialist Name</h5>
        <p className="card-text" id="specialistCardList">
          <ul>
            <li>Adolescentes y adultos, cuestiones de pareja y familiares</li>
            <li>18+ años de terapia clínica</li>
            <li>Maestría en Psicoterapia Existencial Humanista y Licenciatura en Psicología</li>
          </ul>
        </p>
        <a href="#" className="btn btn-primary">
          Agendar sesión
        </a>
      </div>
    </div>
  )
}

export default SpecialistCard