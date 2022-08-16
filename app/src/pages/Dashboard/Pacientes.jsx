import { useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import Sidebar from "../../components/Sidebar";

const Pacientes = ({}) => {
  const { store, actions } = useContext(Context);

  useEffect(() => {}, []);
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <Sidebar />
        </div>
        <div className="col py-3">
          <div
            className="container-fluid p-5"
            style={{
              fontFamily: "monospace",
            }}
          >
            <div
              className="p-5 rounded-3"
              style={{ color: "black", backgroundColor: "#bcbbf8" }}
            >
              <div className="container-fluid">
                <h1 className="display-5 fw-bold">
                  Bienvenido(a), {store.currentUser?.user?.name}{" "}
                  {store.currentUser?.user?.lastname}
                </h1>
                <p className="col-md-8 fs-4">Tienes 1 cita(s) agendada(s)</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="container p-2">
              <div className="col-md-12">
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
                      <tr style={{ backgroundColor: "#bcbbf8" }}>
                        <th
                          scope="col"
                          style={{ width: "5%", border: "1px solid #000" }}
                        >
                          #
                        </th>
                        <th
                          scope="col"
                          style={{ width: "30%", border: "1px solid #000" }}
                        >
                          Especialista
                        </th>
                        <th
                          scope="col"
                          style={{ width: "30%", border: "1px solid #000" }}
                        >
                          Cita
                        </th>
                        <th
                          scope="col"
                          style={{ width: "20%", border: "1px solid #000" }}
                        >
                          Estado
                        </th>
                        <th
                          scope="col"
                          style={{ width: "15%", border: "1px solid #000" }}
                        >
                          Pago
                        </th>
                      </tr>
                    </thead>
                    <tbody
                      className="table-group-divider"
                      style={{ fontSize: "13px" }}
                    >
                      <tr>
                        <th scope="row" style={{ border: "1px solid #000" }}>
                          #12143
                        </th>
                        <td style={{ border: "1px solid #000" }}>
                          María Rojas
                        </td>
                        <td style={{ border: "1px solid #000" }}>
                          13 Agosto, 2022. 15:00 hrs
                        </td>
                        <td style={{ border: "1px solid #000" }}>Realizado</td>
                        <td style={{ border: "1px solid #000" }}>Realizado</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* fin contenido */}
        </div>
      </div>
    </div>
  );
};

export default Pacientes;
