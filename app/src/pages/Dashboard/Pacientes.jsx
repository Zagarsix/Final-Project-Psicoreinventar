import { useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import Sidebar from "../../components/Sidebar";
import SidebarDoctor from "../../components/SidebarDoctor";
import SidebarClient from "../../components/SidebarClient";
import { useNavigate } from "react-router-dom";
import ModalAddAppointment from "../../components/Modal/ModalAddAppointment";
import TablePacientAppointments from "../../components/TablePacientAppointments";

const Pacientes = ({}) => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  // If user is not signed in, redirect to login
  useEffect(() => {
    if (store.currentUser === null) navigate("/login");
  }, [store.currentUser]);

  useEffect(() => {
    actions.getPacientAppointments();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          {store.currentUser?.user?.role_id === 1 && <Sidebar />}
          {store.currentUser?.user?.role_id === 2 && <SidebarDoctor />}
          {store.currentUser?.user?.role_id === 3 && <SidebarClient />}
        </div>
        <div className="col py-3">
          <div
            className="container-fluid py-5 ps-0"
            style={{
              fontFamily: "monospace",
            }}
          >
            <div
              className="p-5 rounded-3"
              style={{ color: "black", backgroundColor: "#bcbbf8" }}
            >
              <div className="container-fluid pe-0">
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
              <div className="appointment-button mb-4">
                <ModalAddAppointment
                  backgroundColor="#BCBBF8"
                  color="black"
                  addButtonColor="white"
                />
              </div>
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
                        <th scope="col" className="th" style={{ width: "5%" }}>
                          #ID
                        </th>
                        <th scope="col" className="th" style={{ width: "25%" }}>
                          Especialista
                        </th>
                        <th scope="col" className="th" style={{ width: "30%" }}>
                          Cita
                        </th>
                        <th scope="col" className="th" style={{ width: "15%" }}>
                          Precio
                        </th>
                        <th scope="col" className="th" style={{ width: "15%" }}>
                          Estado
                        </th>
                        <th scope="col" className="th" style={{ width: "10%" }}>
                          Cancelar cita
                        </th>
                      </tr>
                    </thead>

                    {!!store.pacientAppointments &&
                      store.pacientAppointments.length > 0 &&
                      store.pacientAppointments.map((appointment, i) => (
                        <TablePacientAppointments
                          {...appointment}
                          key={i}
                          index={appointment.id}
                        />
                      ))}
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
