import { useContext, useState, useEffect } from "react";
import React from "react";
import { Table, Thead, Tr, Th } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
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
import FormAddService from "./Modal/Forms/FormAddService";
import FormAddSpecialist from "./Modal/Forms/FormAddSpecialist";

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

            <Table className="table table-borderer table-sm shadow">
              <Thead>
                <Tr style={{ backgroundColor: "#E8FFEB" }}>
                  <Th scope="col" className="th p-2">
                    #
                  </Th>
                  <Th scope="col" className="th p-2">
                    Fecha
                  </Th>
                  <Th scope="col" className="th p-2">
                    ID Paciente
                  </Th>
                  <Th scope="col" className="th p-2">
                    Paciente
                  </Th>
                  <Th scope="col" className="th p-2">
                    ID Doctor
                  </Th>
                  <Th scope="col" className="th p-2">
                    Doctor
                  </Th>
                  <Th scope="col" className="th p-2">
                    Servicio
                  </Th>
                  <Th scope="col" className="th p-2">
                    Invoice
                  </Th>
                  <Th scope="col" className="th p-2">
                    <i className="fa-solid fa-trash-can btn-dashboard"></i>
                  </Th>
                </Tr>
              </Thead>
              {!!store.appointments &&
                store.appointments.length > 0 &&
                store.appointments.map((appointment, i) => (
                  <TableDataAppointment
                    {...appointment}
                    key={i}
                    index={appointment.id}
                  />
                ))}
            </Table>
          </div>
        </TabPane>

        {/* !!!!!!!!!!!!!!!!!! TABLA DE CLIENTES !!!!!!!!!!!!!!!!!!!!!!!*/}
        <TabPane tabId="2">
          <div className="container">
            <br />
            <Table className="table table-borderer table-sm shadow">
              <Thead>
                <Tr style={{ backgroundColor: "#6495ED" }}>
                  <Th scope="col" className="th p-2">
                    ID
                  </Th>
                  <Th scope="col" className="th p-2">
                    Paciente
                  </Th>
                  <Th scope="col" className="th p-2">
                    Email
                  </Th>
                  <Th scope="col" className="th p-2">
                    Historial de citas
                  </Th>
                  <Th scope="col" className="th p-2">
                    Próximas citas
                  </Th>
                  <Th scope="col" className="th p-2">
                    Pago
                  </Th>
                  <Th scope="col" className="th p-2">
                    <i className="fa-solid fa-pen-to-square me-3 btn-dashboard"></i>
                    <i className="fa-solid fa-trash-can btn-dashboard"></i>
                  </Th>
                </Tr>
              </Thead>
              {!!store.clients &&
                store.clients.length > 0 &&
                store.clients.map((client, i) => (
                  <TableDataClient {...client} key={i} index={client.id} />
                ))}
            </Table>
          </div>
        </TabPane>

        {/* !!!!!!!!!!!!!!!!!! TABLA DE ESPECIALISTAS !!!!!!!!!!!!!!!!!!!!!!!*/}
        <TabPane tabId="3">
          <div className="container">
            <div className="add-specialist-button mt-3">
              {/* <ModalAddSpecialist /> */}
              <ModalAddWithForm
                addWord="Agregar"
                connector="un"
                addWhat="especialista"
                backgroundColor="#BCBBF8"
                color="black"
              >
                <FormAddSpecialist />
              </ModalAddWithForm>
            </div>

            <br />
            <Table className="table table-borderer table-sm shadow">
              <Thead>
                <Tr style={{ backgroundColor: "#BCBBF8" }}>
                  <Th scope="col" className="th p-2">
                    ID
                  </Th>
                  <Th scope="col" className="th p-2">
                    Especialista
                  </Th>
                  <Th scope="col" className="th p-2">
                    Email
                  </Th>
                  <Th scope="col" className="th p-2">
                    Formación académica
                  </Th>
                  <Th scope="col" className="th p-2">
                    Experiencia laboral
                  </Th>
                  <Th scope="col" className="th p-2">
                    Especialización
                  </Th>
                  <Th scope="col" className="th p-2" id="botoness">
                    <i className="fa-solid fa-pen-to-square me-3 btn-dashboard"></i>
                    <i className="fa-solid fa-trash-can btn-dashboard"></i>
                  </Th>
                </Tr>
              </Thead>
              {!!store.doctors &&
                store.doctors.length > 0 &&
                store.doctors.map((doctor, i) => (
                  <TableDataSpecialist {...doctor} key={i} index={doctor.id} />
                ))}
            </Table>
          </div>
        </TabPane>
        {/* !!!!!!!!!!!!!!!!!! TABLA DE SERVICIOS !!!!!!!!!!!!!!!!!!!!!!!*/}
        <TabPane tabId="4">
          <div className="container">
            {/* <ModalAddService /> */}

            <div className="add-service-button mt-3">
              <ModalAddWithForm
                addWord="Añadir"
                connector="un"
                addWhat="servicio"
                addButtonColor="primary"
              >
                <FormAddService />
              </ModalAddWithForm>
            </div>
            <br />
            <Table className="table table-borderer table-sm shadow">
              <Thead>
                <Tr style={{ backgroundColor: "#939794", color: "white" }}>
                  <Th scope="col" className="th p-2" style={{ width: "5%" }}>
                    ID
                  </Th>
                  <Th scope="col" className="th p-2" style={{ width: "25%" }}>
                    Servicio
                  </Th>
                  <Th scope="col" className="th p-2" style={{ width: "35%" }}>
                    Descripción
                  </Th>
                  <Th scope="col" className="th p-2" style={{ width: "10%" }}>
                    Tarifa
                  </Th>
                  <Th scope="col" className="th p-2" style={{ width: "10%" }}>
                    Duración
                  </Th>

                  <Th scope="col" className="th p-2">
                    <i className="fa-solid fa-pen-to-square me-3 btn-dashboard"></i>
                    <i className="fa-solid fa-trash-can btn-dashboard"></i>
                  </Th>
                </Tr>
              </Thead>
              {!!store.services &&
                store.services.length > 0 &&
                store.services.map((service, i) => (
                  <TableDataService {...service} key={i} index={service.id} />
                ))}
            </Table>
          </div>
        </TabPane>
        {/*fin tabla servicios*/}
      </TabContent>
    </div>
  );
}

export default TabSuperAdmin;
