import Sidebar from "../../components/Sidebar";

const Doctores = ({ name, lastname, nAppointment, idPacient, Pacient, Appointment, StateAppointment, Prevision, StatePayment }) => {
    return (

        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                    <Sidebar />
                </div>
                <div className="col py-3">
                    {/* inicio contenido */}

                    < div className="container text-center"
                    style={{fontFamily: "monospace",
                    backgroundColor: "#8dc2fe"}} >
                        <div className="row">
                            <div className="col-md-12 col-12  pt-5 pb-5"
                            >
                                <h1>Bienvenido(a), <strong>Dr(a) Juana De María</strong></h1>
                                <br></br>
                                <h4>Tienes 2 citas agendadas</h4>
                            </div>
                        </div>
                    </div >
                    <div className="row">
                        <div className="container p-5">
                            <div className="col-md-12">

                                <div class="table-responsive">
                                    <table class="table"
                                        style={{ width: "100%", border: "1px solid #000", fontSize: "15px" }}>
                                        <thead>
                                            <tr >
                                                <th scope="col"
                                                    style={{ width: "5%", border: "1px solid #000", background: "#6495ed" }}>#</th>
                                                <th scope="col"
                                                    style={{ width: "25%", border: "1px solid #000", background: "#6495ed" }}>Paciente</th>
                                                <th scope="col"
                                                    style={{ width: "20%", border: "1px solid #000", background: "#6495ed" }}>Cita</th>
                                                <th scope="col"
                                                    style={{ width: "15%",border: "1px solid #000", background: "#6495ed" }}>Estado</th>
                                                
                                                <th scope="col"
                                                    style={{ width: "15%",border: "1px solid #000", background: "#6495ed" }} >Estado del pago</th>
                                                <th scope="col"
                                                    style={{ width: "10%",border: "1px solid #000", background: "#6495ed" }} >Mod/del</th>
                                            </tr>
                                        </thead>
                                        <tbody class="table-group-divider"
                                        style={{fontSize:"13px"}}>
                                            <tr>
                                                <th scope="row"
                                                style={{border: "1px solid #000"}}>#8999</th>
                                                <td 
                                                style={{border: "1px solid #000"}}>Juan Bodoque</td>
                                                <td
                                                style={{border: "1px solid #000"}}>24 de Agosto, 2022. 18:00hrs</td>
                                                <td
                                                style={{border: "1px solid #000"}}>Pendiente</td>
                                                <td
                                                style={{ border: "1px solid #000"}}>Realizado</td>
                                                <td
                                                style={{ border: "1px solid #000"}}>Mod/elim</td>
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