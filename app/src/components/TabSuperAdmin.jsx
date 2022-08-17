import { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import TableClient from "./TableClient";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import ServiceCard from "./ServiceCard";
import "../styles/TabSuperAdmin.css";
import "../styles/DashboardTables.css";

function TabSuperAdmin() {
  const { store, actions } = useContext(Context);

  const [activeTab, setActiveTab] = useState("0");

  const cambiarTab = (numeroTab) => {
    if (activeTab !== numeroTab) {
      setActiveTab(numeroTab);
    }
  };

  useEffect(() => {
    actions.getClients();
  }, []);

  return (
    // <div className="client-info">
    //   {!!store.clients &&
    //     store.clients.length > 0 &&
    //     store.clients.map((client, i) => (
    //       <TableClient {...client} key={i} index={client.id} />
    //     ))}
    // </div>
    <div className="TabSuperAdmin">
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
                    #Cita
                  </th>
                  <th scope="col" className="th p-2">
                    Especialista
                  </th>
                  <th scope="col" className="th p-2">
                    Paciente
                  </th>
                  <th scope="col" className="th p-2">
                    Cita
                  </th>
                  <th scope="col" className="th p-2">
                    Estado de cita
                  </th>
                  <th scope="col" className="th p-2">
                    Pago
                  </th>
                  <th scope="col" className="th p-2">
                    <i className="fa-solid fa-pen-to-square"></i>{" "}
                    <i className="fa-solid fa-trash-can"></i>{" "}
                  </th>
                </tr>
              </thead>
              <tbody
                className="table-group-divider"
                style={{ fontSize: "13px" }}
              >
                <tr>
                  <td scope="row" className="td p-2">
                    #5666
                  </td>
                  <td className="td p-2">Juanín Juan Harry</td>
                  <td className="td p-2">Joe Opino</td>
                  <td className="td p-2">13 de Agosto, 2022. 10:00 hrs</td>
                  <td className="td p-2">Realizado</td>
                  <td className="td p-2">Realizado</td>
                  <td className="td p-2">
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
        </TabPane>

        {/* !!!!!!!!!!!!!!!!!! TABLA DE ESPECIALISTAS !!!!!!!!!!!!!!!!!!!!!!!*/}
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
                    Información
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
                    <i className="fa-solid fa-pen-to-square"></i>
                    <i class="fa-solid fa-trash-can"></i>
                  </th>
                </tr>
              </thead>
              <tbody
                className="table-group-divider"
                style={{ fontSize: "13px" }}
              >
                <tr>
                  <td scope="row" className="td p-2">
                    #9876
                  </td>
                  <td className="td p-2">Joe Opino</td>
                  <td className="td p-2">joeopino@gmail.com</td>
                  <td className="td p-2">
                    13 de Agosto, 2022. Dr. Juanín Juan Harry
                  </td>
                  <td className="td p-2">16 de Agosto, 2022. 10:00 hrs</td>
                  <td className="td p-2">Realizado</td>
                  <td className="td p-2">
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
        </TabPane>

        {/* !!!!!!!!!!!!!!!!!! TABLA DE PACIENTES !!!!!!!!!!!!!!!!!!!!!!!*/}
        <TabPane tabId="3">
          <div className="container">
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
                    Especialidad
                  </th>
                  <th scope="col" className="th p-2">
                    Código título
                  </th>
                  <th scope="col" className="th p-2">
                    Datos generales
                  </th>
                  <th scope="col" className="th p-2">
                    Tarifa
                  </th>
                  <th scope="col" className="th p-2">
                    <i className="fa-solid fa-pen-to-square"></i>{" "}
                    <i class="fa-solid fa-trash-can"></i>
                  </th>
                </tr>
              </thead>
              <tbody
                className="table-group-divider"
                style={{ fontSize: "13px" }}
              >
                <tr>
                  <td scope="row" className="td p-2">
                    #4567
                  </td>
                  <td className="td p-2">Juan Bodoque</td>
                  <td className="td p-2">Psicólogo</td>
                  <td className="td p-2">#85494b8</td>
                  <td className="td p-2">Enfoque psicoanalista</td>
                  <td className="td p-2">$45.000 por sesión</td>
                  <td className="td p-2">
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
                <tr>
                  <td scope="row" className="td p-2">
                    23459
                  </td>
                  <td className="td p-2">Maria Rojas</td>
                  <td className="td p-2">Psiquiatra</td>
                  <td className="td p-2">#85334b8</td>
                  <td className="td p-2">Especialidad Psicosis</td>
                  <td className="td p-2">$45.000 por sesión</td>
                  <td className="td p-2">
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
        </TabPane>
        {/* !!!!!!!!!!!!!!!!!! TABLA DE SERVICIOS !!!!!!!!!!!!!!!!!!!!!!!*/}
        <TabPane tabId="4">
          <div className="container">
            <br />
            <table className="table table-borderer table-sm shadow">
              <thead>
                <tr style={{ backgroundColor: "#939794", color: "white" }}>
                  <th scope="col" className="th p-2">
                    ID
                  </th>
                  <th scope="col" className="th p-2">
                    Servicio
                  </th>
                  <th scope="col" className="th p-2">
                    Información
                  </th>
                  <th scope="col" className="th p-2">
                    Tarifa
                  </th>
                  <th scope="col" className="th p-2">
                    Especialistas disponibles
                  </th>
                  <th scope="col" className="th p-2">
                    Disponibilidad
                  </th>
                  <th scope="col" className="th p-2">
                    <i className="fa-solid fa-pen-to-square"></i>
                    <i class="fa-solid fa-trash-can"></i>
                  </th>
                </tr>
              </thead>
              <tbody
                className="table-group-divider"
                style={{ fontSize: "13px" }}
              >
                <tr>
                  <td scope="row" className="td p-2">
                    #9876
                  </td>
                  <td className="td p-2">Terapia individual</td>
                  <td className="td  p-2">Sesión de 45 minutos</td>
                  <td className="td p-2">$20.000 por sesión</td>
                  <td className="td p-2">Juan Bodoque</td>
                  <td className="td p-2">Disponibilidad</td>
                  <td className="td p-2">
                    <div className="botones">
                      <input
                        className="form-check-input "
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
        </TabPane>
        {/*fin tabla servicios*/}
      </TabContent>
    </div>
  );
}

export default TabSuperAdmin;
