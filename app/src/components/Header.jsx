import "../styles/Header.css";

const Header = ({
  title,
  title_highlight,
  description,
  btnLabel,
  img,
  imgLabel,
}) => {
  return (
    <main className="main-section w-100 h-100 p-3 mb-5">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6">
            <h1 className="fw-bold display-4">
              {title} <span className="text-primary">{title_highlight}</span>
            </h1>
            <p className="my-4">{description}</p>
            <button className="btn btn-primary btn-md">{btnLabel}</button>
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
    </main>
  );
};

export default Header;
