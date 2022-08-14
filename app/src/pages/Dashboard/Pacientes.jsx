import Sidebar from "../../components/Sidebar";
const Pacientes = ({}) => {
    return (
        
<div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                    <Sidebar />
                </div>
                <div className="col py-3">

                < div className = "container text-center"
        style={{fontFamily: "monospace",
        backgroundColor: "#bcbbf8"}} >
            <div className="row">
                <div className="col-md-12 col-12  pt-5 pb-5"
                >
                    <h1>Hola, <strong>Paciente ficticio</strong></h1>
                    <br></br>
                    <h4>Tienes 1 citas agendada</h4>
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
                            <tr
                            style={{backgroundColor: "#bcbbf8"}}>
                                <th scope="col"
                                style={{ width: "5%",border: "1px solid #000"}}>#</th>
                                <th scope="col"
                                style={{ width: "30%",  border: "1px solid #000"}}>Especialista</th>
                                <th scope="col"
                                style={{ width: "30%", border: "1px solid #000" }}>Cita</th>
                                <th scope="col"
                                style={{ width: "20%", border: "1px solid #000"}}>Estado</th>
                                <th scope="col"
                                style={{ width: "15%", border: "1px solid #000" }} >Pago</th>
                            </tr>
                        </thead>
                        <tbody class="table-group-divider"
                        style={{fontSize:"13px"}}>
                            <tr>
                                <th scope="row"
                                style={{border: "1px solid #000"}}>#12143</th>
                                <td 
                                style={{border: "1px solid #000"}}>María Rojas</td>
                                <td
                                style={{border: "1px solid #000"}}>13 Agosto, 2022. 15:00 hrs</td>
                                <td
                                style={{border: "1px solid #000"}}>Realizado</td>
                                <td
                                style={{border: "1px solid #000"}}>Realizado</td>
                            </tr>


                        </tbody>
                    </table>
                </div>

                </div>
</div>
</div>



{/* fin contenido */ }
                </div >
</div>
</div>            



    );
};

export default Pacientes;