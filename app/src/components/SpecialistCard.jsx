import { Link } from "react-router-dom";
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
    <div className="card card-specialist h-100 p-3">
      <img
        src={img}
        className="card-img-top rounded-circle photo m-3"
        alt={imgLabel}
        style={{ height: "135px", width: "135px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <ul className="doctor-info p-3 ms-1 mb-0">
          <li className="li-item mb-2">{experience}</li>
          <li className="li-item">{education}</li>
        </ul>
        <div className="specialization-info mb-4">
          <div className="d-flex">
            <div className="pill bg-primary text-light me-2">
              {specialization1}
            </div>
            <div className="pill bg-primary text-light">{specialization2}</div>
          </div>
        </div>
        <Link
          className="btn btn-primary specialist-appointment px-4 mt-3"
          to="/appointment"
        >
          Agendar
        </Link>
      </div>
    </div>
  );
};

export default SpecialistCard;
