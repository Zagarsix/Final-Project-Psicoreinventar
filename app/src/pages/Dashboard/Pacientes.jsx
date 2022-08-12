import Sidebar from "../../components/Sidebar";

const Pacientes = () => {
    return (

        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                    <Sidebar />
                </div>
                <div className="col py-3">
                    {/* inicio contenido */}
                    <div className="container text-center">
                        <div className="row">
                            <h1>Pacientes</h1>
                            <div className="col">Nombre paciente</div>
                            <div className="col">Editar</div>
                            <div className="col">Eliminar</div>
                        </div>
                    </div>

                    {/* fin contenido */}
                </div>
            </div>
        </div>



    );
};

export default Pacientes