import { useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import Sidebar from "../../components/Sidebar";
import SidebarDoctor from "../../components/SidebarDoctor";
import SidebarClient from "../../components/SidebarClient";
import { useNavigate } from "react-router-dom";

import ModalEdit from "../../components/Modal/ModalEdit";
import ModalDelete from "../../components/Modal/ModalDelete";
import ModalAddAppointment from "../../components/Modal/ModalAddAppointment";
import TableDoctorAppointments from "../../components/tableDoctorAppointments";

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

  // If user is not signed in, redirect to login
  useEffect(() => {
    if (store.currentUser === null) navigate("/login");
  }, [store.currentUser]);

  useEffect(() => {
    actions.getDoctorAppointments();
  }, []);
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
            className="container-fluid py-5 ps-0"
            style={{
              fontFamily: "monospace",
            }}
          >
            <div
              className="p-5 rounded-3"
              style={{ color: "black", backgroundColor: "#8dc2fe" }}
            >
              <div className="container-fluid pe-0">
                <h3 className="display-5 fw-bold">
                  Bienvenido(a),
                  <br></br>
                  Dr(a). {store.currentUser?.user?.name}{" "}
                  {store.currentUser?.user?.lastname}
                </h3>
                <p className="col-sm-8 fs-5 pt-4 m-2">
                  Tienes {store.doctorAppointments?.length || 0} cita(s)
                  agendada(s)
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="container p-3">
              {/* agendar cita con la base de datos de usuarios */}
              <div className="appointment-button mb-4">
                <ModalAddAppointment
                  addButtonColor="white"
                  backgroundColor="#8dc2fe"
                  color="white"
                />
              </div>

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
                        <th scope="col" className="th" style={{ width: "5%" }}>
                          #
                        </th>
                        <th scope="col" className="th" style={{ width: "20%" }}>
                          Paciente
                        </th>
                        <th scope="col" className="th" style={{ width: "20%" }}>
                          Cita
                        </th>
                        <th scope="col" className="th" style={{ width: "15%" }}>
                          Estado de la cita
                        </th>
                        <th scope="col" className="th" style={{ width: "15%" }}>
                          Estado del pago
                        </th>
                        <th scope="col" className="th" style={{ width: "15%" }}>
                          Invoice
                        </th>
                        <th scope="col" className="th" style={{ width: "10%" }}>
                          <i className="fa-solid fa-pen-to-square me-3"></i>{" "}
                          <i className="fa-solid fa-trash-can"></i>
                        </th>
                      </tr>
                    </thead>
                    {!!store.doctorAppointments &&
                      store.doctorAppointments.length > 0 &&
                      store.doctorAppointments.map((appointment, i) => (
                        <TableDoctorAppointments
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
        </div>
      </div>
    </div>
  );
};

export default Doctores;
