import { Link } from "react-router-dom";
import "../styles/Card.css";

const SpecialistCard = ({
  image,
  name,
  lastname,
  experience,
  education,
  specialization1,
  specialization2,
  index,
}) => {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card card-specialist h-100 p-3" id={index}>
        <img
          src={image}
          className="card-img-top rounded-circle photo m-3"
          alt="Specialist Photo"
          style={{ height: "135px", width: "135px" }}
        />
        <div className="card-body">
          <h5 className="card-title">
            {name} {""} {lastname}
          </h5>
          <ul className="doctor-info p-3 ms-1 mb-0">
            <li className="li-item mb-2 paragraph">{experience}</li>
            <li className="li-item paragraph">{education}</li>
          </ul>
          <div className="specialization-info mb-4">
            <div className="d-flex">
              <div className="pill bg-primary text-light me-2">
                {specialization1}
              </div>
              <div className="pill bg-primary text-light">
                {specialization2}
              </div>
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
    </div>
  );
};

export default SpecialistCard;
