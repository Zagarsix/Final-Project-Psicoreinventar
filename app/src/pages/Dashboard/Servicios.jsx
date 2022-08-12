
import Sidebar from "../../components/Sidebar";


const Servicios = () => {
    return (

        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                   <Sidebar />
                </div>
                <div className="col py-3">
                    {/* inicio contenido */}
                   <h1>Servicios</h1>
                  
                    {/* fin contenido */}
                </div>
            </div>
        </div>



    );
};

export default Servicios