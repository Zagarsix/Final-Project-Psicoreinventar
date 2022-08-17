import "../styles/CardClient.css";

const CardClient = ({ ImgClient, imgLabel, NameClient, AgeClient, Review }) => {
  return (
    <div
      className="card mb-3 shadow"
      style={{ border: "1px solid #0f0ff5", padding: "1rem" }}
    >
      <div className="row">
        <div className="col-7 col-sm-3 col-md-3 col-lg-3">
          <img
            src={ImgClient}
            alt={imgLabel}
            className="img-fluid foto d-flex"
          />
        </div>
        <div className="col-12 col-sm-9 col-md-9 col-lg-9 texto">
          <div className="card-body">
            <div className="col">
              <strong>
                {NameClient}, {AgeClient}
              </strong>
            </div>
            <div className="col">
              <img
                src="https://uploads-ssl.webflow.com/6165ed3d14364c7f8297fe2e/62549889a2813af0a6be7bcd_Star-yellow.svg"
                alt="star"
              />
              <img
                src="https://uploads-ssl.webflow.com/6165ed3d14364c7f8297fe2e/62549889a2813af0a6be7bcd_Star-yellow.svg"
                alt="star"
              />
              <img
                src="https://uploads-ssl.webflow.com/6165ed3d14364c7f8297fe2e/62549889a2813af0a6be7bcd_Star-yellow.svg"
                alt="star"
              />
              <img
                src="https://uploads-ssl.webflow.com/6165ed3d14364c7f8297fe2e/62549889a2813af0a6be7bcd_Star-yellow.svg"
                alt="star"
              />
              <img
                src="https://uploads-ssl.webflow.com/6165ed3d14364c7f8297fe2e/62549889a2813af0a6be7bcd_Star-yellow.svg"
                alt="star"
              />
            </div>
            <p className="card-text">{Review}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardClient;
