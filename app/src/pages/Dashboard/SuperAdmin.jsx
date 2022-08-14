import Sidebar from "../../components/Sidebar";


const SuperAdmin = () => {
    return (

        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                    <Sidebar />
                </div>
                <div className="col py-3">
                    {/*inicio del contenido */}
                    < div className="container text-center text-secondary"
                        style={{
                            fontFamily: "monospace",
                            backgroundColor: "#01010b"
                        }} >
                        <div className="row m-3">
                            <div className="col-md-12 pt-5 pb-5 text-center">
                                <h1>Hola, Super Admin </h1>
                                <br></br>
                                <h4>Algo escrito</h4>
                            </div>
                        </div>
                    </div >
                    <div className="row">
                        <div className="container p-5">
                            {/*inicio tabla citas*/}
                            <div className="col-md-12">
                                
                                <h4
                                    style={{ fontFamily: "monospace" }}>Citas</h4>
                                <div class="table-responsive">
                                    <table class="table"
                                        style={{ width: "100%", border: "1px solid #000", fontSize: "15px" }}>
                                        <thead>
                                            <tr
                                                style={{ backgroundColor: "#b1b9c7" }}>
                                                <th scope="col"
                                                    style={{ width: "5%", border: "1px solid #000" }}>#Cita</th>
                                                <th scope="col"
                                                    style={{ width: "10%", border: "1px solid #000" }}>Especialista</th>
                                                <th scope="col"
                                                    style={{ width: "10%", border: "1px solid #000" }}>Paciente</th>
                                                <th scope="col"
                                                    style={{ width: "15%", border: "1px solid #000" }}>Cita</th>
                                                <th scope="col"
                                                    style={{ width: "20%", border: "1px solid #000" }}>Estado de cita</th>
                                                <th scope="col"
                                                    style={{ width: "15%", border: "1px solid #000" }} >Pago</th>
                                                <th scope="col"
                                                    style={{ width: "10%", border: "1px solid #000" }} ><i className="fa-solid fa-pen-to-square"></i> <i className="fa-regular fa-trash float-right"></i> </th>
                                            </tr>
                                        </thead>
                                        <tbody class="table-group-divider"
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
                            </div>
                            {/*fin tabla citas*/}
                            {/*tabla doctores*/}
                            <div className="col-md-12">
                                <h4
                                    style={{ fontFamily: "monospace" }}>Doctores: 2</h4>
                                <div class="table-responsive">
                                    <table class="table"
                                        style={{ width: "100%", border: "1px solid #000", fontSize: "15px", borderCollapse: "collapse" }}>
                                        <thead>
                                            <tr
                                                style={{ backgroundColor: "#b1b9c7" }}>
                                                <th scope="col"
                                                    style={{ width: "5%", border: "1px solid #000", padding: "5px 10px" }}>ID</th>
                                                <th scope="col"
                                                    style={{ width: "10%", border: "1px solid #000", padding: "5px 10px" }}>Especialista</th>
                                                <th scope="col"
                                                    style={{ width: "10%", border: "1px solid #000", padding: "5px 10px" }}>Especialidad</th>
                                                <th scope="col"
                                                    style={{ width: "10%", border: "1px solid #000", padding: "5px 10px" }}>Código título</th>
                                                <th scope="col"
                                                    style={{ width: "20%", border: "1px solid #000", padding: "5px 10px" }}>Datos generales</th>
                                                <th scope="col"
                                                    style={{ width: "15%", border: "1px solid #000", padding: "5px 10px" }} >Tarifa</th>
                                                <th scope="col"
                                                    style={{ width: "10%", border: "1px solid #000", padding: "5px 10px" }} ><i className="fa-solid fa-pen-to-square"></i> <i className="fa-regular fa-trash float-right"></i></th>
                                            </tr>
                                        </thead>
                                        <tbody class="table-group-divider"
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

                            </div>
                            {/*fin tabla doctores*/}

                            {/*tabla pacientes*/}
                            <div className="col-md-12">
                                <h4 style={{ fontFamily: "monospace" }}> Pacientes: 1</h4>

                                <div class="table-responsive">
                                    <table class="table"
                                        style={{ width: "100%", border: "1px solid #000", fontSize: "15px" }}>
                                        <thead>
                                            <tr
                                                style={{ backgroundColor: "#b1b9c7" }}>
                                                <th scope="col"
                                                    style={{ width: "5%", border: "1px solid #000" }}>ID</th>
                                                <th scope="col"
                                                    style={{ width: "15%", border: "1px solid #000" }}>Paciente</th>
                                                <th scope="col"
                                                    sstyle={{ width: "15%", border: "1px solid #000" }}>Información</th>
                                                <th scope="col"
                                                    style={{ width: "20%", border: "1px solid #000" }}>Historial de citas</th>
                                                <th scope="col"
                                                    sstyle={{ width: "15%", border: "1px solid #000" }}>Próximas citas</th>
                                                <th scope="col"
                                                    style={{ width: "10%", border: "1px solid #000" }} >Pago</th>
                                                <th scope="col"
                                                    style={{ width: "10%", border: "1px solid #000" }} ><i className="fa-solid fa-pen-to-square"></i> <i className="fa-regular fa-trash float-right"></i></th>
                                            </tr>
                                        </thead>
                                        <tbody class="table-group-divider"
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

                            </div>
                            {/*fin tabla pacientes*/}





                            {/*fin del contenido*/}
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}


export default SuperAdmin;