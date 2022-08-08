const LeftHeader = ({ img, imgLabel, title, title_highlight, description }) => {
  return (
    <>
      <div className="container left-header">
        <div className="d-sm-flex justify-content-center align-items-center">
          <div className="main-image w-50">
            <img src={img} className="img-fluid" alt={imgLabel} />
          </div>
          <div className="right-column w-50">
            <h1 className="fw-bold">
              {title} <span className="text-primary">{title_highlight}</span>
            </h1>
            <p className="my-4">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftHeader;
