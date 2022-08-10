const Header = ({
  title,
  title_highlight,
  description,
  btnLabel,
  img,
  imgLabel,
}) => {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6 gy-3">
          <h1 className="fw-bold display-4">
            {title} <span className="text-primary">{title_highlight}</span>
          </h1>
          <p className="mt-2 mb-3">{description}</p>
          <button
            className="btn btn-primary btn-md appointment-btn"
            style={{ padding: ".5em 2em" }}
          >
            {btnLabel}
          </button>
        </div>
        <div className="col-md-6 text-center">
          <img
            src={img}
            className="img-fluid mx-auto"
            alt={imgLabel}
            style={{ maxWidth: "90%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
