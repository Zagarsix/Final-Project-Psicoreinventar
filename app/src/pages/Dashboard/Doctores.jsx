import { useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import { Table, Thead, Tr, Th } from "react-super-responsive-table";
import Sidebar from "../../components/Sidebar";
import SidebarDoctor from "../../components/SidebarDoctor";
import SidebarClient from "../../components/SidebarClient";
import { useNavigate } from "react-router-dom";
import TableDoctorAppointments from "../../components/tableDoctorAppointments";
import ModalAddAppointmentDoctor from "../../components/Modal/ModalAddAppointmentDoctor";

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
    actions.getDoctorPatients();
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
          <div
            className="container-fluid py-5 ps-0"
            style={{
              fontFamily: "monospace",
            }}
          >
            <div className="p-5 rounded-3" style={{ color: "black", backgroundColor: "#8dc2fe" }}>
              <div className="container-fluid pe-0">
                <h3 className="display-5 fw-bold">
                  Bienvenido(a),
                  <br></br>
                  Dr(a). {store.currentUser?.user?.name} {store.currentUser?.user?.lastname}
                </h3>
                <p className="col-sm-8 fs-5 pt-4 m-2">
                  Tienes {store.doctorAppointments?.length || 0} cita(s) agendada(s)
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="container p-3">
              {/* agendar cita con la base de datos de usuarios */}
              <div className="appointment-button mb-4">
                <ModalAddAppointmentDoctor
                  addButtonColor="white"
                  backgroundColor="#8dc2fe"
                  color="white"
                />
              </div>

              <div className="col-sm-12">
                <div className="table-responsive">
                  <Table
                    className="table"
                    style={{
                      width: "100%",
                      border: "1px solid #000",
                      fontSize: "15px",
                    }}
                  >
                    <Thead>
                      <Tr style={{ background: "#8dc2fe" }}>
                        <Th scope="col" className="th p-2" style={{ width: "5%" }}>
                          ID
                        </Th>
                        <Th scope="col" className="th" style={{ width: "15%" }}>
                          Paciente
                        </Th>
                        <Th scope="col" className="th" style={{ width: "25%" }}>
                          Cita
                        </Th>
                        <Th scope="col" className="th" style={{ width: "15%" }}>
                          Estado de la cita
                        </Th>
                        <Th scope="col" className="th" style={{ width: "15%" }}>
                          Estado del pago
                        </Th>
                        <Th scope="col" className="th" style={{ width: "15%" }}>
                          Invoice
                        </Th>
                        <Th scope="col" className="th" style={{ width: "10%" }}>
                          <div className="d-flex justify-content-center align-items-center">
                            <i className="fa-solid fa-pen-to-square btn-dashboard"></i>{" "}
                            <i className="fa-solid fa-trash-can btn-dashboard"></i>
                          </div>
                        </Th>
                      </Tr>
                    </Thead>
                    {!!store.doctorAppointments &&
                      store.doctorAppointments.length > 0 &&
                      store.doctorAppointments.map((appointment, i) => (
                        <TableDoctorAppointments {...appointment} key={i} index={appointment.id} />
                      ))}
                  </Table>
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
