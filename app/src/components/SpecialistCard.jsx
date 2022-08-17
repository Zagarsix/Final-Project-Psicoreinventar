import "../styles/Card.css";

const SpecialistCard = ({
  img,
  imgLabel,
  title,
  experience,
  education,
  specialization1,
  specialization2,
}) => {
  return (
    <div className="card h-100" style={{ width: "18rem" }}>
      <img
        src={img}
        className="card-img-top rounded-circle photo mx-auto m-3"
        alt={imgLabel}
        style={{ height: "135px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <ul className="doctor-info">
          <li className="li-item">{experience}</li>
          <li className="li-item">{education}</li>
        </ul>
        <div className="specialization-info">
          <span className="badge rounded-pill text-bg-primary">
            {specialization1}
          </span>
          <span className="badge rounded-pill text-bg-primary">
            {specialization2}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SpecialistCard;
