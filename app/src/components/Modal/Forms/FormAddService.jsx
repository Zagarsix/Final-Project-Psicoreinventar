import { useContext } from "react";
import { Context } from "../../../store/appContext";

const FormAddService = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="add-service-form">
        <div className="container">
          <form id="form">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <label htmlFor="name" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="description" className="form-label">
                  Descripción
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="description"
                  id="description"
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <label htmlFor="price" className="form-label">
                  Precio
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="price"
                  id="price"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="time" className="form-label">
                  Tiempo
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="time"
                  id="time"
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-12">
                <label htmlFor="image" className="form-label">
                  Imagen (Link)
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="image"
                  id="image"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormAddService;
