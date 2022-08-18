import { useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import Sidebar from "../../components/Sidebar";
import SidebarDoctor from "../../components/SidebarDoctor";
import SidebarClient from "../../components/SidebarClient";
import { useNavigate } from "react-router-dom";

const Doctores = ({
  name,
  lastname,
  nAppointment,
  idPacient,
  Pacient,
  Appointment,
  StateAppointment,
  Prevision,
  StatePayment,
}) => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {}, []);

  // If user is not signed in, redirect to login
  useEffect(() => {
    if (store.currentUser === null) navigate("/login");
  }, [store.currentUser]);
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          {/* <Sidebar /> */}

          {store.currentUser?.user?.role_id === 1 && <Sidebar />}
          {store.currentUser?.user?.role_id === 2 && <SidebarDoctor />}
          {store.currentUser?.user?.role_id === 3 && <SidebarClient />}
        </div>
        <div className="col py-3">
          {/* inicio contenido */}

          <div
            className="container-fluid p-5"
            style={{
              fontFamily: "monospace",
            }}
          >
            <div
              className="col-12 p-5 rounded-3"
              style={{ color: "black", backgroundColor: "#8dc2fe" }}
            >
              <div className="container-fluid">
                <h3 className="display-5 fw-bold">
                  Bienvenido(a),
                  <br></br>
                  Dr(a). Doctor Ficticio
                </h3>
                <p className="col-sm-8 fs-5 pt-4 m-2">
                  Tienes 1 cita(s) agendada(s)
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="container p-5">
              <div className="col-sm-12">
                <div className="table-responsive">
                  <table
                    className="table"
                    style={{
                      width: "100%",
                      border: "1px solid #000",
                      fontSize: "15px",
                    }}
                  >
                    <thead>
                      <tr style={{ background: "#8dc2fe" }}>
                        <th
                          scope="col"
                          style={{ width: "5%", border: "1px solid #000" }}
                        >
                          #
                        </th>
                        <th
                          scope="col"
                          style={{ width: "25%", border: "1px solid #000" }}
                        >
                          Paciente
                        </th>
                        <th
                          scope="col"
                          style={{ width: "20%", border: "1px solid #000" }}
                        >
                          Cita
                        </th>
                        <th
                          scope="col"
                          style={{ width: "15%", border: "1px solid #000" }}
                        >
                          Estado
                        </th>

                        <th
                          scope="col"
                          style={{ width: "15%", border: "1px solid #000" }}
                        >
                          Estado del pago
                        </th>
                        <th
                          scope="col"
                          style={{ width: "10%", border: "1px solid #000" }}
                        >
                          <i className="fa-solid fa-pen-to-square"></i>{" "}
                          <i className="fa-solid fa-trash-can"></i>
                        </th>
                      </tr>
                    </thead>
                    <tbody
                      className="table-group-divider"
                      style={{ fontSize: "13px" }}
                    >
                      <tr>
                        <th scope="row" style={{ border: "1px solid #000" }}>
                          #8999
                        </th>
                        <td style={{ border: "1px solid #000" }}>
                          Juan Bodoque
                        </td>
                        <td style={{ border: "1px solid #000" }}>
                          24 de Agosto, 2022. 18:00hrs
                        </td>
                        <td style={{ border: "1px solid #000" }}>Pendiente</td>
                        <td style={{ border: "1px solid #000" }}>Realizado</td>
                        <td style={{ border: "1px solid #000" }}>
                          <div>
                            <input
                              className="form-check-input"
                              type="radio"
                              name="radioNoLabel"
                              id="radioNoLabel1"
                              value=""
                              aria-label="..."
                            ></input>
                            <input
                              className="form-check-input"
                              type="radio"
                              name="radioNoLabel"
                              id="radioNoLabel1"
                              value=""
                              aria-label="..."
                            ></input>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctores;
