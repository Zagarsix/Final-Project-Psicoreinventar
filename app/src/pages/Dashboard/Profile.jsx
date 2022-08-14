import Sidebar from "../../components/Sidebar";

const Profile = () => {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <Sidebar />
        </div>
        <div className="col py-3">
          {/* inicio contenido */}
          <div
            className="container"
            style={{ backgroundColor: "#8dc2fe", fontFamily: "monospace" }}
          >
            <div className="row">
              <div className="div">
                <div className="col-md-12 p-4 my-3  text-center">
                  <h2>
                    Hola, <strong>Usuario Ficticio</strong>{" "}
                  </h2>
                </div>

                <div className="col-md-12 p-4">
                  <h6> Actualizar mis datos </h6>
                </div>
              </div>

              <form style={{ backgroundColor: "#fcfcfc", padding: "2rem" }}>
                <div className="row mb-3">
                  <label
                    htmlFor="inputName"
                    className="col-sm-1 col-form-label"
                  >
                    Nombre
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      name="name"
                      placeholder="Nombre"
                      className="form-control"
                      id="inputName"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="inputLastName"
                    className="col-sm-1 col-form-label"
                  >
                    Apellido
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      name="lastname"
                      placeholder="Apellido"
                      className="form-control"
                      id="inputLastName"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="inputEmail"
                    className="col-sm-1 col-form-label"
                  >
                    Email
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="email"
                      name="email"
                      placeholder="johndoe@gmail.com"
                      className="form-control"
                      id="inputEmail"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="inputPassword"
                    className="col-sm-1 col-form-label"
                  >
                    Password
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="password"
                      name="password"
                      placeholder="********"
                      className="form-control"
                      id="inputPassword"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn"
                  style={{ backgroundColor: "#8dc2fe" }}
                >
                  Actualizar perfil
                </button>
              </form>
            </div>
          </div>

          {/* fin contenido */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
