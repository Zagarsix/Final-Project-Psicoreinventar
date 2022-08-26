import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../../../store/appContext";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const FormEditService = (props) => {
  const { store, actions } = useContext(Context);

  // React hook form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const { id } = useParams();

  /* State saving all the service data and then this state is send to the API
     to update the service*/

  const [service, setService] = useState({
    name: "",
    description: "",
    price: "",
    time: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setService({ ...service, [name]: value });
  };

  // useEffect(() => {
  //   console.log(id);
  // }, [id]);

  useEffect(() => {
    console.log(service);
  }, [service]);

  const onSubmit = (data) => console.log(data);

  // Get service by id, run this function everytime the useParams id changes
  useEffect(() => {
    const getService = async (e) => {
      const response = await fetch(`${store.apiURL}/api/services/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      // Display a certain notification based on status of the fetch data
      if (data.name) {
        setService(data);
      } else {
        toast.error("Servicio no encontrado");
      }
    };

    getService();
  }, [id]);

  const handleEditService = async () => {
    const fields = service;

    const response = await fetch(`${store.apiURL}/api/edit_service/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${store.currentUser?.access_token}`,
      },
      body: JSON.stringify(fields),
    });

    const { status, message, data } = await response.json();

    console.log(data);

    // Display a certain notification based on status of the fetch data
    if (status === "failed") {
      toast.error(message);
    }

    if (status === "success") {
      actions.getServices();
      Swal.fire({
        icon: "success",
        title: message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <>
      <div className="add-service-form">
        <div className="container">
          <form
            id="form"
            onSubmit={(e) => {
              handleSubmit(onSubmit)(e);
              handleEditService(e);
            }}
          >
            <div className="row justify-content-center">
              <div className="col-md-6">
                <label htmlFor="name" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  // If error, then add invalid-input class
                  className={`form-control ${errors.name && "invalid-input"}`}
                  placeholder="Nombre"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "El campo es requerido",
                    },
                  })}
                  value={service.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <span className="text-danger">{errors.name?.message}</span>
                )}
              </div>
              <div className="col-md-6">
                <label htmlFor="description" className="form-label">
                  Descripción
                </label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  // If error, then add invalid-input class
                  className={`form-control ${
                    errors.description && "invalid-input"
                  }`}
                  placeholder="Descripción"
                  {...register("description", {
                    required: {
                      value: true,
                      message: "El campo es requerido",
                    },
                  })}
                  value={service.description}
                  onChange={handleChange}
                />
                {errors.description && (
                  <span className="text-danger">
                    {errors.description?.message}
                  </span>
                )}
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <label htmlFor="price" className="form-label">
                  Precio
                </label>
                <select
                  name="price"
                  id="price"
                  // If error, then add invalid-input class
                  className={`form-select ${errors.price && "invalid-input"}`}
                  aria-label="select price option"
                  {...register("price", {
                    required: {
                      value: true,
                      message: "El campo es requerido",
                    },
                  })}
                  value={service.price}
                  onChange={handleChange}
                >
                  <option value="Gratis">Gratis</option>
                  <option value="30 USD">30 USD</option>
                  <option value="40 USD">40 USD</option>
                  <option value="50 USD">50 USD</option>
                </select>
                {errors.price && (
                  <span className="text-danger">{errors.price?.message}</span>
                )}
              </div>
              <div className="col-md-6">
                <label htmlFor="time" className="form-label">
                  Tiempo
                </label>
                <select
                  name="time"
                  id="time"
                  // If error, then add invalid-input class
                  className={`form-select ${errors.time && "invalid-input"}`}
                  aria-label="select time option"
                  {...register("time", {
                    required: {
                      value: true,
                      message: "El campo es requerido",
                    },
                  })}
                  value={service.time}
                  onChange={handleChange}
                >
                  <option value="30 min">30 min</option>
                  <option value="45 min">45 min</option>
                  <option value="1 hora">1 hora</option>
                </select>
                {errors.time && (
                  <span className="text-danger">{errors.time?.message}</span>
                )}
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-12">
                <label htmlFor="image" className="form-label">
                  Imagen (Link)
                </label>
                <input
                  type="text"
                  name="image"
                  id="image"
                  // If error, then add invalid-input class
                  className={`form-control ${errors.image && "invalid-input"}`}
                  placeholder="URL"
                  {...register("image", {
                    required: {
                      value: true,
                      message: "El campo es requerido",
                    },
                  })}
                  value={service.image}
                  onChange={handleChange}
                />
                {errors.image && (
                  <span className="text-danger">{errors.image?.message}</span>
                )}
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <button type="submit" className="btn btn-primary">
                  Actualizar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormEditService;
