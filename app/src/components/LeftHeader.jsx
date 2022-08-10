const LeftHeader = ({ img, imgLabel, title, title_highlight, description }) => {
  return (
    <>
      <div className="left-header p-3 mb-5">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6 text-center">
              <img
                src={img}
                className="img-fluid mx-auto"
                alt={imgLabel}
                style={{ maxWidth: "90%" }}
              />
            </div>
            <div className="col-md-6">
              <h1 className="fw-bold">
                {title} <span className="text-primary">{title_highlight}</span>
              </h1>
              <p className="my-4">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftHeader;
