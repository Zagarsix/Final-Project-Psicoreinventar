import Sidebar from "../../components/Sidebar";

const Profile = () => {
    return (

        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                    <Sidebar />
                </div>
                <div className="col py-3">
                    {/* inicio contenido */}
                    <div className="container p-4"
                        style={{ backgroundColor: "#8dc2fe", fontFamily: "monospace" }}>
                        <div className="row">
                            <div className="div">
                                <div className="col-sm-12 p-4 my-3  text-center">
                                    <h2>Bienvenido(a), <strong>Usuario(a) Ficticio(a)</strong> </h2>
                                </div>
                                <div className="col--12 p-4">
                                    <h6> Actualizar mis datos </h6>
                                </div>
                            </div>
                        </div>

                        <h6>en construcción :D</h6> 
                    </div>



                    {/* fin contenido */}
                </div>
            </div>
        </div>



    );
};

export default Profile 