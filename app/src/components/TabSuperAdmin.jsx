import { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import TableDataClient from "../components/TableDataClient";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import ServiceCard from "./ServiceCard";
import "../styles/TabSuperAdmin.css";
import "../styles/DashboardTables.css";
import TableDataService from "./TableDataService";
import TableDataSpecialist from "./TableDataSpecialist";
import TableDataAppointment from "./TableDataAppointment";
import ModalAddWithForm from "./Modal/ModalAddWithForm";

function TabSuperAdmin() {
  const { store, actions } = useContext(Context);

  const [activeTab, setActiveTab] = useState("0");

  const cambiarTab = (numeroTab) => {
    if (activeTab !== numeroTab) {
      setActiveTab(numeroTab);
    }
  };

  useEffect(() => {
    actions.getAllAppointments();
    actions.getClients();
    actions.getAdmins();
  }, []);

  return (
    <div className="TabSuperAdmin">
      <br />
      <Nav tabs id="tabs">
        <NavItem>
          <NavLink
            className={activeTab == "1" ? "activeTab baseTab" : "baseTab"}
            onClick={() => cambiarTab("1")}
          >
            <i
              className="fa-solid fa-calendar-check p-1"
              style={{ color: "#8DC2FE" }}
            ></i>
            Citas
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab == "2" ? "activeTab baseTab" : "baseTab"}
            onClick={() => cambiarTab("2")}
          >
            <i
              className="fa-solid fa-hospital-user p-1"
              style={{ color: "#8DC2FE" }}
            ></i>
            Pacientes
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab == "3" ? "activeTab baseTab" : "baseTab"}
            onClick={() => cambiarTab("3")}
          >
            <i
              className="fa-solid fa-user-doctor p-1"
              style={{ color: "#8DC2FE" }}
            ></i>
            Especialistas
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab == "4" ? "activeTab baseTab" : "baseTab"}
            onClick={() => cambiarTab("4")}
          >
            <i
              className="fa-solid fa-bookmark p-1"
              style={{ color: "#8DC2FE" }}
            />
            Servicios
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent activeTab={activeTab}>
        {/* !!!!!!!!!!!!!!!!!! TABLA DE CITAS !!!!!!!!!!!!!!!!!!!!!!!*/}
        <TabPane tabId="1">
          <div className="container">
            <br />

            <table className="table table-borderer table-sm shadow">
              <thead>
                <tr style={{ backgroundColor: "#E8FFEB" }}>
                  <th scope="col" className="th p-2">
                    #
                  </th>
                  <th scope="col" className="th p-2">
                    Fecha
                  </th>
                  <th scope="col" className="th p-2">
                    ID Paciente
                  </th>
                  <th scope="col" className="th p-2">
                    Paciente
                  </th>
                  <th scope="col" className="th p-2">
                    ID Doctor
                  </th>
                  <th scope="col" className="th p-2">
                    Doctor
                  </th>
                  <th scope="col" className="th p-2">
                    Servicio
                  </th>
                  <th scope="col" className="th p-2">
                    Invoice
                  </th>
                  <th scope="col" className="th p-2">
                    <i className="fa-solid fa-pen-to-square me-2"></i>
                    <i className="fa-solid fa-trash-can"></i>
                  </th>
                </tr>
              </thead>
              {!!store.appointments &&
                store.appointments.length > 0 &&
                store.appointments.map((appointment, i) => (
                  <TableDataAppointment
                    {...appointment}
                    key={i}
                    index={appointment.id}
                  />
                ))}
            </table>
          </div>
        </TabPane>

        {/* !!!!!!!!!!!!!!!!!! TABLA DE CLIENTES !!!!!!!!!!!!!!!!!!!!!!!*/}
        <TabPane tabId="2">
          <div className="container">
            <br />
            <table className="table table-borderer table-sm shadow">
              <thead>
                <tr style={{ backgroundColor: "#6495ED" }}>
                  <th scope="col" className="th p-2">
                    ID
                  </th>
                  <th scope="col" className="th p-2">
                    Paciente
                  </th>
                  <th scope="col" className="th p-2">
                    Email
                  </th>
                  <th scope="col" className="th p-2">
                    Historial de citas
                  </th>
                  <th scope="col" className="th p-2">
                    Próximas citas
                  </th>
                  <th scope="col" className="th p-2">
                    Pago
                  </th>
                  <th scope="col" className="th p-2">
                    <i className="fa-solid fa-pen-to-square me-2"></i>
                    <i className="fa-solid fa-trash-can"></i>
                  </th>
                </tr>
              </thead>
              {!!store.clients &&
                store.clients.length > 0 &&
                store.clients.map((client, i) => (
                  <TableDataClient {...client} key={i} index={client.id} />
                ))}
            </table>
          </div>
        </TabPane>

        {/* !!!!!!!!!!!!!!!!!! TABLA DE ESPECIALISTAS !!!!!!!!!!!!!!!!!!!!!!!*/}
        <TabPane tabId="3">
          <div className="container">
            <div className="add-specialist-button mt-2">
              {/* <ModalAddSpecialist /> */}
              <ModalAddWithForm
                addWord="Agregar"
                connector="un"
                addWhat="especialista"
              />
            </div>
            <br />
            <table className="table table-borderer table-sm shadow">
              <thead>
                <tr style={{ backgroundColor: "#BCBBF8" }}>
                  <th scope="col" className="th p-2">
                    ID
                  </th>
                  <th scope="col" className="th p-2">
                    Especialista
                  </th>
                  <th scope="col" className="th p-2">
                    Email
                  </th>
                  <th scope="col" className="th p-2">
                    Formación académica
                  </th>
                  <th scope="col" className="th p-2">
                    Experiencia laboral
                  </th>
                  <th scope="col" className="th p-2">
                    Especialización
                  </th>
                  <th scope="col" className="th p-2">
                    <i className="fa-solid fa-pen-to-square me-2"></i>
                    <i className="fa-solid fa-trash-can"></i>
                  </th>
                </tr>
              </thead>
              {!!store.doctors &&
                store.doctors.length > 0 &&
                store.doctors.map((doctor, i) => (
                  <TableDataSpecialist {...doctor} key={i} index={doctor.id} />
                ))}
            </table>
          </div>
        </TabPane>
        {/* !!!!!!!!!!!!!!!!!! TABLA DE SERVICIOS !!!!!!!!!!!!!!!!!!!!!!!*/}
        <TabPane tabId="4">
          <div className="container">
            {/* <ModalAddService /> */}

            <div className="add-service-button mt-2">
              <ModalAddWithForm
                addWord="Añadir"
                connector="un"
                addWhat="servicio"
              />
            </div>
            <br />
            <table className="table table-borderer table-sm shadow">
              <thead>
                <tr style={{ backgroundColor: "#939794", color: "white" }}>
                  <th scope="col" className="th p-2" style={{ width: "5%" }}>
                    ID
                  </th>
                  <th scope="col" className="th p-2" style={{ width: "25%" }}>
                    Servicio
                  </th>
                  <th scope="col" className="th p-2" style={{ width: "35%" }}>
                    Descripción
                  </th>
                  <th scope="col" className="th p-2" style={{ width: "10%" }}>
                    Tarifa
                  </th>
                  <th scope="col" className="th p-2" style={{ width: "10%" }}>
                    Duración
                  </th>

                  <th scope="col" className="th p-2">
                    <i className="fa-solid fa-pen-to-square me-2"></i>
                    <i className="fa-solid fa-trash-can"></i>
                  </th>
                </tr>
              </thead>
              {!!store.services &&
                store.services.length > 0 &&
                store.services.map((service, i) => (
                  <TableDataService {...service} key={i} index={service.id} />
                ))}
            </table>
          </div>
        </TabPane>
        {/*fin tabla servicios*/}
      </TabContent>
    </div>
  );
}

export default TabSuperAdmin;
