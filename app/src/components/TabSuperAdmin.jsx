import { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import ServiceCard from './ServiceCard';
import '../styles/TabSuperAdmin.css';

function TabSuperAdmin() {
    const [activeTab, setActiveTab] = useState("0");

    const cambiarTab = (numeroTab) => {
        if (activeTab !== numeroTab) {
            setActiveTab(numeroTab);
        }
    };
    return (
        <div className="TabSuperAdmin">
            <Nav tabs
            id="tabs">
                <NavItem>
                    <NavLink
                        className={(activeTab == "1" ? "activeTab baseTab" : "baseTab")}
                        onClick={() => cambiarTab("1")}><i className="fa-solid fa-calendar-check p-1" style={{color:"#8dc2fe"}}></i>
                        Citas
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink
                        className={(activeTab == "2" ? "activeTab baseTab" : "baseTab")}
                        onClick={() => cambiarTab("2")}><i className="fa-solid fa-hospital-user p-1" style={{color:"#8dc2fe"}}></i> 
                        Pacientes
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink
                        className={(activeTab == "3" ? "activeTab baseTab" : "baseTab")}
                        onClick={() => cambiarTab("3")}><i className="fa-solid fa-user-doctor p-1" style={{color:"#8dc2fe"}}></i>
                        Especialistas
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink
                        className={(activeTab == "4" ? "activeTab baseTab" : "baseTab")}
                        onClick={() => cambiarTab("4")}><i className="fa-solid fa-bookmark p-1" style={{color:"#8dc2fe"}} />
                        Servicios
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <div className="container">
                        <br />
                        <table className="table table-borderer table-sm">
                            <thead>
                                <tr
                                    style={{ backgroundColor: "#e8ffeb" }}>
                                    <th scope="col"
                                        style={{ width: "5%", border: "1px solid #000" }}>#Cita</th>
                                    <th scope="col"
                                        style={{ width: "15%", border: "1px solid #000" }}>Especialista</th>
                                    <th scope="col"
                                        style={{ width: "15%", border: "1px solid #000" }}>Paciente</th>
                                    <th scope="col"
                                        style={{ width: "20%", border: "1px solid #000" }}>Cita</th>
                                    <th scope="col"
                                        style={{ width: "20%", border: "1px solid #000" }}>Estado de cita</th>
                                    <th scope="col"
                                        style={{ width: "15%", border: "1px solid #000" }} >Pago</th>
                                    <th scope="col"
                                        style={{ width: "5%", border: "1px solid #000" }} ><i className="fa-solid fa-pen-to-square"></i> <i className="fa-solid fa-trash-can"></i> </th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider"
                                style={{ fontSize: "13px" }}>
                                <tr>
                                    <th scope="row"
                                        style={{ border: "1px solid #000" }}>#5666</th>
                                    <td
                                        style={{ border: "1px solid #000" }}>Juanín Juan Harry</td>
                                    <td
                                        style={{ border: "1px solid #000" }}>Joe Opino</td>
                                    <td
                                        style={{ border: "1px solid #000" }}>13 de Agosto, 2022. 10:00 hrs</td>
                                    <td
                                        style={{ border: "1px solid #000" }}>Realizado</td>

                                    <td
                                        style={{ border: "1px solid #000" }}>Realizado</td>
                                    <td
                                        style={{ border: "1px solid #000" }}>
                                        <div>
                                            <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..."></input>
                                            <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..."></input>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </TabPane>

                <TabPane tabId="2">
                    <div className="container">
                        <br />
                        <table className="table table-borderer table-sm">

                            <thead>
                                <tr
                                    style={{ backgroundColor: "#bcbbf8" }}>
                                    <th scope="col"
                                        style={{ width: "5%", border: "1px solid #000", padding: "5px 10px" }}>ID</th>
                                    <th scope="col"
                                        style={{ width: "20%", border: "1px solid #000", padding: "5px 10px" }}>Especialista</th>
                                    <th scope="col"
                                        style={{ width: "15%", border: "1px solid #000", padding: "5px 10px" }}>Especialidad</th>
                                    <th scope="col"
                                        style={{ width: "10%", border: "1px solid #000", padding: "5px 10px" }}>Código título</th>
                                    <th scope="col"
                                        style={{ width: "20%", border: "1px solid #000", padding: "5px 10px" }}>Datos generales</th>
                                    <th scope="col"
                                        style={{ width: "15%", border: "1px solid #000", padding: "5px 10px" }} >Tarifa</th>
                                    <th scope="col"
                                        style={{ width: "5%", border: "1px solid #000", padding: "5px 10px" }} ><i className="fa-solid fa-pen-to-square"></i> <i class="fa-solid fa-trash-can"></i></th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider"
                                style={{ fontSize: "13px" }}>
                                <tr>
                                    <th scope="row"
                                        style={{ border: "1px solid #000", padding: "5px 10px" }}>#4567</th>
                                    <td
                                        style={{ border: "1px solid #000", padding: "5px 10px" }}>Juan Bodoque</td>
                                    <td
                                        style={{ border: "1px solid #000", padding: "5px 10px" }}>Psicólogo</td>
                                    <td
                                        style={{ border: "1px solid #000", padding: "5px 10px" }}>#85494b8</td>

                                    <td
                                        style={{ border: "1px solid #000", padding: "5px 10px" }}>Enfoque psicoanalista</td>
                                    <td
                                        style={{ border: "1px solid #000", padding: "5px 10px" }}>$45.000 por sesión</td>
                                    <td
                                        style={{ border: "1px solid #000" }}>
                                        <div>
                                            <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..."></input>

                                            <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..."></input>
                                        </div>
                                    </td>

                                </tr>

                                <tr>
                                    <th scope="row"
                                        style={{ border: "1px solid #000" }}>23459</th>
                                    <td
                                        style={{ border: "1px solid #000" }}>Maria Rojas</td>
                                    <td
                                        style={{ border: "1px solid #000" }}>Psiquiatra</td>
                                    <td
                                        style={{ border: "1px solid #000", padding: "5px 10px" }}>#85334b8</td>
                                    <td
                                        style={{ border: "1px solid #000" }}>Especialidad Psicosis</td>
                                    <td
                                        style={{ border: "1px solid #000" }}>$45.000 por sesión</td>
                                    <td
                                        style={{ border: "1px solid #000" }}>
                                        <div>
                                            <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..."></input>

                                            <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..."></input>
                                        </div>
                                    </td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </TabPane>

                <TabPane tabId="3">
                    <div className="container">
                        <br />
                        <table className="table table-borderer table-sm">

                            <thead>
                                <tr
                                    style={{ backgroundColor: "#6495ed" }}>
                                    <th scope="col"
                                        style={{ width: "5%", border: "1px solid #000" }}>ID</th>
                                    <th scope="col"
                                        style={{ width: "15%", border: "1px solid #000" }}>Paciente</th>
                                    <th scope="col"
                                        sstyle={{ width: "20%", border: "1px solid #000" }}>Información</th>
                                    <th scope="col"
                                        style={{ width: "20%", border: "1px solid #000" }}>Historial de citas</th>
                                    <th scope="col"
                                        sstyle={{ width: "15%", border: "1px solid #000" }}>Próximas citas</th>
                                    <th scope="col"
                                        style={{ width: "10%", border: "1px solid #000" }} >Pago</th>
                                    <th scope="col"
                                        style={{ width: "5%", border: "1px solid #000" }} ><i className="fa-solid fa-pen-to-square"></i><i class="fa-solid fa-trash-can"></i></th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider"
                                style={{ fontSize: "13px" }}>
                                <tr>
                                    <th scope="row"
                                        style={{ border: "1px solid #000" }}>#9876</th>
                                    <td
                                        style={{ border: "1px solid #000" }}>Joe Opino</td>
                                    <td
                                        style={{ border: "1px solid #000" }}>joeopino@gmail.com</td>
                                    <td
                                        style={{ border: "1px solid #000" }}>13 de Agosto, 2022. Dr. Juanín Juan Harry</td>
                                    <td
                                        style={{ border: "1px solid #000" }}>16 de Agosto, 2022. 10:00 hrs</td>
                                    <td
                                        style={{ border: "1px solid #000" }}>Realizado</td>
                                    <td
                                        style={{ border: "1px solid #000" }}>
                                        <div>
                                            <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..."></input>

                                            <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..."></input>
                                        </div>
                                    </td>

                                </tr>


                            </tbody>


                        </table>

                    </div>
                </TabPane>
{/*inicio tabla servicios*/}
                <TabPane tabId="4">
                    <div className="container">
                        <br />
                        <table className="table table-borderer table-sm">

                            <thead>
                                <tr
                                    style={{ backgroundColor: "#939794", color:"white" }}>
                                    <th scope="col"
                                        style={{ width: "5%", border: "1px solid #000" }}>ID</th>
                                    <th scope="col"
                                        style={{ width: "20%", border: "1px solid #000" }}>Servicio</th>
                                    <th scope="col"
                                        sstyle={{ width: "20%", border: "1px solid #000" }}>Información</th>
                                    <th scope="col"
                                        style={{ width: "10%", border: "1px solid #000" }}>Tarifa</th>
                                    <th scope="col"
                                        sstyle={{ width: "20%", border: "1px solid #000" }}>Especialistas disponibles</th>
                                    <th scope="col"
                                        style={{ width: "20%", border: "1px solid #000" }} >Disponibilidad</th>
                                    <th scope="col"
                                        style={{ width: "5%", border: "1px solid #000" }} ><i className="fa-solid fa-pen-to-square"></i><i class="fa-solid fa-trash-can"></i></th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider"
                                style={{ fontSize: "13px" }}>
                                <tr>
                                    <th scope="row"
                                        style={{ border: "1px solid #000" }}>#9876</th>
                                    <td
                                        style={{ border: "1px solid #000" }}>Terapia individual</td>
                                    <td
                                        style={{ border: "1px solid #000" }}>Sesión de 45 minutos</td>
                                    <td
                                        style={{ border: "1px solid #000" }}>$20.000 por sesión</td>
                                    <td
                                        style={{ border: "1px solid #000" }}>Juan Bodoque</td>
                                    <td
                                        style={{ border: "1px solid #000" }}>Disponibilidad</td>
                                    <td
                                        style={{ border: "1px solid #000" }}>
                                        <div className="botones">
                                            <input className="form-check-input " type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..."></input>

                                            <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..."></input>
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