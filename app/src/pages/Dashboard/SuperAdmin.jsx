import Sidebar from "../../components/Sidebar";
import TabSuperAdmin from "../../components/TabSuperAdmin";



const SuperAdmin = () => {
    return (

        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                    <Sidebar />
                </div>
                <div className="col py-3">
                    {/*inicio contenido*/}
                    < div className="container text-center text-white"
                        style={{
                            fontFamily: "monospace"
                        }} >
                        <div className="p-5 mb-4 rounded-3"
                            style={{ color: "#8dc2fe", backgroundColor: "black" }}>
                            <div className="container-fluid py-5">
                                
                                <h1 className="display-5 fw-bold">
                                    Bienvenido(a), Super Admin</h1>
                            </div>
                        </div>
                    </div >


                    <TabSuperAdmin />


                    {/*fin contenido*/}

                </div>
            </div>
        </div>
    );
};


export default SuperAdmin;