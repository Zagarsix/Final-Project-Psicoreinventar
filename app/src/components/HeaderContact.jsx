import { Link } from "react-router-dom";
import "../styles/HeaderContact.css"

const HeaderContact = ({
    title,
    description,
    img,
    imgLabel,
    img2,
    imgLabel2,
    img3,
    imgLabel3,
}) => {
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-6 gy-3">
                    <h1 className="fw-bold display-4 mb-3">
                        {title}
                    </h1>
                    <p className="mt-2 mb-3 paragraph">{description}</p>
                </div>
                <div className="col-md-6 text-center">
                    <img
                        src={img}
                        id="img1"
                        className="img-fluid mx-auto"
                        alt={imgLabel}
                        style={{ maxWidth: "50%" }}
                    />
                    <img
                        src={img2}
                        id="img2"
                        className="img-fluid mx-auto"
                        alt={imgLabel2}
                        style={{ maxWidth: "50%" }}
                    />
                    <img
                        src={img3}
                        id="img3"
                        className="img-fluid mx-auto"
                        alt={imgLabel3}
                        style={{ maxWidth: "80%" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default HeaderContact;
