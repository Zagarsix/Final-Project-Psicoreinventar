const Header = ({
  title,
  title_highlight,
  description,
  btnLabel,
  img,
  imgLabel,
}) => {
  return (
    <main className="main-section w-100 h-100 p-5">
      <div className="container">
        <div className="d-sm-flex justify-content-center align-items-center">
          <div className="left-column w-50">
            <h1 className="fw-bold">
              {title} <span className="text-primary">{title_highlight}</span>
            </h1>
            <p className="my-4">{description}</p>
            <button className="btn btn-primary">{btnLabel}</button>
          </div>
          <div className="main-image w-50">
            <img src={img} className="img-fluid w-100" alt={imgLabel} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;
