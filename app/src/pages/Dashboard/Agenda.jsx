import Sidebar from "../../components/Sidebar";

const Agenda = () => {
    return (

        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                    <Sidebar />
                </div>
                <div className="col py-3">
                    {/* inicio contenido */}
                    <div className="container text-center">
                        <div><h1>AGENDA</h1></div>
                        <div className="row">
                            <div className="col">Nombre paciente</div>
                            <div className="col">Hora de cita</div>
                            <div className="col">Column</div>
                        </div>
                    </div>

                    {/* fin contenido */}
                </div>
            </div>
        </div>



    );
};

export default Agenda