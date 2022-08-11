import Sidebar from "../../components/Sidebar";

const Citas = () => {
    return (

        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                    <Sidebar />
                </div>
                <div className="col py-3">
                    {/* inicio contenido */}
                    <h1>Citas Agendadas</h1>
                    <div className="container text-center">
                        <div>
                            
                            <h2>Hola, Nombre login</h2>
                        </div>
                        <div className="row" id="citasRow">
                            <div className="col-md-4">Doctor</div>
                            <div className="col-md">Cita</div>
                            <div className="col-md">Pago</div>
                           
                        </div>
                    </div>


                    {/* fin contenido */}
                </div>
            </div>
        </div>



    );
};

export default Citas